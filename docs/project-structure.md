# Project Structure Documentation

This document outlines the structure of the Accounting Firm's Tech Stack website project.

## Directory Structure

```
app-recs/
├── docs/                     # Documentation files
├── public/                   # Static assets
├── scripts/                  # Helper scripts
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── layout/           # Layout components
│   │   ├── pyramid/          # Pyramid graphic components
│   │   ├── recommendations/  # Recommendation components
│   │   └── ui/               # Reusable UI components
│   ├── context/              # React context providers
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Next.js pages
│   │   ├── api/              # API routes (Next.js serverless functions)
│   │   └── ...               # Page components
│   ├── styles/               # CSS styles
│   ├── types/                # TypeScript types
│   └── utils/                # Utility functions
├── .env                      # Environment variables
├── .env.example              # Example environment variables
├── .gitignore                # Git ignore file
├── jsconfig.json             # JavaScript configuration
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Project readme
├── tailwind.config.js        # Tailwind CSS configuration
└── vercel.json               # Vercel deployment configuration
```

## Key Files and Directories

### Configuration Files

- **package.json**: Defines project dependencies and scripts
- **next.config.js**: Configuration for Next.js
- **tailwind.config.js**: Configuration for Tailwind CSS
- **postcss.config.js**: Configuration for PostCSS
- **jsconfig.json**: Configuration for JavaScript paths
- **vercel.json**: Configuration for Vercel deployment
- **.env.example**: Example environment variables
- **.env**: Environment variables (not committed to git)

### Source Code

- **src/pages/**: Next.js pages
  - **index.js**: Homepage with pyramid graphic
  - **[component].js**: Dynamic route for component details
  - **404.js**: Custom 404 page
  - **_app.js**: Next.js app wrapper
  - **api/**: API routes (Next.js serverless functions)
    - **getComponentData.js**: API route for component data
    - **getChangeLog.js**: API route for change log

- **src/components/**: React components
  - **layout/Layout.jsx**: Main layout component
  - **pyramid/PyramidGraphic.jsx**: Interactive pyramid graphic
  - **recommendations/**: Components for recommendations
    - **RecommendationCard.jsx**: Card for displaying recommendations
    - **ChangeLog.jsx**: Component for displaying change log
  - **ui/**: Reusable UI components
    - **Button.jsx**: Button component
    - **ErrorMessage.jsx**: Error message component
    - **Loading.jsx**: Loading spinner component

- **src/utils/**: Utility functions
  - **airtable.js**: Airtable API utility functions
  - **constants.js**: Constants used throughout the application
  - **formatters.js**: Formatting utility functions

- **src/hooks/**: Custom React hooks
  - **useFetch.js**: Hook for fetching data

- **src/context/**: React context providers
  - **AppContext.jsx**: Application context provider

- **src/styles/**: CSS styles
  - **globals.css**: Global styles with Tailwind imports

- **src/types/**: TypeScript types
  - **index.js**: Type definitions

### Public Assets

- **public/**: Static assets
  - **favicon.ico**: Website favicon

### Scripts

- **scripts/setup.js**: Setup script for initial configuration

### Documentation

- **docs/airtable-structure.md**: Documentation for Airtable structure
- **docs/project-structure.md**: Documentation for project structure

## Component Hierarchy

```
Layout
├── PyramidGraphic (on homepage)
└── ComponentPage (on component pages)
    ├── RecommendationCard (multiple)
    └── ChangeLog
```

## Data Flow

1. User visits the website
2. Interactive pyramid is displayed
3. User clicks on a component
4. Front-end sends request to serverless function
5. Serverless function queries Airtable API
6. Data is returned and displayed on the component page
7. Update log is displayed at the bottom of the page

## Development Workflow

1. Clone the repository
2. Run `npm run setup` to set up the project
3. Run `npm run dev` to start the development server
4. Make changes to the code
5. Run `npm run build` to build the project
6. Run `npm run start` to start the production server
7. Deploy to Vercel using `vercel` command
