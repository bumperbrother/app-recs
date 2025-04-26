import { getFAQs } from '@/utils/airtable';
import { mockFAQs } from '@/utils/mockData';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Try to use actual Airtable data
    try {
      const faqs = await getFAQs();
      
      // Sort by order if available
      const sortedFaqs = faqs.sort((a, b) => {
        if (a.order && b.order) {
          return a.order - b.order;
        }
        return 0;
      });
      
      return res.status(200).json(sortedFaqs);
    } catch (airtableError) {
      console.warn('Airtable connection failed, using mock data:', airtableError.message);
      
      // Fallback to mock data if Airtable connection fails
      const sortedMockFaqs = mockFAQs.sort((a, b) => a.order - b.order);
      return res.status(200).json(sortedMockFaqs);
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Error fetching FAQ data', error: error.message });
  }
}
