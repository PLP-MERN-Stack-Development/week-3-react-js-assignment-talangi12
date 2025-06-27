import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">About This Application</h1>
      <Card>
        <p className="text-lg mb-4 leading-relaxed">
          This is a demonstration React.js application built as part of a front-end development curriculum.
          It showcases various fundamental and advanced concepts in building modern web interfaces.
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Features:</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>**Component Architecture:** Reusable UI components like Buttons, Cards, Navbar, and Footer.</li>
          <li>**State Management:** Utilizes `useState` for local component state and `useContext` for global theme management.</li>
          <li>**React Hooks:** Demonstrates `useEffect` for side effects (e.g., data fetching, local storage sync) and a custom `useLocalStorage` hook for data persistence.</li>
          <li>**API Integration:** Fetches and displays data from `JSONPlaceholder`, including loading, error handling, search, and pagination.</li>
          <li>**Responsive Design:** Styled entirely with Tailwind CSS, ensuring a great user experience across mobile, tablet, and desktop devices.</li>
          <li>**Theme Switching:** Implements a light/dark mode toggle using Tailwind's `dark` variant.</li>
          <li>**Routing:** Configured with React Router for seamless navigation between different sections of the application.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          The goal of this project is to provide a practical understanding of building
          a single-page application (SPA) with a focus on best practices in React
          development and efficient styling with Tailwind CSS.
        </p>
        <p className="mt-6 text-gray-600 dark:text-gray-400">
          Feel free to explore the different sections and inspect the code!
        </p>
      </Card>
    </div>
  );
};

export default About;
