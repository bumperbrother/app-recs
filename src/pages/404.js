import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';

export default function Custom404() {
  return (
    <Layout title="Page Not Found">
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-8">Page Not Found</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Button href="/" variant="primary" size="large">
          Return to Homepage
        </Button>
      </div>
    </Layout>
  );
}
