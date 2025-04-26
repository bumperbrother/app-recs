import { useState } from 'react';
import Link from 'next/link';
import { getLogoUrl, getYouTubeThumbnailUrl } from '@/utils/logoUtils';

export default function RecommendationCard({ recommendation }) {
  const { app, appMaker, status, why, url, youtubeId, categories } = recommendation;
  const [logoError, setLogoError] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const logoUrl = getLogoUrl(url);
  const thumbnailUrl = getYouTubeThumbnailUrl(youtubeId);

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
        <div className="flex items-start">
          {logoUrl && !logoError && (
            <div className="mr-3 flex-shrink-0">
              <img 
                src={logoUrl} 
                alt={`${app} logo`} 
                width={32} 
                height={32} 
                className="rounded-sm"
                onError={() => setLogoError(true)}
              />
            </div>
          )}
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
            {app !== appMaker && (
              <p className="text-gray-600 mt-1">{appMaker}</p>
            )}
          </div>
        </div>
        <span className={getBadgeClass()}>
          {status === 'Top Recommendation' && '👍 '}
          {status === 'Good Enough' && '😐 '}
          {status === 'Don\'t Recommend' && '👎 '}
          {status}
        </span>
      </div>
      
      <div className="mt-4">
        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: why || '' }}></div>
      </div>
      
      {categories && categories.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
      )}
      
      {youtubeId && thumbnailUrl && !thumbnailError && (
        <div className="mt-4">
          <a 
            href={`https://www.youtube.com/watch?v=${youtubeId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative"
          >
            <div className="relative">
              <img 
                src={thumbnailUrl} 
                alt={`${app} video thumbnail`} 
                className="w-3/4 mx-auto rounded-md shadow-sm hover:shadow-md transition-shadow"
                onError={() => setThumbnailError(true)}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 text-white rounded-full p-3 opacity-80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
