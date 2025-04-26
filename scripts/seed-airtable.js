#!/usr/bin/env node

/**
 * Seed script for the Accounting Tech Stack Airtable base
 * This script adds sample data to the Airtable base
 */

require('dotenv').config();
const Airtable = require('airtable');

// Initialize Airtable with API key
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

// Component tables
const components = [
  'Tax Preparation',
  'Ledger',
  'Practice Management',
  'Tax Workflow',
  'Close Automation',
  'Engagement',
  'Service Line',
  'Toppings'
];

// Sample data for each component
const sampleData = {
  'Tax Preparation': [
    {
      App: 'UltraTax CS',
      'App Maker': 'Thomson Reuters',
      Status: 'Top Recommendation',
      Why: 'Comprehensive features, excellent integration with other Thomson Reuters products, and robust support.',
      URL: 'https://tax.thomsonreuters.com/us/en/cs-professional-suite/ultratax-cs'
    },
    {
      App: 'ProSeries Tax',
      'App Maker': 'Intuit',
      Status: 'Good Enough',
      Why: 'User-friendly interface and good for smaller firms, but lacks some advanced features.',
      URL: 'https://proconnect.intuit.com/proseries/'
    },
    {
      App: 'Lacerte',
      'App Maker': 'Intuit',
      Status: 'Good Enough',
      Why: 'Powerful tax software with good workflow, but can be expensive for smaller firms.',
      URL: 'https://proconnect.intuit.com/lacerte/'
    },
    {
      App: 'TaxSlayer Pro',
      'App Maker': 'TaxSlayer',
      Status: 'Don\'t Recommend',
      Why: 'Limited features for professional accountants and not as reliable for complex returns.',
      URL: 'https://www.taxslayerpro.com/'
    }
  ],
  'Ledger': [
    {
      App: 'QuickBooks Online',
      'App Maker': 'Intuit',
      Status: 'Top Recommendation',
      Why: 'Industry standard with excellent integration capabilities and wide adoption.',
      URL: 'https://quickbooks.intuit.com/'
    },
    {
      App: 'Xero',
      'App Maker': 'Xero',
      Status: 'Good Enough',
      Why: 'Great alternative to QuickBooks with good features and user-friendly interface.',
      URL: 'https://www.xero.com/'
    },
    {
      App: 'Wave',
      'App Maker': 'Wave Financial',
      Status: 'Don\'t Recommend',
      Why: 'Free but limited features for professional accounting firms.',
      URL: 'https://www.waveapps.com/'
    }
  ],
  'Practice Management': [
    {
      App: 'Karbon',
      'App Maker': 'Karbon',
      Status: 'Top Recommendation',
      Why: 'Excellent workflow management, team collaboration, and client communication features.',
      URL: 'https://karbonhq.com/'
    },
    {
      App: 'OfficeTools',
      'App Maker': 'AbacusNext',
      Status: 'Good Enough',
      Why: 'Comprehensive practice management but interface is dated.',
      URL: 'https://www.officetools.com/'
    },
    {
      App: 'Excel Spreadsheets',
      'App Maker': 'Microsoft',
      Status: 'Don\'t Recommend',
      Why: 'Not scalable, prone to errors, and lacks automation features.',
      URL: 'https://www.microsoft.com/excel'
    }
  ],
  'Tax Workflow': [
    {
      App: 'Canopy',
      'App Maker': 'Canopy',
      Status: 'Top Recommendation',
      Why: 'Excellent tax workflow management with client portal and document management.',
      URL: 'https://www.canopytax.com/'
    },
    {
      App: 'TaxDome',
      'App Maker': 'TaxDome',
      Status: 'Good Enough',
      Why: 'Good all-in-one solution but can be overwhelming.',
      URL: 'https://taxdome.com/'
    }
  ],
  'Close Automation': [
    {
      App: 'FloQast',
      'App Maker': 'FloQast',
      Status: 'Top Recommendation',
      Why: 'Excellent close management software with great integration capabilities.',
      URL: 'https://floqast.com/'
    },
    {
      App: 'BlackLine',
      'App Maker': 'BlackLine',
      Status: 'Good Enough',
      Why: 'Comprehensive but can be complex to implement and use.',
      URL: 'https://www.blackline.com/'
    }
  ],
  'Engagement': [
    {
      App: 'Ignition',
      'App Maker': 'Ignition',
      Status: 'Top Recommendation',
      Why: 'Excellent proposal, engagement letter, and payment processing solution.',
      URL: 'https://www.ignitionapp.com/'
    },
    {
      App: 'Practice Ignition',
      'App Maker': 'Practice Ignition',
      Status: 'Good Enough',
      Why: 'Good proposal and engagement letter management.',
      URL: 'https://www.practiceignition.com/'
    }
  ],
  'Service Line': [
    {
      App: 'Gusto',
      'App Maker': 'Gusto',
      Status: 'Top Recommendation',
      Why: 'Excellent payroll service with great user experience and integration capabilities.',
      URL: 'https://gusto.com/'
    },
    {
      App: 'ADP',
      'App Maker': 'ADP',
      Status: 'Good Enough',
      Why: 'Comprehensive payroll service but can be complex and expensive.',
      URL: 'https://www.adp.com/'
    }
  ],
  'Toppings': [
    {
      App: 'ChatGPT',
      'App Maker': 'OpenAI',
      Status: 'Top Recommendation',
      Why: 'Excellent AI assistant for various tasks including content creation and research.',
      URL: 'https://chat.openai.com/'
    },
    {
      App: 'Zapier',
      'App Maker': 'Zapier',
      Status: 'Good Enough',
      Why: 'Good automation tool but can get expensive with many zaps.',
      URL: 'https://zapier.com/'
    }
  ]
};

/**
 * Create tables if they don't exist and add sample data
 */
async function seedAirtable() {
  console.log('🌱 Starting to seed Airtable base...');

  // Process each component
  for (const component of components) {
    console.log(`\n📊 Processing ${component}...`);
    
    try {
      // Check if table exists by trying to get records
      try {
        await base(component).select().firstPage();
        console.log(`✅ Table ${component} exists`);
      } catch (error) {
        console.error(`❌ Table ${component} does not exist or cannot be accessed`);
        console.error(`   Please create the table "${component}" in your Airtable base`);
        continue;
      }
      
      // Add sample data
      const data = sampleData[component] || [];
      if (data.length === 0) {
        console.log(`⚠️ No sample data for ${component}`);
        continue;
      }
      
      console.log(`📝 Adding ${data.length} records to ${component}...`);
      
      // Add records in batches of 10 (Airtable limit)
      for (let i = 0; i < data.length; i += 10) {
        const batch = data.slice(i, i + 10).map(record => ({
          fields: record
        }));
        await base(component).create(batch);
      }
      
      console.log(`✅ Added ${data.length} records to ${component}`);
    } catch (error) {
      console.error(`❌ Error processing ${component}:`, error.message);
    }
  }
  
  console.log('\n🎉 Seeding complete!');
}

// Run the seeding function
seedAirtable().catch(console.error);
