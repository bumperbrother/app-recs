import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title, component }) {
  // Get background color based on component
  const getBgColor = () => {
    if (!component) return 'bg-gray-100';
    
    switch (component) {
      case 'toppings':
        return 'bg-toppings bg-opacity-20';
      case 'service-line':
        return 'bg-service-line bg-opacity-20';
      case 'engagement':
        return 'bg-engagement bg-opacity-20';
      case 'tax-workflow':
      case 'close-automation':
        return 'bg-tax-workflow bg-opacity-20';
      case 'practice-management':
        return 'bg-practice-management bg-opacity-20';
      case 'tax-preparation':
      case 'ledger':
        return 'bg-tax-preparation bg-opacity-20';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className={`min-h-screen bg-gray-900 text-white ${getBgColor()}`}>
      <Head>
        <title>{title ? `${title} | Accounting Tech Stack` : 'Accounting Tech Stack'}</title>
        <meta name="description" content="Accounting Firm's Hierarchy of Tech Needs" />
      </Head>

      <header className="bg-gray-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Accounting Tech Stack
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {title && (
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
        )}
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Accounting Tech Stack</p>
          <p className="text-sm mt-2">
            Based on the "Accounting Firm's Hierarchy of Tech Needs" graphic
          </p>
        </div>
      </footer>
    </div>
  );
}
