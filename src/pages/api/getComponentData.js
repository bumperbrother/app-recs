import { getRecommendations } from '@/utils/airtable';
import { mockRecommendations } from '@/utils/mockData';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { component } = req.query;

  if (!component) {
    return res.status(400).json({ message: 'Component parameter is required' });
  }

  try {
    // Try to use actual Airtable data
    try {
      const records = await getRecommendations(component);
      
      // Create a map to store records by status while preserving order
      const statusMap = {
        'Top Recommendation': [],
        'Good Enough': [],
        'Don\'t Recommend': []
      };
      
      // First pass: collect records by status in their original order
      for (const record of records) {
        if (statusMap[record.status]) {
          statusMap[record.status].push(record);
        }
      }
      
      // Create the final data structure
      const data = statusMap;
      
      return res.status(200).json(data);
    } catch (airtableError) {
      console.warn('Airtable connection failed, using mock data:', airtableError.message);
      
      // Fallback to mock data if Airtable connection fails
      if (mockRecommendations[component]) {
        // Use mock data directly as it's already structured correctly
        const data = mockRecommendations[component];
        
        return res.status(200).json(data);
      } else {
        throw new Error(`No mock data available for component: ${component}`);
      }
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Error fetching component data', error: error.message });
  }
}
