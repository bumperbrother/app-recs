# Accounting Firm's Tech Stack Website

An interactive website based on the "Accounting Firm's Hierarchy of Tech Needs" graphic that allows users to explore software recommendations for different components of an accounting firm's technology stack.

## Features

- Interactive pyramid graphic representing the accounting firm's tech stack
- Detailed recommendations for each component of the tech stack
- Integration with Airtable for data management
- Update history tracking for all recommendations

## Tech Stack

- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend/Integration**: Vercel Serverless Functions, Airtable API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Airtable account with a base set up according to the project requirements

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/accounting-tech-stack.git
   cd accounting-tech-stack
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   - Copy `.env.example` to `.env.local`
   - Fill in your Airtable API key and base ID

4. Run the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/public` - Static assets
- `/src` - Source code
  - `/components` - React components
  - `/pages` - Next.js pages
  - `/api` - API routes (serverless functions)
  - `/styles` - CSS styles
  - `/utils` - Utility functions
  - `/hooks` - Custom React hooks
  - `/context` - React context providers
  - `/types` - TypeScript types

## Airtable Structure

The project uses Airtable as a backend with the following structure:

- One base with separate tables for each component of the tech stack
- Each table contains fields for:
  - App name
  - App maker
  - Recommendation status
  - Reasoning
  - URL
  - Created/Modified timestamps

For detailed instructions on setting up your Airtable base, see [Airtable Setup Guide](./docs/airtable-setup.md).

### Seeding Data

After setting up your Airtable base, you can populate it with sample data using the seed script:

```
npm run seed
```

This will add sample recommendations for each component of the tech stack.

## Deployment

The project is configured for easy deployment on Vercel:

```
vercel
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
