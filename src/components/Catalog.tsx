import { useState, useMemo } from 'react';
import { Search, Filter, Database, Globe } from 'lucide-react';
import { gisSources } from '@/data';
import { SourceCard } from '@/components';
import type { GisSourceType } from '@/types';

/** Available type filters */
const typeFilters: Array<GisSourceType | 'All'> = ['All', 'Vector', 'Raster', 'Mixed', 'Point Cloud'];

/**
 * Main catalog view displaying all GIS data sources
 * with search and filter functionality
 */
export function Catalog() {
    // State for search and filter
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState<GisSourceType | 'All'>('All');

    // Filtered sources based on search and type
    const filteredSources = useMemo(() => {
        return gisSources.filter((source) => {
            // Check type filter
            const matchesType = typeFilter === 'All' || source.type === typeFilter;

            // Check search query (name or description)
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                query === '' ||
                source.name.toLowerCase().includes(query) ||
                source.description.toLowerCase().includes(query) ||
                source.provider.toLowerCase().includes(query);

            return matchesType && matchesSearch;
        });
    }, [searchQuery, typeFilter]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    {/* Title & Subtitle */}
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Database className="w-10 h-10 text-blue-600" />
                            <Globe className="w-8 h-8 text-green-600" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                            GIS Data Sourcebook
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            A curated collection of high-quality geospatial data sources for academic research,
                            coursework, and professional GIS applications. Each source includes educational notes
                            to help students avoid common pitfalls.
                        </p>
                    </div>

                    {/* Search & Filter Controls */}
                    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name, provider, or description..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                            />
                        </div>

                        {/* Type Filter Dropdown */}
                        <div className="relative sm:w-48">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value as GisSourceType | 'All')}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                            >
                                {typeFilters.map((type) => (
                                    <option key={type} value={type}>
                                        {type === 'All' ? 'All Types' : type}
                                    </option>
                                ))}
                            </select>
                            {/* Custom dropdown arrow */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Results Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                        Showing <span className="font-semibold text-gray-900">{filteredSources.length}</span> of{' '}
                        <span className="font-semibold text-gray-900">{gisSources.length}</span> sources
                    </p>
                    {(searchQuery || typeFilter !== 'All') && (
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setTypeFilter('All');
                            }}
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Clear filters
                        </button>
                    )}
                </div>

                {/* Responsive Grid */}
                {filteredSources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSources.map((source) => (
                            <SourceCard key={source.id} source={source} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <Database className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No sources found</h3>
                        <p className="text-gray-600">
                            Try adjusting your search query or filter criteria.
                        </p>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className="text-center text-sm text-gray-500">
                        GIS Data Sourcebook — A resource for students and researchers.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Catalog;
