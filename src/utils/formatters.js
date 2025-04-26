/**
 * Convert Airtable rich text JSON format to HTML
 * @param {Array} richTextData - Airtable rich text data
 * @returns {string} - HTML string
 */
function convertAirtableRichTextToHtml(richTextData) {
  if (!Array.isArray(richTextData) || richTextData.length === 0) {
    return '';
  }
  
  let html = '';
  
  // Process each block in the rich text data
  for (const block of richTextData) {
    switch (block.type) {
      case 'paragraph':
        html += processParagraph(block);
        break;
      case 'heading':
        html += processHeading(block);
        break;
      case 'list':
        html += processList(block);
        break;
      case 'quote':
        html += processQuote(block);
        break;
      case 'code':
        html += processCode(block);
        break;
      case 'divider':
        html += '<hr />';
        break;
      default:
        // For unknown block types, try to extract text content
        if (block.text) {
          html += `<p>${processTextRuns(block.text)}</p>`;
        }
    }
  }
  
  return html;
}

/**
 * Process a paragraph block
 * @param {Object} block - Paragraph block
 * @returns {string} - HTML string
 */
function processParagraph(block) {
  return `<p>${processTextRuns(block.text)}</p>`;
}

/**
 * Process a heading block
 * @param {Object} block - Heading block
 * @returns {string} - HTML string
 */
function processHeading(block) {
  const level = block.level || 1;
  return `<h${level}>${processTextRuns(block.text)}</h${level}>`;
}

/**
 * Process a list block
 * @param {Object} block - List block
 * @returns {string} - HTML string
 */
function processList(block) {
  const listType = block.style === 'numbered' ? 'ol' : 'ul';
  let html = `<${listType}>`;
  
  for (const item of block.items || []) {
    html += `<li>${processTextRuns(item.text)}</li>`;
  }
  
  html += `</${listType}>`;
  return html;
}

/**
 * Process a quote block
 * @param {Object} block - Quote block
 * @returns {string} - HTML string
 */
function processQuote(block) {
  return `<blockquote><p>${processTextRuns(block.text)}</p></blockquote>`;
}

/**
 * Process a code block
 * @param {Object} block - Code block
 * @returns {string} - HTML string
 */
function processCode(block) {
  return `<pre><code>${block.text}</code></pre>`;
}

/**
 * Process text runs with formatting
 * @param {Array} textRuns - Array of text runs
 * @returns {string} - HTML string
 */
function processTextRuns(textRuns) {
  if (!textRuns || !Array.isArray(textRuns)) {
    return '';
  }
  
  let html = '';
  
  for (const run of textRuns) {
    let text = run.text || '';
    
    // Apply formatting
    if (run.annotations) {
      if (run.annotations.bold) {
        text = `<strong>${text}</strong>`;
      }
      if (run.annotations.italic) {
        text = `<em>${text}</em>`;
      }
      if (run.annotations.strikethrough) {
        text = `<del>${text}</del>`;
      }
      if (run.annotations.code) {
        text = `<code>${text}</code>`;
      }
      if (run.annotations.underline) {
        text = `<u>${text}</u>`;
      }
    }
    
    // Handle links
    if (run.type === 'link' && run.url) {
      text = `<a href="${run.url}">${text}</a>`;
    }
    
    html += text;
  }
  
  return html;
}

/**
 * Format rich text content from Airtable
 * @param {string} text - The text to format
 * @returns {string} - The HTML formatted text
 */
