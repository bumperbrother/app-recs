# Airtable Structure Documentation

This document outlines the structure of the Airtable base used for the Accounting Firm's Tech Stack website.

## Base Structure

The Airtable base should contain separate tables for each component of the tech stack:

1. Tax Preparation
2. Ledger
3. Practice Management
4. Tax Workflow
5. Close Automation
6. Engagement
7. Service Line
8. Toppings

## Table Fields

Each table should have the following fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| App | Single line text | Name of the application |
| App Maker | Single line text | Name of the company that makes the app |
| Status | Single select | Options: "Top Recommendation", "Good Enough", "Don't Recommend" |
| Why | Long text | Reasoning for the recommendation |
| URL | URL | Link to the application's website |
| Created Time | Date (auto) | Automatically tracked by Airtable |
| Modified Time | Date (auto) | Automatically tracked by Airtable |

## Status Options

The "Status" field should have the following options:

- **Top Recommendation**: The best option in this category
- **Good Enough**: A decent option that works well
- **Don't Recommend**: An option to avoid

## Example Setup

Here's an example of how to set up your Airtable base:

1. Create a new base named "Accounting Tech Stack"
2. Create tables for each component (Tax Preparation, Ledger, etc.)
3. For each table, add the fields listed above
4. For the "Status" field, create a single select field with the three options
5. Make sure to enable "Created Time" and "Modified Time" fields

## API Integration

The website connects to this Airtable base using the Airtable API. You'll need:

- **API Key**: Your personal Airtable API key
- **Base ID**: The ID of your Airtable base

These values should be stored in your `.env` file as:

```
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=your_base_id_here
```

## Finding Your Base ID

To find your Base ID:

1. Go to [airtable.com/api](https://airtable.com/api)
2. Click on the base you want to use
3. In the documentation, you'll see "The ID of this base is appXXXXXXXXXXXXXX"
4. Copy this ID (including the "app" prefix)

## Example Data

Here's an example of what your data might look like:

**Tax Preparation Table:**

| App | App Maker | Status | Why | URL |
|-----|-----------|--------|-----|-----|
| UltraTax | Thomson Reuters | Top Recommendation | Comprehensive features, great support | https://tax.thomsonreuters.com/us/en/cs-professional-suite/ultratax-cs |
| ProSeries | Intuit | Good Enough | Easy to use but limited features | https://proconnect.intuit.com/proseries/ |
| TaxSlayer | TaxSlayer | Don't Recommend | Too many bugs, poor support | https://www.taxslayer.com/ |
