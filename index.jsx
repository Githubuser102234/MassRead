import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate 3-second network delay
      setData([
        { id: 1, title: 'Item 1', description: 'This is the first item.' },
        { id: 2, title: 'Item 2', description: 'This is the second item.' },
        { id: 3, title: 'Item 3', description: 'This is the third item.' },
      ]);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Shimmer Loading Test</h1>
        <div className="space-y-6">
          {loading ? (
            <>
              <ShimmerCard />
              <ShimmerCard />
              <ShimmerCard />
            </>
          ) : (
            data.map(item => (
              <ContentCard key={item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// Shimmer Card component
const ShimmerCard = () => (
  <div className="p-6 bg-gray-200 rounded-lg animate-pulse shadow-md">
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
  </div>
);

// Content Card component
const ContentCard = ({ item }) => (
  <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
    <p className="text-gray-600">{item.description}</p>
  </div>
);

export default App;

