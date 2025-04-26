import { useState, useEffect, useMemo } from 'react';
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
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  // Extract all unique categories from recommendations
  const allCategories = useMemo(() => {
    if (component !== 'service-line' && component !== 'toppings') return [];
    
    const categories = new Set();
    
    // Collect categories from all recommendation statuses
    Object.values(recommendations).forEach(statusRecs => {
      statusRecs.forEach(rec => {
        if (rec.categories && Array.isArray(rec.categories)) {
          rec.categories.forEach(category => categories.add(category));
        }
      });
    });
    
    return Array.from(categories).sort();
  }, [recommendations, component]);
  
  // Filter recommendations based on selected categories
  const filteredRecommendations = useMemo(() => {
    if ((component !== 'service-line' && component !== 'toppings') || selectedCategories.length === 0) {
      return recommendations;
    }
    
    const filtered = {};
    
    // Filter each status group
    Object.entries(recommendations).forEach(([status, recs]) => {
      filtered[status] = recs.filter(rec => {
        // If recommendation has no categories, exclude it when filtering
        if (!rec.categories || !Array.isArray(rec.categories) || rec.categories.length === 0) {
          return false;
        }
        
        // Include if any of the recommendation's categories match any selected category
        return rec.categories.some(category => selectedCategories.includes(category));
      });
    });
    
    return filtered;
  }, [recommendations, selectedCategories, component]);
  
  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  // Clear all selected categories
  const clearCategoryFilters = () => {
    setSelectedCategories([]);
  };

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
          <p className="text-gray-300">{COMPONENT_DESCRIPTIONS[component]}</p>
        </div>
        
        {/* Category Filter - Only show for Service Line and Toppings components */}
        {(component === 'service-line' || component === 'toppings') && allCategories.length > 0 && (
          <div className="mb-8 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategories.includes(category)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {selectedCategories.length > 0 && (
              <button
                onClick={clearCategoryFilters}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Clear filters
              </button>
            )}
          </div>
        )}

        {/* Top Recommendations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Top Recommendations</h2>
          {filteredRecommendations[RECOMMENDATION_STATUS.TOP].length > 0 ? (
            filteredRecommendations[RECOMMENDATION_STATUS.TOP].map((rec) => (
              <RecommendationCard key={rec.id} recommendation={rec} />
            ))
          ) : (
            <p className="text-gray-400 italic">
              {selectedCategories.length > 0 
                ? "No top recommendations match the selected categories." 
                : "No top recommendations available."}
            </p>
          )}
        </section>

        {/* Good Enough */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Good Enough</h2>
          {filteredRecommendations[RECOMMENDATION_STATUS.GOOD].length > 0 ? (
            filteredRecommendations[RECOMMENDATION_STATUS.GOOD].map((rec) => (
              <RecommendationCard key={rec.id} recommendation={rec} />
            ))
          ) : (
            <p className="text-gray-400 italic">
              {selectedCategories.length > 0 
                ? "No 'good enough' recommendations match the selected categories." 
                : "No 'good enough' recommendations available."}
            </p>
          )}
        </section>

        {/* Don't Recommend */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Don't Recommend</h2>
          {filteredRecommendations[RECOMMENDATION_STATUS.DONT].length > 0 ? (
            filteredRecommendations[RECOMMENDATION_STATUS.DONT].map((rec) => (
              <RecommendationCard key={rec.id} recommendation={rec} />
            ))
          ) : (
            <p className="text-gray-400 italic">
              {selectedCategories.length > 0 
                ? "No 'don't recommend' entries match the selected categories." 
                : "No 'don't recommend' entries available."}
            </p>
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
