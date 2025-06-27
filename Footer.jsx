import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" className="hover:text-blue-400 transition-colors duration-200">Home</Link>
          <Link to="/tasks" className="hover:text-blue-400 transition-colors duration-200">Tasks</Link>
          <Link to="/api-data" className="hover:text-blue-400 transition-colors duration-200">API Data</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors duration-200">About</Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} React App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
