import { getChangeLog } from '@/utils/airtable';
import { mockChangeLogs } from '@/utils/mockData';

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
      const changeLog = await getChangeLog(component);
      return res.status(200).json(changeLog);
    } catch (airtableError) {
      console.warn('Airtable connection failed, using mock data:', airtableError.message);
      
      // Fallback to mock data if Airtable connection fails
      if (mockChangeLogs[component]) {
        return res.status(200).json(mockChangeLogs[component]);
      } else {
        throw new Error(`No mock change log available for component: ${component}`);
      }
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Error fetching change log', error: error.message });
  }
}
