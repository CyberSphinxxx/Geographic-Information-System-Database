import type { GisSource } from '@/types';

/**
 * Comprehensive database of high-quality GIS data sources
 * Organized into 5 categories: Basemaps, Physical/Elevation, Environment, Human/Social, Infrastructure
 */
export const gisSources: GisSource[] = [
    // ============================================
    // BASEMAPS (4 sources)
    // ============================================
    {
        id: 'osm-001',
        name: 'OpenStreetMap',
        provider: 'OpenStreetMap Foundation',
        type: 'Vector',
        coverage: 'Global',
        formats: ['.osm', '.pbf', '.geojson', '.shp'],
        url: 'https://www.openstreetmap.org/',
        description: 'Collaborative, crowd-sourced map of the world with detailed road networks, buildings, POIs, and land use data.',
        reliability: 4,
        educativeNote: 'Data quality varies by region—urban areas in developed countries have higher accuracy. Always check the "last edited" timestamp for features in your study area.',
    },
    {
        id: 'ne-002',
        name: 'Natural Earth',
        provider: 'Natural Earth Data',
        type: 'Vector',
        coverage: 'Global',
        formats: ['.shp', '.geojson', '.sqlite'],
        url: 'https://www.naturalearthdata.com/',
        description: 'Public domain map dataset featuring physical and cultural vectors at 1:10m, 1:50m, and 1:110m scales.',
        reliability: 5,
        educativeNote: 'Use the appropriate scale for your project—1:10m for detailed regional maps, 1:110m for world maps. Mixing scales will cause visual inconsistencies.',
    },
    {
        id: 'esri-003',
        name: 'Esri World Basemaps',
        provider: 'Esri',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.wmts', '.xyz'],
        url: 'https://www.arcgis.com/home/group.html?id=702026e41f6641fb85da88efe79dc166',
        description: 'Collection of hosted tile basemaps including streets, topographic, imagery, and dark themed maps.',
        reliability: 5,
        educativeNote: 'Requires attribution in published works. Check the Terms of Use—free tier has usage limits that may block requests during peak traffic.',
    },
    {
        id: 'carto-004',
        name: 'CARTO Basemaps',
        provider: 'CARTO',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.png', '.xyz'],
        url: 'https://carto.com/basemaps/',
        description: 'Minimalist, design-focused basemaps including Positron (light) and Dark Matter themes, ideal for data visualization overlays.',
        reliability: 4,
        educativeNote: 'These basemaps use Web Mercator (EPSG:3857). If your analysis data uses a different CRS, reproject before overlaying to avoid misalignment.',
    },

    // ============================================
    // PHYSICAL / ELEVATION (4 sources)
    // ============================================
    {
        id: 'usgs-005',
        name: 'USGS EarthExplorer',
        provider: 'U.S. Geological Survey',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.tiff', '.hdf', '.jp2'],
        url: 'https://earthexplorer.usgs.gov/',
        description: 'Portal to access Landsat, ASTER, SRTM DEMs, aerial imagery, and other remote sensing datasets.',
        reliability: 5,
        educativeNote: 'Register for a free account to enable bulk downloads. Use the "Additional Criteria" tab to filter by cloud cover percentage for optical imagery.',
    },
    {
        id: 'gebco-006',
        name: 'GEBCO Bathymetry',
        provider: 'General Bathymetric Chart of the Oceans',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.netcdf', '.tiff', '.asc'],
        url: 'https://www.gebco.net/',
        description: 'Global terrain model for ocean floor and land with 15 arc-second resolution, combining ship soundings and satellite altimetry.',
        reliability: 5,
        educativeNote: 'Bathymetric data uses negative elevation values. When merging with land DEMs, ensure your color ramp handles the full range from -11,000m to +9,000m.',
    },
    {
        id: 'cop-dem-007',
        name: 'Copernicus DEM',
        provider: 'European Space Agency',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.tiff'],
        url: 'https://spacedata.copernicus.eu/collections/copernicus-digital-elevation-model',
        description: 'High-accuracy Digital Surface Model derived from TanDEM-X mission at 30m and 90m resolution.',
        reliability: 5,
        educativeNote: 'This is a DSM (includes buildings/trees), not a DTM. For hydrological analysis, apply pit-filling algorithms before watershed delineation.',
    },
    {
        id: 'aw3d30-008',
        name: 'ALOS World 3D (AW3D30)',
        provider: 'JAXA',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.tiff'],
        url: 'https://www.eorc.jaxa.jp/ALOS/en/aw3d30/',
        description: '30-meter global digital surface model generated from ALOS PRISM stereo imagery.',
        reliability: 4,
        educativeNote: 'Void areas exist in regions with persistent cloud cover or steep terrain. Cross-reference with SRTM data to fill gaps in mountainous regions.',
    },

    // ============================================
    // ENVIRONMENT (4 sources)
    // ============================================
    {
        id: 'gfw-009',
        name: 'Global Forest Watch',
        provider: 'World Resources Institute',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.tiff', '.geojson'],
        url: 'https://www.globalforestwatch.org/',
        description: 'Near real-time deforestation alerts, tree cover loss/gain data, and forest carbon density maps from 2000 onwards.',
        reliability: 4,
        educativeNote: 'Tree cover ≠ forest. The 30% canopy threshold may include plantations and orchards. Define your forest definition clearly in methodology sections.',
    },
    {
        id: 'worldclim-010',
        name: 'WorldClim',
        provider: 'WorldClim.org',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.tiff', '.bil'],
        url: 'https://www.worldclim.org/',
        description: 'High-resolution global climate data including temperature, precipitation, and 19 bioclimatic variables at ~1km resolution.',
        reliability: 5,
        educativeNote: 'Data represents 1970-2000 averages. For climate-sensitive studies, pair with future projections (CMIP6) and document the time period explicitly.',
    },
    {
        id: 'modis-011',
        name: 'MODIS Land Products',
        provider: 'NASA LP DAAC',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.hdf', '.tiff'],
        url: 'https://modis.gsfc.nasa.gov/data/',
        description: 'Satellite-derived products including NDVI, land cover, fire hotspots, snow cover, and evapotranspiration at 250m-1km resolution.',
        reliability: 5,
        educativeNote: 'MODIS tiles use sinusoidal projection. Use NASA AppEEARS or Google Earth Engine for automatic reprojection and mosaicking.',
    },
    {
        id: 'wdpa-012',
        name: 'World Database on Protected Areas',
        provider: 'UNEP-WCMC & IUCN',
        type: 'Vector',
        coverage: 'Global',
        formats: ['.shp', '.gdb'],
        url: 'https://www.protectedplanet.net/',
        description: 'Comprehensive database of terrestrial and marine protected areas with IUCN categories and management designations.',
        reliability: 4,
        educativeNote: 'Some polygons overlap due to multiple protection designations. Use dissolve operations if calculating total protected area to avoid double-counting.',
    },

    // ============================================
    // HUMAN / SOCIAL (4 sources)
    // ============================================
    {
        id: 'hdx-013',
        name: 'Humanitarian Data Exchange (HDX)',
        provider: 'UN OCHA',
        type: 'Mixed',
        coverage: 'Global',
        formats: ['.csv', '.shp', '.geojson', '.xlsx'],
        url: 'https://data.humdata.org/',
        description: 'Open platform for sharing humanitarian data including admin boundaries, population, displacement, health facilities, and crisis data.',
        reliability: 4,
        educativeNote: 'Admin boundary versions vary between organizations. Always note the source and version (e.g., "OCHA COD-AB v2.0") to ensure reproducibility.',
    },
    {
        id: 'gpw-014',
        name: 'Gridded Population of the World (GPW)',
        provider: 'CIESIN / Columbia University',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.tiff', '.asc'],
        url: 'https://sedac.ciesin.columbia.edu/data/collection/gpw-v4',
        description: 'Global raster population density data at 30 arc-second (~1km) resolution, based on census data and administrative boundaries.',
        reliability: 5,
        educativeNote: 'GPW distributes population uniformly within admin units. For finer analysis, consider WorldPop or LandScan which use covariates for dasymetric mapping.',
    },
    {
        id: 'worldpop-015',
        name: 'WorldPop',
        provider: 'University of Southampton',
        type: 'Raster',
        coverage: 'Global',
        formats: ['.tiff'],
        url: 'https://www.worldpop.org/',
        description: 'High-resolution population distribution maps using machine learning and satellite imagery, with demographic breakdowns by age and sex.',
        reliability: 4,
        educativeNote: 'Model-based estimates have uncertainty. Download the associated confidence intervals when available, especially for data-sparse regions.',
    },
    {
        id: 'gadm-016',
        name: 'GADM Administrative Boundaries',
        provider: 'GADM.org',
        type: 'Vector',
        coverage: 'Global',
        formats: ['.shp', '.gpkg', '.rds'],
        url: 'https://gadm.org/',
        description: 'Global administrative boundary database with up to 5 levels of subdivision for all countries.',
        reliability: 4,
        educativeNote: 'GADM is for academic use only—commercial use requires DIVA-GIS. Also verify boundaries against official sources for disputed territories.',
    },

    // ============================================
    // INFRASTRUCTURE (4 sources)
    // ============================================
    {
        id: 'openflights-017',
        name: 'OpenFlights',
        provider: 'OpenFlights.org',
        type: 'Point Cloud',
        coverage: 'Global',
        formats: ['.csv', '.dat'],
        url: 'https://openflights.org/data.html',
        description: 'Database of airports, airlines, and flight routes worldwide, including IATA/ICAO codes and coordinates.',
        reliability: 3,
        educativeNote: 'Routes are crowd-sourced and may be outdated. Cross-reference with OAG or official airline data for active route network analysis.',
    },
    {
        id: 'submarine-018',
        name: 'Submarine Cable Map',
        provider: 'TeleGeography',
        type: 'Vector',
        coverage: 'Global',
        formats: ['.geojson', '.kml'],
        url: 'https://www.submarinecablemap.com/',
        description: 'Interactive map of active and planned submarine telecommunications cables with landing points and ownership data.',
        reliability: 4,
        educativeNote: 'Cable paths are approximations for visualization—actual routes are proprietary. Use for connectivity analysis, not precise cable burial locations.',
    },
    {
        id: 'osm-roads-019',
        name: 'OSM Road Network Extract',
        provider: 'Geofabrik',
        type: 'Vector',
        coverage: 'Global',
        formats: ['.shp', '.pbf', '.osm'],
        url: 'https://download.geofabrik.de/',
        description: 'Pre-processed OpenStreetMap extracts by country/region, updated daily, with road classification and attributes.',
        reliability: 4,
        educativeNote: 'Road classifications follow OSM tagging—"primary" in one country may differ from another. Standardize using highway tags, not the "name" field.',
    },
    {
        id: 'groads-020',
        name: 'Global Roads Open Access Data Set (gROADS)',
        provider: 'CIESIN / ITOS',
        type: 'Vector',
        coverage: 'Global',
        formats: ['.shp', '.gdb'],
        url: 'https://sedac.ciesin.columbia.edu/data/set/groads-global-roads-open-access-v1',
        description: 'Harmonized global roads dataset integrating data from DCW, VMAP0, and national sources with consistent classification.',
        reliability: 4,
        educativeNote: 'Dataset is from 2010 and lacks recent infrastructure. For current road networks, supplement with OSM or national transport agency data.',
    },
];

/** Get sources filtered by category keyword in description or name */
export const getSourcesByCategory = (category: string): GisSource[] => {
    const categoryKeywords: Record<string, string[]> = {
        basemaps: ['osm-001', 'ne-002', 'esri-003', 'carto-004'],
        elevation: ['usgs-005', 'gebco-006', 'cop-dem-007', 'aw3d30-008'],
        environment: ['gfw-009', 'worldclim-010', 'modis-011', 'wdpa-012'],
        social: ['hdx-013', 'gpw-014', 'worldpop-015', 'gadm-016'],
        infrastructure: ['openflights-017', 'submarine-018', 'osm-roads-019', 'groads-020'],
    };

    const ids = categoryKeywords[category.toLowerCase()] || [];
    return gisSources.filter(source => ids.includes(source.id));
};

/** All category names for filtering */
export const categories = ['Basemaps', 'Elevation', 'Environment', 'Social', 'Infrastructure'] as const;
export type Category = typeof categories[number];
