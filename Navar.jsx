import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  const activeLinkClass = (isActive) =>
    `px-4 py-2 rounded-md ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700'
    } transition-colors duration-200`;

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          React App
        </Link>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className={({ isActive }) => activeLinkClass(isActive)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/tasks" className={({ isActive }) => activeLinkClass(isActive)}>
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to="/api-data" className={({ isActive }) => activeLinkClass(isActive)}>
                API Data
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => activeLinkClass(isActive)}>
                About
              </NavLink>
            </li>
          </ul>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
