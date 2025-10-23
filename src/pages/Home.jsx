import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

/**
 * Home page component
 * @returns {JSX.Element} - Home page
 */
const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with our intuitive interface.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      link: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Explore data from external APIs with search and pagination features.',
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: '/api-data'
    },
    {
      title: 'Responsive Design',
      description: 'Beautiful, responsive interface that works on all devices.',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      link: '#'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to PLP Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          A modern, responsive task management application built with React, Tailwind CSS, 
          and integrated with external APIs. Stay organized and productive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg">
              Explore API Data
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {feature.description}
              </p>
              {feature.link !== '#' && (
                <Link to={feature.link}>
                  <Button variant="primary" size="sm">
                    Learn More
                  </Button>
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Technology Stack */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Built with Modern Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'React', color: 'text-blue-500' },
            { name: 'Tailwind CSS', color: 'text-cyan-500' },
            { name: 'Vite', color: 'text-purple-500' },
            { name: 'React Router', color: 'text-red-500' }
          ].map((tech, index) => (
            <div key={index} className="text-center">
              <div className={`text-2xl font-bold ${tech.color} mb-2`}>
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Start managing your tasks and explore our API integration features.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Start Managing Tasks
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg">
              View API Data
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
