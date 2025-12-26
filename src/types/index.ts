/**
 * Type definitions for the GIS Data Catalog
 */

/** Data type classification for GIS sources */
export type GisSourceType = 'Vector' | 'Raster' | 'Mixed' | 'Point Cloud';

/** Geographic coverage level */
export type GisCoverage = 'Global' | 'National' | 'Regional';

/**
 * Represents a GIS data source in the catalog
 */
export interface GisSource {
    /** Unique identifier for the source */
    id: string;

    /** Display name of the data source */
    name: string;

    /** Organization or entity providing the data */
    provider: string;

    /** Type of geospatial data */
    type: GisSourceType;

    /** Geographic coverage area */
    coverage: GisCoverage;

    /** Available file formats (e.g., ['.shp', '.tiff', '.geojson']) */
    formats: string[];

    /** URL to access or download the data */
    url: string;

    /** Brief description of the data source */
    description: string;

    /** Reliability rating from 1 (low) to 5 (high) */
    reliability: 1 | 2 | 3 | 4 | 5;

    /** Educational note: warning or tip for students using this data */
    educativeNote: string;
}
