/**
 * Component name mapping for display purposes
 */
export const COMPONENT_NAME_MAP = {
  'tax-preparation': 'Tax Preparation',
  'ledger': 'Ledger',
  'practice-management': 'Practice Management',
  'tax-workflow': 'Tax Workflow',
  'close-automation': 'Close Automation',
  'engagement': 'Engagement',
  'service-line': 'Service Line',
  'toppings': 'Toppings'
};

/**
 * Component descriptions
 */
export const COMPONENT_DESCRIPTIONS = {
  'tax-preparation': 'The one that puts the numbers on the tax forms',
  'ledger': 'Where you manage your client\'s books and run reports',
  'practice-management': 'The home for as much as possible of the workings of your firm. Definitely project management, sometimes time & billing, client portal, file management, request management, CRM etc.',
  'tax-workflow': 'Everything that happens around your tax prep tool, like info intake, workpaper prep & delivery',
  'close-automation': 'Where you manage everything beyond debits & credits, like quality assurance, info requests, recurring entries etc',
  'engagement': 'How proposals are sent to clients, how scope is communicated & managed, and how clients are generally billed on an ongoing basis',
  'service-line': 'The tools that support specific alternative service lines, like bill pay, receipt mgmt, tax advisory etc',
  'toppings': 'Accelerators for the rest of your tech, like ChatGPT or RightTool'
};

/**
 * Component colors based on the pyramid graphic
 */
export const COMPONENT_COLORS = {
  'toppings': '#F3F27C', // Yellow
  'service-line': '#8CDFD6', // Teal
  'engagement': '#9ED9A0', // Green
  'tax-workflow': '#F5A4D0', // Pink
  'close-automation': '#F5A4D0', // Pink (same as tax-workflow)
  'practice-management': '#E86A50', // Orange/Red
  'tax-preparation': '#4A90E2', // Blue
  'ledger': '#4A90E2', // Blue (same as tax-preparation)
};

/**
 * Recommendation status types
 */
export const RECOMMENDATION_STATUS = {
  TOP: 'Top Recommendation',
  GOOD: 'Good Enough',
  DONT: 'Don\'t Recommend'
};

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  GET_COMPONENT_DATA: '/api/getComponentData',
  GET_CHANGE_LOG: '/api/getChangeLog',
  GET_FAQS: '/api/getFAQs'
};

/**
 * Site metadata
 */
export const SITE_METADATA = {
  TITLE: 'Accounting Firm\'s Tech Stack',
  DESCRIPTION: 'Interactive guide to accounting firm\'s technology stack',
  AUTHOR: 'Accounting Tech Stack Team',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
};
