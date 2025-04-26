import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Loading from '@/components/ui/Loading';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Button from '@/components/ui/Button';
import { API_ENDPOINTS } from '@/utils/constants';

export default function FAQ() {
  const [faqs, setFAQs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINTS.GET_FAQS);
        if (!response.ok) throw new Error('Failed to fetch FAQs');
        const data = await response.json();
        setFAQs(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  // Get unique categories from FAQs
  const categories = faqs.length > 0 
    ? ['all', ...new Set(faqs.map(faq => faq.category).filter(Boolean))]
    : ['all'];

  // Filter FAQs by active category
  const filteredFAQs = activeCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  if (loading) {
    return (
      <Layout title="Loading..." component="faq">
        <Loading size="large" text="Loading FAQs..." />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Error" component="faq">
        <ErrorMessage 
          title="Error Loading FAQs" 
          message={error}
          onRetry={() => {
            setError(null);
            setLoading(true);
            window.location.reload();
          }} 
        />
      </Layout>
    );
  }

  return (
    <Layout title="Frequently Asked Questions" component="faq">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 mb-6">
            Common questions about the Accounting Tech Stack
          </p>
          
          {/* Category filters */}
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="space-y-6">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: faq.answer || '' }}></div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 italic">No FAQs available.</p>
          )}
        </div>

        <div className="mt-12 text-center">
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
