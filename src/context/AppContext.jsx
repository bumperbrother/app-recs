import { createContext, useContext, useState } from 'react';

// Create context
const AppContext = createContext();

// Custom hook to use the app context
export function useAppContext() {
  return useContext(AppContext);
}

// Provider component
export function AppProvider({ children }) {
  // State for the last viewed component
  const [lastViewedComponent, setLastViewedComponent] = useState(null);
  
  // State for tracking if data is being refreshed
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Function to track component views
  const trackComponentView = (component) => {
    setLastViewedComponent(component);
    // Could also save to localStorage or perform other tracking actions
  };
  
  // Function to refresh data
  const refreshData = async () => {
    setIsRefreshing(true);
    // This is a placeholder for actual refresh logic
    // In a real app, you might invalidate caches or refetch data
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };
  
  // Value object that will be passed to consumers
  const value = {
    lastViewedComponent,
    isRefreshing,
    trackComponentView,
    refreshData
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
