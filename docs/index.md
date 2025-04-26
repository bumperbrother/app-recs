# Accounting Firm's Tech Stack Documentation

Welcome to the documentation for the Accounting Firm's Tech Stack website. This documentation will help you understand the project structure, how to set it up, and how to maintain it.

## Table of Contents

1. [Project Structure](./project-structure.md)
2. [Airtable Structure](./airtable-structure.md)
3. [Airtable Setup Guide](./airtable-setup.md)

## Quick Start

To get started with the project:

1. Clone the repository
2. Run `npm run setup` to set up the project
3. Set up your Airtable base following the [Airtable Setup Guide](./airtable-setup.md)
4. Run `npm run seed` to populate your Airtable base with sample data
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Overview

The Accounting Firm's Tech Stack website is an interactive tool that displays software recommendations for different components of an accounting firm's technology stack. The recommendations are stored in Airtable and displayed on the website.

The website features an interactive pyramid graphic that represents the hierarchy of technology needs for an accounting firm. Users can click on each component of the pyramid to view detailed recommendations for that component.

## Key Features

- Interactive pyramid graphic
- Detailed recommendations for each component
- Integration with Airtable for data management
- Update history tracking for all recommendations

## Technology Stack

- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend/Integration**: Vercel Serverless Functions, Airtable API
- **Deployment**: Vercel

## Environment Variables

The following environment variables are required:

- `AIRTABLE_API_KEY`: Your Airtable API key
- `AIRTABLE_BASE_ID`: Your Airtable base ID
- `NEXT_PUBLIC_SITE_URL`: The public URL of the website

These should be stored in a `.env` file at the root of the project. See `.env.example` for an example.

## Contributing

To contribute to the project:

1. Create a new branch for your feature or bug fix
2. Make your changes
3. Run tests to ensure everything works
4. Submit a pull request

## Deployment

The project is configured for deployment on Vercel. To deploy:

1. Push your changes to the main branch
2. Vercel will automatically deploy the changes

Alternatively, you can manually deploy using the Vercel CLI:

```
vercel
```

## Support

If you have any questions or need help, please contact the project maintainer.
