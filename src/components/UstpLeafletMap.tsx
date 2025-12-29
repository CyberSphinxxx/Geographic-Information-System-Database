import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with webpack/vite
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// USTP CDO coordinates
const USTP_CENTER: [number, number] = [8.4857, 124.6567];
const DEFAULT_ZOOM = 17;

// Expanded bounding box for USTP area and surrounding roads (for Overpass queries)
// Format: south,west,north,east
const USTP_BBOX = '8.480,124.650,8.492,124.665';

interface UstpLeafletMapProps {
    showBasemap?: boolean;
    showRoads?: boolean;
    showBuildings?: boolean;
}

// Component to handle map resize on mount
function MapResizer() {
    const map = useMap();

    useEffect(() => {
        setTimeout(() => map.invalidateSize(), 100);
    }, [map]);

    return null;
}

// Style for building polygons
const buildingStyle = {
    fillColor: '#d9d0c9',
    color: '#b8b0a8',
    weight: 1.5,
    fillOpacity: 0.85,
};

// Road styles based on highway type
function getRoadStyle(highway: string) {
    switch (highway) {
        case 'primary':
        case 'trunk':
            return { color: '#f7c96d', weight: 8, opacity: 1 }; // Major roads - thick orange
        case 'secondary':
            return { color: '#f7c96d', weight: 6, opacity: 1 }; // Secondary - medium orange
        case 'tertiary':
            return { color: '#fef3c7', weight: 5, opacity: 1 }; // Tertiary - light yellow
        case 'residential':
        case 'living_street':
            return { color: '#ffffff', weight: 4, opacity: 0.95 }; // Residential - white
        case 'service':
        case 'unclassified':
            return { color: '#ffffff', weight: 3, opacity: 0.9 }; // Service roads - thin white
        case 'footway':
        case 'path':
        case 'pedestrian':
            return { color: '#e8d4c4', weight: 2, opacity: 0.8 }; // Footpaths - dotted brown
        default:
            return { color: '#ffffff', weight: 3, opacity: 0.9 }; // Default
    }
}

/**
 * Interactive Leaflet map of USTP Cagayan de Oro campus
 * Uses real OpenStreetMap data with separate toggleable layers
 */
export function UstpLeafletMap({
    showBasemap = true,
    showRoads = true,
    showBuildings = true,
}: UstpLeafletMapProps) {
    const [buildingsData, setBuildingsData] = useState<GeoJSON.FeatureCollection | null>(null);
    const [roadsData, setRoadsData] = useState<GeoJSON.FeatureCollection | null>(null);
    const [loading, setLoading] = useState(true);

    // Fetch buildings and roads from Overpass API
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Overpass query for buildings
                const buildingsQuery = `
                    [out:json][timeout:25];
                    (
                      way["building"](${USTP_BBOX});
                      relation["building"](${USTP_BBOX});
                    );
                    out body;
                    >;
                    out skel qt;
                `;

                // Overpass query for roads
                const roadsQuery = `
                    [out:json][timeout:25];
                    (
                      way["highway"](${USTP_BBOX});
                    );
                    out body;
                    >;
                    out skel qt;
                `;

                // Fetch buildings
                const buildingsResponse = await fetch(
                    `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(buildingsQuery)}`
                );
                const buildingsOsm = await buildingsResponse.json();
                const buildingsGeoJson = osmToGeoJson(buildingsOsm);
                setBuildingsData(buildingsGeoJson);

                // Fetch roads
                const roadsResponse = await fetch(
                    `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(roadsQuery)}`
                );
                const roadsOsm = await roadsResponse.json();
                const roadsGeoJson = osmToGeoJson(roadsOsm);
                setRoadsData(roadsGeoJson);

            } catch (error) {
                console.error('Error fetching OSM data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full min-h-[350px] rounded-lg overflow-hidden relative">
            <MapContainer
                center={USTP_CENTER}
                zoom={DEFAULT_ZOOM}
                scrollWheelZoom={true}
                className="w-full h-full min-h-[350px]"
                style={{ zIndex: 1 }}
            >
                <MapResizer />

                {/* Base Map Layer - Minimal CartoDB (just land/water, no features) */}
                {showBasemap && (
                    <TileLayer
                        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                    />
                )}

                {/* Fallback very minimal layer when basemap is hidden */}
                {!showBasemap && (
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                        opacity={0.2}
                    />
                )}

                {/* Roads Layer - GeoJSON from Overpass */}
                {showRoads && roadsData && (
                    <GeoJSON
                        key="roads-layer"
                        data={roadsData}
                        style={(feature) => {
                            const highway = feature?.properties?.highway || 'default';
                            return getRoadStyle(highway);
                        }}
                    />
                )}

                {/* Buildings Layer - GeoJSON from Overpass */}
                {showBuildings && buildingsData && (
                    <GeoJSON
                        key="buildings-layer"
                        data={buildingsData}
                        style={() => buildingStyle}
                        onEachFeature={(feature, layer) => {
                            if (feature.properties?.name) {
                                layer.bindPopup(`<strong>${feature.properties.name}</strong>`);
                            }
                        }}
                    />
                )}

                {/* USTP Main Campus Marker */}
                <Marker position={USTP_CENTER}>
                    <Popup>
                        <div className="text-center">
                            <strong className="text-sm">USTP - Cagayan de Oro</strong>
                            <br />
                            <span className="text-xs text-gray-600">University of Science and Technology</span>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>

            {/* Loading Overlay */}
            {loading && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-[1000]">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                        <span className="text-sm text-gray-600">Loading map layers...</span>
                    </div>
                </div>
            )}

            {/* Layer Legend Overlay */}
            <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs shadow-md z-[1000]">
                <div className="font-semibold text-gray-700 dark:text-gray-200 mb-1">Active Layers:</div>
                <div className="flex flex-wrap gap-2">
                    {showBasemap && (
                        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded">
                            Basemap
                        </span>
                    )}
                    {showRoads && (
                        <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded">
                            Roads
                        </span>
                    )}
                    {showBuildings && (
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                            Buildings
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

/**
 * Convert Overpass OSM JSON to GeoJSON format
 */
function osmToGeoJson(osmData: {
    elements: Array<{
        type: string;
        id: number;
        lat?: number;
        lon?: number;
        nodes?: number[];
        tags?: Record<string, string>;
    }>;
}): GeoJSON.FeatureCollection {
    const nodes: Record<number, [number, number]> = {};
    const features: GeoJSON.Feature[] = [];

    // First pass: collect all nodes
    for (const element of osmData.elements) {
        if (element.type === 'node' && element.lat && element.lon) {
            nodes[element.id] = [element.lon, element.lat];
        }
    }

    // Second pass: create features from ways
    for (const element of osmData.elements) {
        if (element.type === 'way' && element.nodes) {
            const coordinates = element.nodes
                .map((nodeId) => nodes[nodeId])
                .filter((coord): coord is [number, number] => coord !== undefined);

            if (coordinates.length > 1) {
                // Check if it's a closed polygon (building) or a line (road)
                const isPolygon = element.nodes[0] === element.nodes[element.nodes.length - 1] &&
                    element.tags?.building;

                if (isPolygon) {
                    features.push({
                        type: 'Feature',
                        properties: element.tags || {},
                        geometry: {
                            type: 'Polygon',
                            coordinates: [coordinates],
                        },
                    });
                } else {
                    features.push({
                        type: 'Feature',
                        properties: element.tags || {},
                        geometry: {
                            type: 'LineString',
                            coordinates,
                        },
                    });
                }
            }
        }
    }

    return {
        type: 'FeatureCollection',
        features,
    };
}

export default UstpLeafletMap;
