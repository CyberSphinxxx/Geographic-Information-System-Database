import { useEffect, useRef, useState } from 'react';
import { Database, Github, Home, Info, BookOpen, Server, Terminal, Users, Workflow, Clock } from 'lucide-react';
import { ThemeToggle, UstpLeafletMap } from '@/components';

/** Timeline data for the History of GIS */
const timelineData = [
    {
        year: '1960',
        title: 'The Dawn of Computational Geography',
        description: 'The quantitative revolution in geography began, moving from description to statistical analysis.',
        side: 'left' as const,
    },
    {
        year: '1963',
        title: 'The First GIS',
        description: 'Roger Tomlinson developed the Canada Geographic Information System (CGIS) to inventory land capabilities. Tomlinson is known as the "Father of GIS".',
        side: 'right' as const,
    },
    {
        year: '1965',
        title: 'The Harvard Laboratory',
        description: 'Howard Fisher established the Harvard Lab for Computer Graphics, creating SYMAP code and training future industry leaders.',
        side: 'left' as const,
    },
    {
        year: '1969',
        title: 'Esri is Founded',
        description: 'Jack and Laura Dangermond founded the Environmental Systems Research Institute in Redlands, CA, initially as a land-use consulting firm.',
        side: 'right' as const,
    },
    {
        year: '1981',
        title: 'Commercialization',
        description: 'Release of ARC/INFO, the first major commercial GIS software, shifting GIS from academic labs to industry.',
        side: 'left' as const,
    },
    {
        year: '2005',
        title: 'The Google Maps Era',
        description: 'Launch of Google Maps and Keyhole (Google Earth), making spatial data accessible to the public.',
        side: 'right' as const,
    },
    {
        year: 'Present',
        title: 'Web GIS & The Cloud',
        description: 'The shift to SaaS, real-time sensors, and mobile data collection.',
        side: 'left' as const,
    },
];

interface LearnGisProps {
    onNavigate?: (page: string) => void;
}

/**
 * Learn GIS page - Educational content about Geographic Information Systems
 */
