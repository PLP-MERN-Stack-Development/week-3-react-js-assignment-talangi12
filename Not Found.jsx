import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 animate-bounce-slow">404</h1>
      <p className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Page Not Found</p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <Button variant="primary">Go to Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFound;
