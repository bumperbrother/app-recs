import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import RecommendationCard from '@/components/recommendations/RecommendationCard';
import ChangeLog from '@/components/recommendations/ChangeLog';
import Loading from '@/components/ui/Loading';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Button from '@/components/ui/Button';
import { COMPONENT_NAME_MAP, COMPONENT_DESCRIPTIONS, API_ENDPOINTS, RECOMMENDATION_STATUS } from '@/utils/constants';

export default function ComponentPage() {
  const router = useRouter();
  const { component } = router.query;
  
  const [recommendations, setRecommendations] = useState({
    [RECOMMENDATION_STATUS.TOP]: [],
    [RECOMMENDATION_STATUS.GOOD]: [],
    [RECOMMENDATION_STATUS.DONT]: []
  });
  const [changeLog, setChangeLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only fetch data when component is available (after hydration)
    if (!component) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch recommendations
        const recResponse = await fetch(`${API_ENDPOINTS.GET_COMPONENT_DATA}?component=${component}`);
        if (!recResponse.ok) throw new Error('Failed to fetch recommendations');
        const recData = await recResponse.json();
        setRecommendations(recData);
        
        // Fetch change log
        const logResponse = await fetch(`${API_ENDPOINTS.GET_CHANGE_LOG}?component=${component}`);
        if (!logResponse.ok) throw new Error('Failed to fetch change log');
        const logData = await logResponse.json();
        setChangeLog(logData);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [component]);

  // Handle invalid component or loading state
  if (!component || !COMPONENT_NAME_MAP[component]) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Component not found</h1>
          <p className="mb-6">The requested component does not exist.</p>
          <Button 
            href="/"
            variant="primary"
          >
            Return to Homepage
          </Button>
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout title={`Loading...`} component={component}>
        <Loading size="large" text="Loading recommendations..." />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title={`Error`} component={component}>
        <ErrorMessage 
          title="Error Loading Data" 
          message={error}
          onRetry={() => {
            setError(null);
            setLoading(true);
            router.reload();
          }} 
        />
      </Layout>
    );
  }

  return (
    <Layout title={COMPONENT_NAME_MAP[component]} component={component}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{COMPONENT_NAME_MAP[component]}</h1>
          <p className="text-gray-600">{COMPONENT_DESCRIPTIONS[component]}</p>
        </div>

        {/* Top Recommendations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Top Recommendations</h2>
          {recommendations[RECOMMENDATION_STATUS.TOP].length > 0 ? (
            recommendations[RECOMMENDATION_STATUS.TOP].map((rec) => (
              <RecommendationCard key={rec.id} recommendation={rec} />
            ))
          ) : (
            <p className="text-gray-500 italic">No top recommendations available.</p>
          )}
        </section>

        {/* Good Enough */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Good Enough</h2>
          {recommendations[RECOMMENDATION_STATUS.GOOD].length > 0 ? (
            recommendations[RECOMMENDATION_STATUS.GOOD].map((rec) => (
              <RecommendationCard key={rec.id} recommendation={rec} />
            ))
          ) : (
            <p className="text-gray-500 italic">No "good enough" recommendations available.</p>
          )}
        </section>

        {/* Don't Recommend */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Don't Recommend</h2>
          {recommendations[RECOMMENDATION_STATUS.DONT].length > 0 ? (
            recommendations[RECOMMENDATION_STATUS.DONT].map((rec) => (
              <RecommendationCard key={rec.id} recommendation={rec} />
            ))
          ) : (
            <p className="text-gray-500 italic">No "don't recommend" entries available.</p>
          )}
        </section>

        {/* Change Log */}
        <ChangeLog changes={changeLog} />

        <div className="mt-8 text-center">
          <Button
            href="/"
            variant="secondary"
          >
            Back to Pyramid
          </Button>
        </div>
      </div>
    </Layout>
  );
}
