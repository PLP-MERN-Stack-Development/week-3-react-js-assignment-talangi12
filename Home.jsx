import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-700 dark:text-blue-300 animate-fade-in">
        Welcome to Your React App!
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
        This application demonstrates core React concepts including component architecture,
        state management with hooks, API integration, and responsive styling using Tailwind CSS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Card className="flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Manage Your Tasks</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Add, complete, delete, and filter your daily tasks. Data is persisted in local storage.
          </p>
          <Link to="/tasks">
            <Button variant="primary">Go to Tasks</Button>
          </Link>
        </Card>

        <Card className="flex flex-col items-center p-8 bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-700 dark:to-gray-800">
          <h2 className="text-3xl font-semibold mb-4 text-green-600 dark:text-green-400">Explore API Data</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Fetch and display data from an external API with loading, error handling, and pagination.
          </p>
          <Link to="/api-data">
            <Button variant="primary">View API Data</Button>
          </Link>
        </Card>
      </div>

      <div className="mt-12 text-gray-600 dark:text-gray-400">
        <p className="mb-2">Powered by React, Vite, and Tailwind CSS.</p>
        <p>Built with ❤️ for a modern web experience.</p>
      </div>
    </div>
  );
};

export default Home;
