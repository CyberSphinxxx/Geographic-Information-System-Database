import greenContour from '@/assets/green-contour.jpg';

/**
 * ContourBackground Component
 * Renders the user-provided green contour image as background
 */
export function ContourBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* 
                Image Background 
                - Object cover to fill the area
                - Opacity controlled to ensure text readability
                - Dark mode adjustment if necessary
            */}
            <img
                src={greenContour}
                alt="Topographic contour background"
                className="w-full h-full object-cover opacity-20 dark:opacity-10"
            />

            {/* Overlay gradient to help text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80 dark:from-slate-900/80 dark:via-slate-900/50 dark:to-slate-900/80 mix-blend-overlay" />
        </div>
    );
}

export default ContourBackground;