export function formatRichText(text) {
  if (!text) return '';
  
  try {
    // Check if the text is a JSON string (Airtable API v0 returns rich text as JSON)
    try {
      const jsonData = JSON.parse(text);
      if (Array.isArray(jsonData) && jsonData.length > 0 && jsonData[0].type) {
        // This is Airtable's rich text format
        return convertAirtableRichTextToHtml(jsonData);
      }
    } catch (e) {
      // Not JSON, continue with regular processing
    }
    
    // Since we're expecting Markdown from Airtable, let's convert it to HTML
    
    // First, handle any legacy HTML that might still be in the text
    if (/<[a-z][\s\S]*>/i.test(text)) {
      // Process Markdown-style links [text](url) regardless of whether the text contains HTML
      text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
      
      // Handle legacy patterns from mock data if they still exist
      text = text.replace(/Visit our my">https:\/\/www\.rlz\.io\/">my community/g, 
        'Visit our <a href="https://www.rlz.io/">my community</a>');
      
      text = text.replace(/from my">https:\/\/www\.rlz\.io\/">my community/g, 
        'from <a href="https://www.rlz.io/">my community</a>');
      
      text = text.replace(/in my">https:\/\/www\.rlz\.io\/">my/g, 
        'in <a href="https://www.rlz.io/">my community</a>');
      
      // More general fix for the my">https://www.rlz.io/">my pattern
      text = text.replace(/my">https:\/\/www\.rlz\.io\/">my/g, 
        '<a href="https://www.rlz.io/">my community</a>');
      
      // Fix for Watch their">https://youtu.be/ID">their pattern
      text = text.replace(/Watch their">https:\/\/youtu\.be\/([^"]+)">their/g, 
        'Watch <a href="https://youtu.be/$1">their tutorial video</a>');
      
      // General fix for text">url">text pattern
      text = text.replace(/([^<>]+)">https?:\/\/([^"]+)">([^<>]+)/g, function(match, text1, url, text2) {
        return `<a href="https://${url}">${text1} ${text2}</a>`;
      });
      
      // Fix plain URLs
      text = text.replace(/(?<!['"=])(https?:\/\/[^\s<]+)(?![^<]*>)/g, '<a href="$1">$1</a>');
      
      return text;
    }
    
    // Convert Markdown to HTML
    
    // Fix escaped periods in numbered lists (e.g., "1\." -> "1.")
    text = text.replace(/(\d+)\\\.(\s+)/g, '$1.$2');
    
    // Process Markdown-style links [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // Split text into paragraphs
    const paragraphs = text.split(/\n\n+/);
    let html = '';
    
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = paragraphs[i].trim();
      
      if (!paragraph) continue;
      
      // Check if this paragraph is a list
      if (/^(\s*[-*+]|\s*\d+\.)\s+/m.test(paragraph)) {
        // Split into lines
        const lines = paragraph.split(/\n/);
        let listType = null;
        let listItems = [];
        
        // Track the numbers for ordered list items
        let listNumbers = [];
        
        for (let j = 0; j < lines.length; j++) {
          const line = lines[j].trim();
          
          // Check if line is an ordered list item (handle both "1." and "1/." formats)
          const orderedMatch = line.match(/^\s*(\d+)[\.\/]\s+(.*)/);
          if (orderedMatch) {
            if (listType === 'ul') {
              // End the current unordered list
              html += '<ul>' + listItems.map(item => `<li>${item}</li>`).join('') + '</ul>';
              listItems = [];
              listNumbers = [];
            }
            listType = 'ol';
            listItems.push(orderedMatch[2]);
            listNumbers.push(parseInt(orderedMatch[1], 10));
            continue;
          }
          
          // Check if line is an unordered list item
          const unorderedMatch = line.match(/^\s*[-*+]\s+(.*)/);
          if (unorderedMatch) {
            if (listType === 'ol') {
              // End the current ordered list
              html += '<ol>' + listItems.map(item => `<li>${item}</li>`).join('') + '</ol>';
              listItems = [];
            }
            listType = 'ul';
            listItems.push(unorderedMatch[1]);
            continue;
          }
          
          // If we get here, the line is not a list item
          if (listItems.length > 0) {
            // End the current list
            if (listType === 'ol' && listNumbers.length > 0) {
              // Use the start attribute to preserve the original numbering
              html += `<ol start="${listNumbers[0]}">` + 
                      listItems.map((item, idx) => `<li value="${listNumbers[idx]}">${item}</li>`).join('') + 
                      '</ol>';
            } else {
              html += `<${listType}>` + listItems.map(item => `<li>${item}</li>`).join('') + `</${listType}>`;
            }
            listItems = [];
            listNumbers = [];
            listType = null;
          }
          
          // Process the line as a regular paragraph
          html += `<p>${line}</p>`;
        }
        
        // End any remaining list
        if (listItems.length > 0) {
          if (listType === 'ol' && listNumbers.length > 0) {
            // Use the start attribute to preserve the original numbering
            html += `<ol start="${listNumbers[0]}">` + 
                    listItems.map((item, idx) => `<li value="${listNumbers[idx]}">${item}</li>`).join('') + 
                    '</ol>';
          } else {
            html += `<${listType}>` + listItems.map(item => `<li>${item}</li>`).join('') + `</${listType}>`;
          }
        }
      } 
      // Check if this paragraph is a heading
      else if (/^#{1,6}\s+/.test(paragraph)) {
        const headingMatch = paragraph.match(/^(#{1,6})\s+(.*)/);
        if (headingMatch) {
          const level = headingMatch[1].length;
          const content = headingMatch[2];
          html += `<h${level}>${content}</h${level}>`;
        } else {
          html += `<p>${paragraph}</p>`;
        }
      }
      // Regular paragraph
      else {
        html += `<p>${paragraph.replace(/\n/g, '<br>')}</p>`;
      }
    }
    
    // Process inline formatting
    
    // Bold: **text** or __text__
    html = html.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');
    
    // Italic: *text* or _text_
    html = html.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');
    
    // Code: `text`
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Strikethrough: ~~text~~
    html = html.replace(/~~(.*?)~~/g, '<del>$1</del>');
    
    // Fix plain URLs
    html = html.replace(/(?<!['"=])(https?:\/\/[^\s<]+)(?![^<]*>)/g, '<a href="$1">$1</a>');
    
    return html;
  } catch (error) {
    console.error('Error formatting rich text:', error);
    // Return the original text if there's an error
    return text || '';
  }
}

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
