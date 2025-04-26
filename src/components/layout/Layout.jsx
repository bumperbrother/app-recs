import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title, component }) {
  // We're no longer using component-specific background colors
  // All pages will use the same background color as the home page

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>{title ? `${title} | Accounting Tech Stack` : 'Accounting Tech Stack'}</title>
        <meta name="description" content="Accounting Firm's Hierarchy of Tech Needs" />
      </Head>

      <header className="bg-gray-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <Link href="/" className="text-xl font-bold">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </span>
              </Link>
              <Link href="/faq" className="text-xl font-bold">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  FAQ
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {title && !component && (
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
