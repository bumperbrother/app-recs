/**
 * Utility functions for handling company logos and video thumbnails
 */

/**
 * Extract domain from a URL and generate a logo URL using Clearbit's Logo API
 * @param {string} url - The website URL
 * @returns {string|null} - The logo URL or null if URL is invalid
 */
export function getLogoUrl(url) {
  if (!url) return null;
  
  try {
    // Extract domain from URL
    const domain = new URL(url).hostname;
    
    // Use Clearbit's Logo API
    return `https://logo.clearbit.com/${domain}`;
  } catch (error) {
    console.error('Error parsing URL:', error);
    return null;
  }
}

/**
 * Generate a YouTube thumbnail URL from a video ID
 * @param {string} videoId - The YouTube video ID
 * @returns {string|null} - The thumbnail URL or null if no video ID is provided
 */
export function getYouTubeThumbnailUrl(videoId) {
  if (!videoId) return null;
  
  // Use the high-quality thumbnail
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
