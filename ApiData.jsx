import React, { useState, useEffect, useCallback } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const ITEMS_PER_PAGE = 10;

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Filter data based on search term
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.body.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page on new search
  }, [searchTerm, data]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300">Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-600 dark:text-red-400">
        <p className="text-xl font-semibold mb-2">Error: {error}</p>
        <Button onClick={fetchData} variant="primary">Retry Fetch</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">API Data: JSONPlaceholder Posts</h1>

      <Card className="mb-6 p-4">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          placeholder="Search posts by title or body..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Card>

      {currentItems.length === 0 && searchTerm !== '' ? (
        <p className="text-center text-gray-500 dark:text-gray-400 py-4">No results found for "{searchTerm}".</p>
      ) : currentItems.length === 0 && searchTerm === '' ? (
        <p className="text-center text-gray-500 dark:text-gray-400 py-4">No data available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{item.body}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">User ID: {item.userId}</p>
            </Card>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-8">
          <Button onClick={goToPrevPage} disabled={currentPage === 1} variant="secondary">
            Previous
          </Button>
          <span className="text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <Button onClick={goToNextPage} disabled={currentPage === totalPages} variant="secondary">
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApiData;
