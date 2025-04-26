import Airtable from 'airtable';
import { formatRichText } from './formatters';

// Initialize Airtable with API key
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

// Map component names to their respective Airtable table names
const componentToTableMap = {
  'tax-preparation': 'Tax Preparation',
  'ledger': 'Ledger',
  'practice-management': 'Practice Management',
  'tax-workflow': 'Tax Workflow',
  'close-automation': 'Close Automation',
  'engagement': 'Engagement',
  'service-line': 'Service Line',
  'toppings': 'Toppings',
  'faq': 'FAQ' // New mapping for FAQ table
};

/**
 * Get recommendations for a specific component
 * @param {string} component - The component name (e.g., 'tax-preparation')
 * @returns {Promise<Array>} - Array of recommendation objects
 */
export async function getRecommendations(component) {
  const tableName = componentToTableMap[component];
  
  if (!tableName) {
    throw new Error(`Invalid component: ${component}`);
  }
  
  try {
    // Explicitly use the 'Grid view' (default view in Airtable) to ensure we get the same sort order
    const records = await base(tableName).select({
      view: 'Grid view'
    }).all();
    
    return records.map(record => ({
      id: record.id,
      app: record.get('App'),
      appMaker: record.get('App Maker'),
      status: record.get('Status'),
      why: formatRichText(record.get('Why')),
      url: record.get('URL'),
      youtubeId: record.get('YouTube Video ID'), // New field for YouTube videos
      createdTime: record.get('Created Time'),
      modifiedTime: record.get('Modified Time')
    }));
  } catch (error) {
    console.error(`Error fetching ${component} recommendations:`, error);
    throw error;
  }
}

/**
 * Get change log for a specific component
 * @param {string} component - The component name (e.g., 'tax-preparation')
 * @returns {Promise<Array>} - Array of change log objects
 */
export async function getChangeLog(component) {
  const recommendations = await getRecommendations(component);
  
  // Sort by modified time, most recent first
  return recommendations
    .map(rec => ({
      app: rec.app,
      appMaker: rec.appMaker,
      status: rec.status,
      modifiedTime: new Date(rec.modifiedTime)
    }))
    .sort((a, b) => b.modifiedTime - a.modifiedTime);
}

/**
 * Get all components data
 * @returns {Promise<Object>} - Object with component names as keys and arrays of recommendations as values
 */
export async function getAllComponentsData() {
  const components = Object.keys(componentToTableMap);
  const data = {};
  
  for (const component of components) {
    data[component] = await getRecommendations(component);
  }
  
  return data;
}

/**
 * Get FAQs from Airtable
 * @returns {Promise<Array>} - Array of FAQ objects
 */
export async function getFAQs() {
  try {
    // Explicitly use the 'Grid view' (default view in Airtable) to ensure we get the same sort order
    const records = await base('FAQ').select({
      view: 'Grid view'
    }).all();
    
    return records.map(record => {
      return {
        id: record.id,
        question: record.get('Question'),
        answer: formatRichText(record.get('Answer')),
        category: record.get('Category'), // Optional: for grouping FAQs
        order: record.get('Order'), // Optional: for custom sorting
        createdTime: record.get('Created Time'),
        modifiedTime: record.get('Modified Time')
      };
    });
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
}
