#!/usr/bin/env node

/**
 * Test script for Airtable connection
 * This script tests the connection to Airtable and lists the tables in the base
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

/**
 * Test connection to Airtable
 */
async function testAirtableConnection() {
  console.log('🔍 Testing Airtable connection...');
  console.log(`API Key: ${process.env.AIRTABLE_API_KEY.substring(0, 10)}...`);
  console.log(`Base ID: ${process.env.AIRTABLE_BASE_ID}`);
  
  try {
    // Try to list tables in the base
    console.log('\n📋 Checking tables...');
    
    for (const component of components) {
      try {
        const records = await base(component).select().firstPage();
        console.log(`✅ Table "${component}" exists with ${records.length} records`);
        
        // Print the first record if available
        if (records.length > 0) {
          console.log(`   First record: ${JSON.stringify(records[0].fields)}`);
        }
      } catch (error) {
        console.error(`❌ Error accessing table "${component}": ${error.message}`);
      }
    }
    
    console.log('\n🎉 Test complete!');
  } catch (error) {
    console.error('❌ Error connecting to Airtable:', error.message);
  }
}

// Run the test function
testAirtableConnection().catch(console.error);
