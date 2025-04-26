import Link from 'next/link';

export default function RecommendationCard({ recommendation }) {
  const { app, appMaker, status, why, url } = recommendation;

  // Determine badge class based on status
  const getBadgeClass = () => {
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
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">
            {url ? (
              <Link href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {app}
              </Link>
            ) : (
              app
            )}
          </h3>
          <p className="text-gray-600 mt-1">{appMaker}</p>
        </div>
        <span className={getBadgeClass()}>
          {status}
        </span>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-gray-800 mb-2">Why:</h4>
        <p className="text-gray-700">{why}</p>
      </div>
    </div>
  );
}
