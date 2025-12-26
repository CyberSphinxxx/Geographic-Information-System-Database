/**
 * ContourBackground Component
 * Renders an animated SVG background with topographic contour lines
 * Subtle design to sit behind hero content without affecting readability
 * Supports both light and dark modes
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
                    {/* Animated contour pattern */}
                    <pattern
                        id="contour-pattern"
                        x="0"
                        y="0"
                        width="200"
                        height="200"
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Layer 1 - Outer contours */}
                        <path
                            d="M0,100 Q50,60 100,100 T200,100"
                            fill="none"
                            className="stroke-gray-300 dark:stroke-slate-600"
                            strokeWidth="1"
                        />
                        <path
                            d="M0,130 Q60,90 120,130 T240,130"
                            fill="none"
                            className="stroke-gray-300 dark:stroke-slate-600"
                            strokeWidth="1"
                        />
                        <path
                            d="M0,70 Q40,40 80,70 T160,70 T240,70"
                            fill="none"
                            className="stroke-gray-300 dark:stroke-slate-600"
                            strokeWidth="1"
                        />

                        {/* Layer 2 - Mid contours */}
                        <path
                            d="M-20,160 Q30,120 80,160 T180,160 T280,160"
                            fill="none"
                            className="stroke-gray-200 dark:stroke-slate-700"
                            strokeWidth="0.8"
                        />
                        <path
                            d="M-10,40 Q40,10 90,40 T190,40"
                            fill="none"
                            className="stroke-gray-200 dark:stroke-slate-700"
                            strokeWidth="0.8"
                        />

                        {/* Layer 3 - Inner contours (tighter curves like hill peaks) */}
                        <ellipse
                            cx="100"
                            cy="100"
                            rx="60"
                            ry="35"
                            fill="none"
                            className="stroke-gray-200 dark:stroke-slate-700"
                            strokeWidth="0.8"
                        />
                        <ellipse
                            cx="100"
                            cy="100"
                            rx="40"
                            ry="22"
                            fill="none"
                            className="stroke-gray-300 dark:stroke-slate-600"
                            strokeWidth="0.6"
                        />
                        <ellipse
                            cx="100"
                            cy="100"
                            rx="20"
                            ry="10"
                            fill="none"
                            className="stroke-gray-300 dark:stroke-slate-600"
                            strokeWidth="0.5"
                        />
                    </pattern>
                </defs>

                {/* Background rectangle with animated pattern */}
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#contour-pattern)"
                    className="opacity-30 dark:opacity-40 animate-contour-drift"
                />

                {/* Additional floating contour lines for depth */}
                <g className="opacity-25 dark:opacity-35 animate-contour-flow">
                    <path
                        d="M-100,150 Q200,50 500,150 T1100,150 T1700,150 T2300,150"
                        fill="none"
                        className="stroke-gray-400 dark:stroke-slate-500"
                        strokeWidth="1.2"
                        strokeDasharray="8 4"
                    />
                    <path
                        d="M-50,200 Q250,120 550,200 T1150,200 T1750,200"
                        fill="none"
                        className="stroke-gray-300 dark:stroke-slate-600"
                        strokeWidth="1"
                        strokeDasharray="12 6"
                    />
                    <path
                        d="M0,80 Q300,20 600,80 T1200,80 T1800,80"
                        fill="none"
                        className="stroke-gray-300 dark:stroke-slate-600"
                        strokeWidth="0.8"
                        strokeDasharray="6 3"
                    />
                </g>

                {/* Secondary layer with different animation speed */}
                <g className="opacity-20 dark:opacity-30 animate-contour-flow-slow">
                    <path
                        d="M-200,250 Q150,180 500,250 T1100,250 T1700,250"
                        fill="none"
                        className="stroke-gray-400 dark:stroke-slate-500"
                        strokeWidth="1"
                        strokeDasharray="10 5"
                    />
                    <path
                        d="M-150,50 Q200,-20 550,50 T1150,50 T1750,50"
                        fill="none"
                        className="stroke-gray-300 dark:stroke-slate-600"
                        strokeWidth="0.8"
                        strokeDasharray="8 4"
                    />
                </g>
            </svg>

            {/* Inline styles for animations */}
            <style>{`
                @keyframes contour-drift {
                    0% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(-20px, -10px);
                    }
                    100% {
                        transform: translate(0, 0);
                    }
                }

                @keyframes contour-flow {
                    0% {
                        stroke-dashoffset: 0;
                        transform: translateX(0);
                    }
                    100% {
                        stroke-dashoffset: -50;
                        transform: translateX(-50px);
                    }
                }

                @keyframes contour-flow-slow {
                    0% {
                        stroke-dashoffset: 0;
                        transform: translateX(0);
                    }
                    100% {
                        stroke-dashoffset: -30;
                        transform: translateX(-30px);
                    }
                }

                .animate-contour-drift {
                    animation: contour-drift 30s ease-in-out infinite;
                }

                .animate-contour-flow {
                    animation: contour-flow 25s linear infinite;
                }

                .animate-contour-flow-slow {
                    animation: contour-flow-slow 40s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default ContourBackground;
