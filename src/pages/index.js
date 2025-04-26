import Layout from '@/components/layout/Layout';
import PyramidGraphic from '@/components/pyramid/PyramidGraphic';

export default function Home() {
  return (
    <Layout title="Accounting Firm's Hierarchy of Tech Needs">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Accounting Firm's Hierarchy of Tech Needs</h1>
          <p className="text-xl text-gray-300">
            Everything you need to build your tech stack in one graphic
          </p>
        </div>
        
        <PyramidGraphic />
        
        <div className="mt-12 bg-gray-800 p-6 rounded-lg text-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-white">How to Use This Tool</h2>
          <p className="mb-4">
            This interactive guide helps accounting firms build their technology stack in a strategic way.
            The pyramid shows the hierarchy of technology needs, with the most fundamental tools at the bottom.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Click on any section of the pyramid to see software recommendations for that category</li>
            <li>Each recommendation is categorized as "Top Recommendation," "Good Enough," or "Don't Recommend"</li>
            <li>Review the reasoning behind each recommendation to understand why it might be right for your firm</li>
            <li>Check the update history at the bottom of each page to see when recommendations were last changed</li>
          </ol>
          <p className="mt-4 text-gray-400 italic">
            Start from the foundation and work your way up for the most strategic approach to building your tech stack.
          </p>
        </div>
      </div>
    </Layout>
  );
}
