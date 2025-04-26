# Airtable Setup Guide

This guide will help you set up your Airtable base for the Accounting Tech Stack application.

## Step 1: Create a New Airtable Base

1. Log in to your Airtable account at [airtable.com](https://airtable.com)
2. Create a new base (you can start from scratch)
3. Name your base "Accounting Tech Stack" or any name you prefer

## Step 2: Create Tables

You need to create 8 tables in your base, one for each component of the tech stack:

1. Tax Preparation
2. Ledger
3. Practice Management
4. Tax Workflow
5. Close Automation
6. Engagement
7. Service Line
8. Toppings

## Step 3: Set Up Fields for Each Table

For each table, add the following fields:

| Field Name | Field Type |
|------------|------------|
| App | Single line text |
| App Maker | Single line text |
| Status | Single select |
| Why | Long text |
| URL | URL |

For the "Status" field, add the following options:
- Top Recommendation
- Good Enough
- Don't Recommend

## Step 4: Run the Seed Script

Once you've set up your Airtable base, you can run the seed script to populate it with sample data:

```bash
npm run seed
```

This script will:
1. Connect to your Airtable base using the API key and base ID in your `.env` file
2. Check if each table exists
3. Add sample data to each table

## Troubleshooting

If you encounter any errors:

- Make sure your Airtable API key and base ID are correct in the `.env` file
- Ensure all tables are created with the exact names listed above
- Check that each table has the required fields with the correct types
- Verify that your Airtable account has write permissions for the base

## Next Steps

After successfully seeding your Airtable base:

1. Run the application with `npm run dev`
2. Visit [http://localhost:3000](http://localhost:3000) in your browser
3. Click on any section of the pyramid to view the recommendations

You can now manage your recommendations directly in Airtable, and the changes will be reflected in the application.
