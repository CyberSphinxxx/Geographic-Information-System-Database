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
        <article className="group relative flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden">
            {/* Header Section */}
            <header className="p-5 pb-3">
                {/* Provider & Type Row */}
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {provider}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                        {type}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                    {name}
                </h3>

                {/* Coverage Badge */}
                <span className="inline-block text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">
                    {coverage} Coverage
                </span>
            </header>

            {/* Body Section */}
            <div className="px-5 pb-4 flex-1">
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {description}
                </p>

                {/* Reliability Badge */}
                <div className="mb-3">
                    {isAcademicGrade && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-800">
                            <BadgeCheck className="w-3.5 h-3.5" />
                            Academic Grade
                        </span>
                    )}
                    {needsVerification && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            Verify Before Use
                        </span>
                    )}
                    {!isAcademicGrade && !needsVerification && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
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
            <div className="mx-5 mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200">
                <div className="flex gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <span className="block text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
                            Pro Tip
                        </span>
                        <p className="text-xs text-amber-900 leading-relaxed">
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
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors"
                >
                    <span>Visit Source</span>
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </article>
    );
}

export default SourceCard;
