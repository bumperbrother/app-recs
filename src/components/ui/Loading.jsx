export default function Loading({ size = 'medium', text = 'Loading...' }) {
  // Determine spinner size
  const sizeClasses = {
    small: 'h-6 w-6 border-2',
    medium: 'h-12 w-12 border-4',
    large: 'h-16 w-16 border-4'
  };
  
  const spinnerSize = sizeClasses[size] || sizeClasses.medium;
  
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className={`animate-spin rounded-full ${spinnerSize} border-t-blue-400 border-b-blue-400 border-l-transparent border-r-transparent`}></div>
      {text && <p className="mt-4 text-gray-300">{text}</p>}
    </div>
  );
}
