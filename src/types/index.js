/**
 * @typedef {Object} Recommendation
 * @property {string} id - Unique identifier
 * @property {string} app - Application name
 * @property {string} appMaker - Application maker/company
 * @property {string} status - Recommendation status ('Top Recommendation', 'Good Enough', 'Don\'t Recommend')
 * @property {string} why - Reasoning for the recommendation
 * @property {string} url - URL to the application website
 * @property {string} createdTime - ISO timestamp of when the record was created
 * @property {string} modifiedTime - ISO timestamp of when the record was last modified
 */

/**
 * @typedef {Object} ChangeLogEntry
 * @property {string} app - Application name
 * @property {string} appMaker - Application maker/company
 * @property {string} status - Recommendation status
 * @property {Date} modifiedTime - Timestamp of when the change was made
 */

/**
 * @typedef {Object} GroupedRecommendations
 * @property {Recommendation[]} 'Top Recommendation' - Array of top recommendations
 * @property {Recommendation[]} 'Good Enough' - Array of good enough recommendations
 * @property {Recommendation[]} 'Don\'t Recommend' - Array of not recommended applications
 */

/**
 * @typedef {Object} ComponentData
 * @property {string} name - Display name of the component
 * @property {string} slug - URL-friendly slug of the component
 * @property {string} description - Description of the component
 * @property {string} color - Color associated with the component
 */

// Export empty object to make this a valid module
export default {};
