import { ExternalLink, AlertTriangle, BadgeCheck, ShieldAlert } from 'lucide-react';
import type { GisSource } from '@/types';
import { FormatTag } from './FormatCheatsheet';

interface SourceCardProps {
    source: GisSource;
}

/**
 * Reusable card component for displaying a GIS data source
 */
export function SourceCard({ source }: SourceCardProps) {
    const {
        name,
        provider,
        type,
        coverage,
        formats,
        url,
        description,
        reliability,
        educativeNote,
    } = source;

    // Determine reliability badge styling
    const isAcademicGrade = reliability === 5;
    const needsVerification = reliability <= 3;

    return (
        <article className="group relative flex flex-col bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-lg hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300 overflow-hidden">
            {/* Header Section */}
            <header className="p-5 pb-3">
                {/* Provider & Type Row */}
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {provider}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 font-medium">
                        {type}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {name}
                </h3>

                {/* Coverage Badge */}
                <span className="inline-block text-xs px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
                    {coverage} Coverage
                </span>
            </header>

            {/* Body Section */}
            <div className="px-5 pb-4 flex-1">
                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {description}
                </p>

                {/* Reliability Badge */}
                <div className="mb-3">
                    {isAcademicGrade && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                            <BadgeCheck className="w-3.5 h-3.5" />
                            Academic Grade
                        </span>
                    )}
                    {needsVerification && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            Verify Before Use
                        </span>
                    )}
                    {!isAcademicGrade && !needsVerification && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300">
                            Reliability: {reliability}/5
                        </span>
                    )}
                </div>

                {/* Format Tags with Tooltips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {formats.map((format) => (
                        <FormatTag key={format} format={format} />
                    ))}
                </div>
            </div>

            {/* Pro-Tip Box */}
            <div className="mx-5 mb-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50">
                <div className="flex gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <span className="block text-xs font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wide mb-1">
                            Pro Tip
                        </span>
                        <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                            {educativeNote}
                        </p>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <div className="p-5 pt-0 mt-auto">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-blue-600 dark:bg-blue-500 text-white text-sm font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 active:bg-blue-800 transition-colors"
                >
                    <span>Visit Source</span>
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </article>
    );
}

export default SourceCard;
