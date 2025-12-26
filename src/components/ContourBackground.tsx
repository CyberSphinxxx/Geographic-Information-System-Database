/**
 * ContourBackground Component
 * Renders a technical/geodetic background with grid lines and topographic contours
 * Designed to look like a professional GIS/Mapping workspace
 */
export function ContourBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    {/* Pattern 1: Geodetic Grid with Crosshairs */}
                    <pattern
                        id="geo-grid"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Grid lines */}
                        <path
                            d="M 100 0 L 0 0 0 100"
                            fill="none"
                            className="stroke-gray-200 dark:stroke-slate-800"
                            strokeWidth="0.5"
                            strokeDasharray="4 4"
                        />
                        {/* Intersection Crosses + */}
                        <path
                            d="M -5 0 L 5 0 M 0 -5 L 0 5"
                            className="stroke-gray-300 dark:stroke-slate-700"
                            strokeWidth="1"
                        />
                    </pattern>

                    {/* Pattern 2: Topographic Contours */}
                    <pattern
                        id="topo-lines"
                        x="0"
                        y="0"
                        width="400"
                        height="400"
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Abstract Terrain Shapes */}
                        <g className="stroke-gray-300 dark:stroke-slate-700" fill="none" strokeWidth="0.8">
                            {/* Hill 1 */}
                            <path d="M 50,200 Q 100,100 200,150 T 350,200" opacity="0.4" />
                            <path d="M 40,210 Q 100,90 210,140 T 360,210" opacity="0.5" />
                            <path d="M 30,220 Q 100,80 220,130 T 370,220" opacity="0.6" />

                            {/* Geometric/Geodetic Arcs */}
                            <circle cx="200" cy="200" r="100" strokeDasharray="10 10" opacity="0.2" />
                            <circle cx="200" cy="200" r="150" strokeDasharray="20 10" opacity="0.15" />
                            <circle cx="200" cy="200" r="250" strokeDasharray="30 15" opacity="0.1" />
                        </g>
                    </pattern>
                </defs>

                {/* Layer 1: Static Grid Background */}
                <rect width="100%" height="100%" fill="url(#geo-grid)" className="opacity-60" />

                {/* Layer 2: Moving Topography - Very slow pan */}
                <rect
                    width="200%"
                    height="200%"
                    fill="url(#topo-lines)"
                    className="opacity-50 animate-geo-pan"
                />

                {/* Layer 3: Overlay Gradient Highlighting */}
                <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    fill="url(#radial-highlight)"
                    className="hidden dark:block opacity-20"
                />
                <defs>
                    <radialGradient id="radial-highlight">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>

            <style>{`
                @keyframes geo-pan {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(-50px, -50px);
                    }
                }
                .animate-geo-pan {
                    animation: geo-pan 60s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default ContourBackground;
