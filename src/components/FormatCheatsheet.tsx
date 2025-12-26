/**
 * Format descriptions for GIS file types
 * Used for tooltips on format tags
 */
export const formatDescriptions: Record<string, string> = {
    // Vector formats
    '.shp': 'Shapefile — Standard vector format. Requires .shx, .dbf, and .prj companion files.',
    '.geojson': 'GeoJSON — Web-friendly vector format. Human-readable JSON structure.',
    '.gpkg': 'GeoPackage — Modern SQLite-based format. Single file, multiple layers.',
    '.kml': 'KML — Google Earth format. Good for sharing, limited attributes.',
    '.kmz': 'KMZ — Compressed KML. Smaller file size, includes embedded resources.',
    '.gdb': 'File Geodatabase — Esri proprietary. High performance, requires ArcGIS.',
    '.sqlite': 'SpatiaLite — SQLite with spatial extensions. Portable single-file database.',
    '.osm': 'OSM XML — OpenStreetMap native format. Verbose, use .pbf for large areas.',
    '.pbf': 'Protobuf Binary — Compressed OSM format. 5-10x smaller than .osm.',

    // Raster formats
    '.tiff': 'GeoTIFF — Georeferenced raster. Large file sizes, excellent compatibility.',
    '.tif': 'GeoTIFF — Georeferenced raster. Large file sizes, excellent compatibility.',
    '.jp2': 'JPEG2000 — Compressed imagery. Better compression than TIFF.',
    '.hdf': 'HDF — Hierarchical Data Format. Common for satellite products (MODIS).',
    '.netcdf': 'NetCDF — Network Common Data Form. Standard for climate/ocean data.',
    '.asc': 'ASCII Grid — Text-based raster. Human-readable but very large.',
    '.bil': 'Band Interleaved — Raw binary raster. Requires header file (.hdr).',

    // Tabular/Other
    '.csv': 'CSV — Comma-separated values. Import with X/Y columns for points.',
    '.xlsx': 'Excel — Spreadsheet format. Convert to CSV for GIS import.',
    '.dat': 'Data file — Generic format. Check documentation for structure.',
    '.rds': 'R Data — R language binary. Use R or Python (pyreadr) to read.',

    // Web services
    '.wmts': 'WMTS — Web Map Tile Service. Tiled map streaming protocol.',
    '.xyz': 'XYZ Tiles — Simple tile URL pattern. Common for basemaps.',
    '.png': 'PNG — Raster tiles. Lossless compression, supports transparency.',
};

/**
 * Get the tooltip description for a format
 * @param format - File extension (e.g., '.shp', '.tiff')
 * @returns Description string or a generic message
 */
export function getFormatTooltip(format: string): string {
    const normalized = format.toLowerCase();
    return formatDescriptions[normalized] || `${format} — GIS data format`;
}

/**
 * Component that renders a format tag with tooltip
 */
interface FormatTagProps {
    format: string;
}

export function FormatTag({ format }: FormatTagProps) {
    return (
        <span
            title={getFormatTooltip(format)}
            className="inline-block text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-100 cursor-help hover:bg-slate-700 transition-colors"
        >
            {format}
        </span>
    );
}

export default FormatTag;
