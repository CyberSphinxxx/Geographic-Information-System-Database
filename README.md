# GIS Data Sourcebook

## Overview

The GIS Data Sourcebook is a curated, web-based catalog of high-quality geospatial data sources designed for academic research, coursework, and professional GIS applications. It addresses the common challenge students and researchers face in finding reliable, authoritative data by providing a centralized repository with quality assessments and usage tips.

The application features a modern, responsive interface with built-in dark mode, search capabilities, and filtering options to streamline the data discovery process. Each data source is evaluated against a strict reliability rubric to ensure suitability for academic rigor.

## Features

### Core Functionality
-   **Curated Data Catalog**: A collection of 20+ verified GIS data sources categorized by type (Vector, Raster, Mixed, Point Cloud).
-   **Search & Filtering**: Real-time search by name, provider, or description, achievable along with type-based filtering.
-   **Reliability Assessment**: A clear 3-tier rating system (Academic Grade, Verified, Use with Caution) to guide users on data quality.
-   **Format Cheatsheets**: Interactive tooltips explaining common GIS file formats (e.g., .shp, .tiff, .gpkg).
-   **Educational Notes**: "Pro Tip" sections for each source providing specific technical advice and common pitfalls.

### User Interface & Experience
-   **Dark Mode Support**: Fully integrated dark theme that respects system preferences and offers a manual toggle. Default is set to Dark Mode.
-   **Responsive Design**: Optimized layout for desktop, tablet, and mobile devices.
-   **Aesthetic Design**: Clean, academic-focused UI with subtle topographic background animations and glassmorphism effects.
-   **Intuitive Navigation**: Simple routing between the Catalog and About pages.
-   **Direct Access**: One-click deep links to official data download portals.

## Technology Stack

The project is built using modern web technologies to ensure performance, type safety, and maintainability:

-   **Framework**: React 18
-   **Build Tool**: Vite
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
-   Node.js (Version 16 or higher recommended)
-   npm (Node Package Manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/CyberSphinxxx/Geographic-Information-System-Database.git
    ```

2.  Navigate to the project directory:
    ```bash
    cd Geographic-Information-System-Database
    ```

3.  Install dependencies:
    ```bash
    npm install
    ```

### Development

To start the local development server with hot-reload:

```bash
npm run dev
```

Access the application at `http://localhost:5173` (or the port shown in your terminal).

### building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist` directory, ready for deployment.

## Project Structure

The project follows a modular feature-based architecture:

```
src/
├── components/         # Reusable UI components
│   ├── Catalog.tsx     # Main view with search and grid layout
│   ├── SourceCard.tsx  # Individual data source display component
│   ├── ThemeToggle.tsx # Light/Dark mode switcher
│   ├── FormatCheatsheet.tsx # Tooltip logic for file formats
│   ├── ContourBackground.tsx # Animated SVG background
│   └── index.ts        # Barrel export file
├── data/
│   └── sources.ts      # Static database of GIS sources
├── pages/
│   ├── About.tsx       # About page with rubric and credits
│   └── index.ts        # Barrel export file
├── types/
│   └── index.ts        # TypeScript interfaces and type definitions
├── App.tsx             # Main application layout and routing logic
└── main.tsx            # Application entry point
```

## Data Reliability Rubric

To ensure academic integrity, every data source in this catalog is assigned a reliability score based on the following criteria:

### 5/5 - Academic Grade
**Definition**: Official government sources (e.g., USGS, NASA, NOAA) or primary institutional repositories.
**Criteria**:
-   Clear, comprehensive metadata.
-   High spatial and temporal resolution.
-   Well-documented methodology.
-   Stable, long-term availability (no broken links).
**Usage**: Highly recommended for thesis, dissertation, and peer-reviewed research.

### 4/5 - Verified
**Definition**: Trusted non-governmental organizations, universities, or established research groups (e.g., Natural Earth, Humanitarian Data Exchange).
**Criteria**:
-   Good overall data quality.
-   Slightly less comprehensive metadata than government sources.
-   May require minor topology cleaning or attribute verification.
**Usage**: Suitable for most coursework, capstone projects, and general analysis.

### 3/5 - Use with Caution
**Definition**: Crowdsourced platforms, community-contributed datasets, or older archives (e.g., OpenStreetMap raw dumps, archived projects).
**Criteria**:
-   Potential for inconsistent coverage or attribute accuracy.
-   Documentation may be sparse.
-   "Last updated" dates should be checked carefully.
**Usage**: Useful for reference or context but requires manual verification before use in critical analysis.

## Project Credits

**Institution**
University of Science and Technology of Southern Philippines (USTP)
Cagayan de Oro Campus

**Developed By**
-   Louwegie Apag
-   Marjorie Macumao

**License**
This project is open-source. Data sources listed within the application retain their respective licenses and terms of use.
