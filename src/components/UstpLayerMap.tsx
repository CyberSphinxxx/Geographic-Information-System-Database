interface UstpLayerMapProps {
    showVegetation?: boolean;
    showRoads?: boolean;
    showBuildings?: boolean;
    showLabels?: boolean;
}

/**
 * SVG-based map illustration of USTP Cagayan de Oro campus
 * Based on actual campus layout from Google Maps
 * Styled to match OpenStreetMap visual appearance
 */
export function UstpLayerMap({
    showVegetation = true,
    showRoads = true,
    showBuildings = true,
    showLabels = true,
}: UstpLayerMapProps) {
    return (
        <svg
            viewBox="0 0 500 380"
            className="w-full h-full rounded-lg"
            style={{ backgroundColor: '#f2efe9' }}
        >
            {/* Layer 1: Vegetation/Campus Grounds (Raster/Basemap) */}
            <g
                id="vegetation-layer"
                className="transition-opacity duration-500 ease-out"
                style={{ opacity: showVegetation ? 1 : 0 }}
            >
                {/* Campus grounds - irregular polygon matching actual shape */}
                <polygon
                    points="40,50 180,30 320,40 420,80 450,180 430,280 350,300 180,320 80,310 30,250 25,150"
                    fill="#cdebb0"
                />
                {/* Grass areas / open spaces */}
                <rect x="60" y="180" width="60" height="80" fill="#b5d99c" rx="3" />
                <rect x="280" y="100" width="50" height="40" fill="#b5d99c" rx="3" />
                <ellipse cx="200" cy="250" rx="40" ry="30" fill="#b5d99c" />
                {/* Tree clusters */}
                <circle cx="75" cy="200" r="8" fill="#9bc984" />
                <circle cx="95" cy="220" r="6" fill="#8cc172" />
                <circle cx="70" cy="240" r="7" fill="#9bc984" />
                <circle cx="300" cy="115" r="6" fill="#9bc984" />
                <circle cx="315" cy="125" r="5" fill="#8cc172" />
                <circle cx="185" cy="270" r="7" fill="#9bc984" />
                <circle cx="215" cy="260" r="6" fill="#8cc172" />
            </g>

            {/* Layer 2: Roads (Vector Lines) */}
            <g
                id="roads-layer"
                className="transition-opacity duration-500 ease-out"
                style={{ opacity: showRoads ? 1 : 0 }}
            >
                {/* C.M. Recto Avenue - main road at bottom */}
                <rect
                    x="0"
                    y="330"
                    width="500"
                    height="35"
                    fill="#f7c96d"
                    stroke="#cfcd4d"
                    strokeWidth="2"
                />
                {/* Center line marking */}
                <line
                    x1="0"
                    y1="347"
                    x2="500"
                    y2="347"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeDasharray="20,10"
                />

                {/* Main Gate / Entrance road (Alumni Ave) */}
                <rect x="215" y="280" width="30" height="50" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />

                {/* Scientists St - left vertical road */}
                <path
                    d="M 80 50 L 80 150 L 100 200 L 120 280"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="12"
                />
                <path
                    d="M 80 50 L 80 150 L 100 200 L 120 280"
                    fill="none"
                    stroke="#e8e8e8"
                    strokeWidth="1"
                    strokeDasharray="8,4"
                />

                {/* Alumni St - right side vertical road */}
                <path
                    d="M 350 60 L 350 130 L 360 200 L 350 280"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="12"
                />

                {/* Technology St - horizontal road (upper) */}
                <rect x="100" y="130" width="250" height="12" fill="#ffffff" rx="1" />
                <line x1="100" y1="136" x2="350" y2="136" stroke="#e8e8e8" strokeWidth="1" strokeDasharray="8,4" />

                {/* Internal Alumni Avenue - diagonal from entrance */}
                <path
                    d="M 230 280 L 230 200 L 200 150"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="10"
                />

                {/* Educators Ave - bottom left connector */}
                <rect x="80" y="260" width="140" height="10" fill="#ffffff" rx="1" />

                {/* Artista St - top horizontal */}
                <rect x="150" y="55" width="200" height="10" fill="#ffffff" rx="1" />
            </g>

            {/* Layer 3: Buildings (Vector Polygons) - OSM building style */}
            <g
                id="buildings-layer"
                className="transition-opacity duration-500 ease-out"
                style={{ opacity: showBuildings ? 1 : 0 }}
            >
                {/* Top Left Area - Civil Tech Buildings */}
                <rect x="45" y="55" width="30" height="40" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />
                <rect x="45" y="100" width="25" height="25" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Food Trades Building */}
                <rect x="95" y="65" width="45" height="30" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Student Center */}
                <rect x="50" y="140" width="25" height="35" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Medical Clinic */}
                <rect x="105" y="155" width="35" height="25" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* CPSEM Building */}
                <rect x="55" y="195" width="35" height="30" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* USTP Science Complex Building */}
                <rect x="140" y="175" width="55" height="45" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Physics Building */}
                <rect x="165" y="85" width="40" height="30" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Scholarships Office */}
                <rect x="220" y="75" width="35" height="25" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* High School Department */}
                <rect x="275" y="65" width="45" height="30" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Publishing House / Building 23 */}
                <rect x="180" y="40" width="50" height="25" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Drawing Building */}
                <rect x="330" y="50" width="50" height="30" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Department of Technical... */}
                <rect x="255" y="155" width="45" height="35" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* HR Office */}
                <rect x="305" y="145" width="35" height="25" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* ICT Building */}
                <rect x="385" y="85" width="40" height="30" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* USTP Administrative Building */}
                <rect x="365" y="145" width="55" height="40" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* USTP Audio Visual Room */}
                <rect x="425" y="125" width="35" height="25" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* MUST Engineering Building */}
                <rect x="385" y="195" width="50" height="35" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* ROTC Building */}
                <rect x="145" y="235" width="45" height="30" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Engineering Building-USTP */}
                <rect x="320" y="240" width="55" height="40" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Main Building - University of Science and Technology */}
                <rect x="180" y="285" width="100" height="35" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* USTP Founder's Lounge */}
                <rect x="295" y="290" width="40" height="25" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />

                {/* Car Care Center */}
                <rect x="70" y="245" width="30" height="25" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1.5" rx="2" />
            </g>

            {/* Layer 4: Labels (Text) - OSM style */}
            <g
                id="labels-layer"
                className="transition-opacity duration-500 ease-out"
                style={{ opacity: showLabels ? 1 : 0, fontFamily: 'Arial, system-ui, sans-serif' }}
            >
                {/* Building labels */}
                <text x="60" y="80" fontSize="6" fill="#5f5f5f" fontWeight="500">Civil Tech</text>
                <text x="105" y="82" fontSize="6" fill="#5f5f5f" fontWeight="500">Food Trades</text>
                <text x="55" y="160" fontSize="5" fill="#5f5f5f" fontWeight="500">Student Ctr</text>
                <text x="60" y="213" fontSize="5" fill="#5f5f5f" fontWeight="500">CPSEM</text>
                <text x="145" y="202" fontSize="7" fill="#5f5f5f" fontWeight="600">Science Complex</text>
                <text x="170" y="102" fontSize="5" fill="#5f5f5f" fontWeight="500">Physics</text>
                <text x="340" y="68" fontSize="6" fill="#5f5f5f" fontWeight="500">Drawing Bldg</text>
                <text x="265" y="175" fontSize="5" fill="#5f5f5f" fontWeight="500">Dept. of Tech</text>
                <text x="395" y="100" fontSize="5" fill="#5f5f5f" fontWeight="500">ICT Bldg</text>
                <text x="370" y="168" fontSize="6" fill="#5f5f5f" fontWeight="600">Admin Bldg</text>
                <text x="392" y="215" fontSize="5" fill="#5f5f5f" fontWeight="500">Eng. Bldg</text>
                <text x="155" y="253" fontSize="5" fill="#5f5f5f" fontWeight="500">ROTC</text>
                <text x="325" y="263" fontSize="6" fill="#5f5f5f" fontWeight="500">Engineering</text>
                <text x="190" y="305" fontSize="7" fill="#5f5f5f" fontWeight="600">Main Gate / USTP</text>
                <text x="298" y="305" fontSize="5" fill="#5f5f5f" fontWeight="500">Founders</text>

                {/* Road labels */}
                <text x="60" y="130" fontSize="7" fill="#666666" fontWeight="500" transform="rotate(-70, 60, 130)">Scientists St</text>
                <text x="180" y="145" fontSize="7" fill="#666666" fontWeight="500">Technology St</text>
                <text x="355" y="170" fontSize="6" fill="#666666" fontWeight="500" transform="rotate(-90, 355, 170)">Alumni St</text>

                {/* Main road label */}
                <text
                    x="250"
                    y="352"
                    fontSize="11"
                    fill="#5f5f5f"
                    textAnchor="middle"
                    fontWeight="700"
                    letterSpacing="1"
                >
                    C.M. RECTO AVENUE
                </text>

                {/* Campus title */}
                <text
                    x="250"
                    y="18"
                    fontSize="12"
                    fill="#333333"
                    textAnchor="middle"
                    fontWeight="700"
                >
                    USTP - Cagayan de Oro Campus
                </text>
            </g>
        </svg>
    );
}

export default UstpLayerMap;
