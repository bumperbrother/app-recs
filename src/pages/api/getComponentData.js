import { getRecommendations } from '@/utils/airtable';
// import { mockRecommendations } from '@/utils/mockData';

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
    // Use actual Airtable data
    const records = await getRecommendations(component);
    
    // Group recommendations by status
    const data = {
      'Top Recommendation': records.filter(item => item.status === 'Top Recommendation'),
      'Good Enough': records.filter(item => item.status === 'Good Enough'),
      'Don\'t Recommend': records.filter(item => item.status === 'Don\'t Recommend')
    };
    
    return res.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Error fetching component data', error: error.message });
  }
}
