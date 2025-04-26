/**
 * Format a date to a readable string
 * @param {Date|string} date - Date to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date string
 */
export function formatDate(date, options = {}) {
  if (!date) return '';
  
  const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(dateObj);
}

/**
 * Format a component name for display
 * @param {string} componentSlug - Component slug (e.g., 'tax-preparation')
 * @returns {string} - Formatted component name (e.g., 'Tax Preparation')
 */
export function formatComponentName(componentSlug) {
  if (!componentSlug) return '';
  
  // Map of component slugs to display names
  const componentNameMap = {
    'tax-preparation': 'Tax Preparation',
    'ledger': 'Ledger',
    'practice-management': 'Practice Management',
    'tax-workflow': 'Tax Workflow',
    'close-automation': 'Close Automation',
    'engagement': 'Engagement',
    'service-line': 'Service Line',
    'toppings': 'Toppings'
  };
  
  return componentNameMap[componentSlug] || componentSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text;
  
  return text.slice(0, maxLength) + '...';
}

/**
 * Get badge class based on recommendation status
 * @param {string} status - Recommendation status
 * @returns {string} - CSS class for badge
 */
export function getStatusBadgeClass(status) {
  switch (status) {
    case 'Top Recommendation':
      return 'badge-top-recommendation';
    case 'Good Enough':
      return 'badge-good-enough';
    case 'Don\'t Recommend':
      return 'badge-dont-recommend';
    default:
      return 'bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold';
  }
}