export function LearnGis({ onNavigate }: LearnGisProps) {
    // State for USTP campus layer model
    const [ustpLayers, setUstpLayers] = useState({
        basemap: true,    // Campus grounds (vegetation)
        roads: true,      // C.M. Recto Ave
        buildings: true,  // USTP Buildings
    });

    // Refs for timeline items for scroll animation
    const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('timeline-visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        timelineRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

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
                                onClick={() => onNavigate?.('about')}
                                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <Info className="w-4 h-4" />
                                <span className="hidden sm:inline">About</span>
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

            {/* Hero Section */}
            <header className="relative w-full bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                            `,
                            backgroundSize: '50px 50px'
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Text Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wider">
                                    Learn GIS
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
                                The Science of{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                                    Where
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Geographic Information Systems (GIS) provide a framework for gathering,
                                managing, and analyzing data.
                            </p>
                        </div>

                        {/* CSS-Only Map Layers Illustration */}
                        <div className="flex-shrink-0">
                            <div className="map-layers-container relative w-64 h-64 sm:w-80 sm:h-80">
                                {/* Layer 3: Analysis (Top) */}
                                <div
                                    className="map-layer layer-3 absolute w-40 h-40 sm:w-48 sm:h-48 rounded-lg border-2 
                                               bg-gradient-to-br from-purple-500/30 to-purple-600/20 border-purple-400/60
                                               shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                                    style={{
                                        transform: 'rotateX(55deg) rotateZ(-45deg) translateZ(80px)',
                                        transformStyle: 'preserve-3d',
                                        top: '10%',
                                        left: '30%',
                                    }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                                            Analysis
                                        </span>
                                    </div>
                                    {/* Grid pattern */}
                                    <div
                                        className="absolute inset-0 opacity-40"
                                        style={{
                                            backgroundImage: 'radial-gradient(circle, rgba(168,85,247,0.6) 1px, transparent 1px)',
                                            backgroundSize: '12px 12px'
                                        }}
                                    />
                                </div>

                                {/* Layer 2: Data (Middle) */}
                                <div
                                    className="map-layer layer-2 absolute w-40 h-40 sm:w-48 sm:h-48 rounded-lg border-2 
                                               bg-gradient-to-br from-blue-500/30 to-blue-600/20 border-blue-400/60
                                               shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                                    style={{
                                        transform: 'rotateX(55deg) rotateZ(-45deg) translateZ(40px)',
                                        transformStyle: 'preserve-3d',
                                        top: '20%',
                                        left: '20%',
                                    }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                                            Data
                                        </span>
                                    </div>
                                    {/* Lines pattern */}
                                    <div
                                        className="absolute inset-0 opacity-40"
                                        style={{
                                            backgroundImage: 'linear-gradient(45deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
                                            backgroundSize: '16px 16px'
                                        }}
                                    />
                                </div>

                                {/* Layer 1: Real World (Bottom) */}
                                <div
                                    className="map-layer layer-1 absolute w-40 h-40 sm:w-48 sm:h-48 rounded-lg border-2 
                                               bg-gradient-to-br from-green-500/30 to-green-600/20 border-green-400/60
                                               shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                                    style={{
                                        transform: 'rotateX(55deg) rotateZ(-45deg) translateZ(0px)',
                                        transformStyle: 'preserve-3d',
                                        top: '30%',
                                        left: '10%',
                                    }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-green-700 dark:text-green-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                                            Real World
                                        </span>
                                    </div>
                                    {/* Terrain pattern */}
                                    <div
                                        className="absolute inset-0 opacity-30"
                                        style={{
                                            backgroundImage: `
                                                linear-gradient(0deg, rgba(34,197,94,0.3) 1px, transparent 1px),
                                                linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)
                                            `,
                                            backgroundSize: '20px 20px'
                                        }}
                                    />
                                </div>

                                {/* Floating particles effect */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{ top: '15%', left: '60%' }} />
                                    <div className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60 animate-pulse" style={{ top: '40%', right: '15%', animationDelay: '0.5s' }} />
                                    <div className="absolute w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse" style={{ bottom: '25%', left: '15%', animationDelay: '1s' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent" />
            </header>

            {/* Inline CSS for animations */}
            <style>{`
                .map-layers-container {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }
                
                .map-layer {
                    transition: transform 0.5s ease-out, box-shadow 0.5s ease-out;
                    backdrop-filter: blur(4px);
                }
                
                .map-layers-container:hover .layer-3 {
                    transform: rotateX(55deg) rotateZ(-45deg) translateZ(100px);
                    box-shadow: 0 0 40px rgba(168,85,247,0.5);
                }
                
                .map-layers-container:hover .layer-2 {
                    transform: rotateX(55deg) rotateZ(-45deg) translateZ(50px);
                    box-shadow: 0 0 40px rgba(59,130,246,0.5);
                }
                
                .map-layers-container:hover .layer-1 {
                    transform: rotateX(55deg) rotateZ(-45deg) translateZ(0px);
                    box-shadow: 0 0 40px rgba(34,197,94,0.5);
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                /* Timeline scroll animations */
                .timeline-item {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }

                .timeline-item.timeline-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Stagger animation for alternating sides */
                .timeline-item:nth-child(odd) {
                    transition-delay: 0.1s;
                }

                .timeline-item:nth-child(even) {
                    transition-delay: 0.2s;
                }
            `}</style>

            {/* 5 Components of GIS Section */}
            <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
                            The 5 Components of GIS
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Every successful GIS implementation relies on these five interconnected pillars.
                        </p>
                    </div>

                    {/* Component Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {/* Hardware Card */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                Hardware
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                The physical machinery, from servers to field tablets.
                            </p>
                        </div>

                        {/* Software Card */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Terminal className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                Software
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Tools like ArcGIS, QGIS, and PostGIS that analyze spatial data.
                            </p>
                        </div>

                        {/* Data Card */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                Data
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Vector, Raster, and Tabular data—the fuel of any GIS.
                            </p>
                        </div>

                        {/* People Card */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                People
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Analysts, developers, and decision-makers who define the problems.
                            </p>
                        </div>

                        {/* Methods Card */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Workflow className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                Methods
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Standardized procedures and best practices for analysis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* History of GIS Timeline Section */}
            <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-800/50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
                            History of GIS
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Key milestones in the evolution of Geographic Information Systems
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Central vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block" />
                        {/* Mobile line (left side) */}
                        <div className="absolute left-4 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 md:hidden" />

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {timelineData.map((item, index) => (
                                <div
                                    key={item.year}
                                    ref={(el) => { timelineRefs.current[index] = el; }}
                                    className={`timeline-item relative flex items-center ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } flex-row`}
                                >
                                    {/* Content Card */}
                                    <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${item.side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                                        }`}>
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                                            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                {item.year}
                                            </span>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-2 mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-blue-500 rounded-full z-10 shadow-lg" />

                                    {/* Empty space for alternating layout */}
                                    <div className="hidden md:block md:w-5/12" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How GIS Works: USTP Campus Layer Model */}
            <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
                            How GIS Works: USTP Campus Example
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Explore how spatial data layers work using our own campus as an example
                        </p>
                    </div>

                    {/* Interactive Layer Demo */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Left: Checkbox Controls */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
                                Toggle Layers
                            </h3>
                            <div className="space-y-4">
                                {/* Basemap/Campus Grounds Checkbox */}
                                <label className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={ustpLayers.basemap}
                                        onChange={(e) => setUstpLayers({ ...ustpLayers, basemap: e.target.checked })}
                                        className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                                    />
                                    {/* Pixel grid icon for basemap */}
                                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="5" height="5" fill="#cdebb0" />
                                        <rect x="7" y="2" width="5" height="5" fill="#b5d99c" />
                                        <rect x="12" y="2" width="5" height="5" fill="#cdebb0" />
                                        <rect x="17" y="2" width="5" height="5" fill="#9bc984" />
                                        <rect x="2" y="7" width="5" height="5" fill="#b5d99c" />
                                        <rect x="7" y="7" width="5" height="5" fill="#cdebb0" />
                                        <rect x="12" y="7" width="5" height="5" fill="#9bc984" />
                                        <rect x="17" y="7" width="5" height="5" fill="#cdebb0" />
                                        <rect x="2" y="12" width="5" height="5" fill="#cdebb0" />
                                        <rect x="7" y="12" width="5" height="5" fill="#9bc984" />
                                        <rect x="12" y="12" width="5" height="5" fill="#b5d99c" />
                                        <rect x="17" y="12" width="5" height="5" fill="#cdebb0" />
                                        <rect x="2" y="17" width="5" height="5" fill="#9bc984" />
                                        <rect x="7" y="17" width="5" height="5" fill="#cdebb0" />
                                        <rect x="12" y="17" width="5" height="5" fill="#cdebb0" />
                                        <rect x="17" y="17" width="5" height="5" fill="#b5d99c" />
                                    </svg>
                                    <div className="flex-1">
                                        <span className="font-medium text-gray-900 dark:text-gray-100">
                                            Campus Grounds
                                        </span>
                                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                                            Raster/Basemap
                                        </span>
                                    </div>
                                </label>

                                {/* Roads Checkbox */}
                                <label className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={ustpLayers.roads}
                                        onChange={(e) => setUstpLayers({ ...ustpLayers, roads: e.target.checked })}
                                        className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
                                    />
                                    {/* Line network icon for roads */}
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#f7c96d" strokeWidth="3" strokeLinecap="round">
                                        <line x1="2" y1="20" x2="22" y2="20" />
                                        <line x1="12" y1="20" x2="12" y2="8" strokeWidth="2" stroke="#ffffff" />
                                        <line x1="6" y1="12" x2="18" y2="12" strokeWidth="2" stroke="#ffffff" />
                                    </svg>
                                    <div className="flex-1">
                                        <span className="font-medium text-gray-900 dark:text-gray-100">
                                            C.M. Recto Ave
                                        </span>
                                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300">
                                            Vector Line
                                        </span>
                                    </div>
                                </label>

                                {/* Buildings Checkbox */}
                                <label className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={ustpLayers.buildings}
                                        onChange={(e) => setUstpLayers({ ...ustpLayers, buildings: e.target.checked })}
                                        className="w-5 h-5 rounded border-gray-300 text-gray-600 focus:ring-gray-500 cursor-pointer"
                                    />
                                    {/* Polygon icon for buildings */}
                                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                                        <rect x="2" y="4" width="8" height="6" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1" rx="1" />
                                        <rect x="12" y="2" width="10" height="8" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1" rx="1" />
                                        <rect x="4" y="14" width="7" height="8" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1" rx="1" />
                                        <rect x="14" y="12" width="8" height="10" fill="#d9d0c9" stroke="#c4c2c2" strokeWidth="1" rx="1" />
                                    </svg>
                                    <div className="flex-1">
                                        <span className="font-medium text-gray-900 dark:text-gray-100">
                                            USTP Buildings
                                        </span>
                                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                            Vector Polygon
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Right: USTP Campus Map - Real OpenStreetMap */}
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-2 shadow-md border border-gray-200 dark:border-slate-700 min-h-[380px]">
                            <UstpLeafletMap
                                showBasemap={ustpLayers.basemap}
                                showRoads={ustpLayers.roads}
                                showBuildings={ustpLayers.buildings}
                            />
                        </div>
                    </div>

                    {/* Educational Note */}
                    <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800/50">
                        <p className="text-blue-900 dark:text-blue-200 leading-relaxed">
                            <span className="font-semibold">Context:</span> This is a localized example of USTP CDO.
                            Notice how the <span className="font-medium">'Roads'</span> layer (C.M. Recto) is just a <span className="italic">line vector</span>,
                            while the <span className="font-medium">'Buildings'</span> are <span className="italic">polygon vectors</span>.
                            In a real GIS, we can ask questions like: <span className="font-medium italic">"How many meters is the Science Complex from the main highway?"</span>
                            by measuring the distance between these two layers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-slate-700 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        GIS Data Sourcebook — A resource for students and researchers.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default LearnGis;
