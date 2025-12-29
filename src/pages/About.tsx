import { ShieldCheck, BadgeCheck, AlertTriangle, GraduationCap, Users, Database, Github, Home, BookOpen } from 'lucide-react';
import { ThemeToggle } from '@/components';

interface AboutProps {
    onNavigate?: (page: string) => void;
}

/**
 * About page component
 * Explains the rating system and lists project authors
 */
export function About({ onNavigate }: AboutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Left: Logo/Title */}
                        <button
                            onClick={() => onNavigate?.('catalog')}
                            className="flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            <span className="font-bold text-lg hidden sm:inline">GIS Data Sourcebook</span>
                            <span className="font-bold text-lg sm:hidden">GIS DB</span>
                        </button>

                        {/* Right: Nav Links */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            <button
                                onClick={() => onNavigate?.('catalog')}
                                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <Home className="w-4 h-4" />
                                <span className="hidden sm:inline">Catalog</span>
                            </button>
                            <button
                                onClick={() => onNavigate?.('learn')}
                                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <BookOpen className="w-4 h-4" />
                                <span className="hidden sm:inline">Learn GIS</span>
                            </button>
                            <a
                                href="https://github.com/CyberSphinxxx/Geographic-Information-System-Database"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                                title="View on GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                        About This Project
                    </h1>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                        Understanding our data quality standards and the team behind this resource.
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Section 1: Rating Rubric */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            How We Rate Data
                        </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        Each data source in our catalog is evaluated based on its origin, metadata quality,
                        data resolution, and accessibility. Here's what each reliability score means:
                    </p>

                    {/* Rating Cards */}
                    <div className="space-y-4">
                        {/* 5/5 Academic Grade */}
                        <div className="flex gap-4 p-5 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50">
                            <div className="flex-shrink-0">
                                <div className="p-2.5 rounded-full bg-green-100 dark:bg-green-900/50">
                                    <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-1">
                                    5/5 — Academic Grade
                                </h3>
                                <p className="text-green-900 dark:text-green-200 text-sm leading-relaxed">
                                    Official government or institutional source. Includes clear metadata,
                                    high spatial resolution, well-documented methodology, and no broken links.
                                    <span className="font-medium"> Recommended for thesis and research work.</span>
                                </p>
                            </div>
                        </div>

                        {/* 4/5 Verified */}
                        <div className="flex gap-4 p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50">
                            <div className="flex-shrink-0">
                                <div className="p-2.5 rounded-full bg-blue-100 dark:bg-blue-900/50">
                                    <BadgeCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-1">
                                    4/5 — Verified
                                </h3>
                                <p className="text-blue-900 dark:text-blue-200 text-sm leading-relaxed">
                                    From a trusted organization such as NGOs, universities, or established research groups.
                                    Good data quality overall, but may require minor cleaning or attribute verification.
                                    <span className="font-medium"> Suitable for most academic projects.</span>
                                </p>
                            </div>
                        </div>

                        {/* 3/5 Use with Caution */}
                        <div className="flex gap-4 p-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50">
                            <div className="flex-shrink-0">
                                <div className="p-2.5 rounded-full bg-amber-100 dark:bg-amber-900/50">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-1">
                                    3/5 — Use with Caution
                                </h3>
                                <p className="text-amber-900 dark:text-amber-200 text-sm leading-relaxed">
                                    Crowdsourced, community-contributed, or older datasets. May have inconsistent coverage,
                                    outdated information, or limited documentation.
                                    <span className="font-medium"> Requires verification before use in thesis work.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Project Credits */}
                <section className="pb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            Project Team
                        </h2>
                    </div>

                    <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm">
                        <div className="text-center mb-8">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                GIS Database Project
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                A curated collection of geospatial data sources for academic use
                            </p>
                        </div>

                        <div className="border-t border-gray-100 dark:border-slate-700 pt-6">
                            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 text-center">
                                Institution
                            </p>
                            <p className="text-center text-gray-900 dark:text-gray-100 font-medium mb-8">
                                University of Science and Technology of Southern Philippines
                                <span className="block text-gray-500 dark:text-gray-400 text-sm mt-1">
                                    USTP — Cagayan de Oro
                                </span>
                            </p>
                        </div>

                        <div className="border-t border-gray-100 dark:border-slate-700 pt-6">
                            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 text-center">
                                Developed By
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                                        LA
                                    </div>
                                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                                        Louwegie Apag
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white text-xl font-bold">
                                        MM
                                    </div>
                                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                                        Marjorie Macumao
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-slate-700 mt-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        GIS Data Sourcebook — A resource for students and researchers.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default About;
