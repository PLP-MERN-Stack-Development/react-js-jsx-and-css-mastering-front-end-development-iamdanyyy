import React from 'react';
import TaskManager from '../components/TaskManager';

/**
 * Tasks page component
 * @returns {JSX.Element} - Tasks page
 */
const Tasks = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Task Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks, set priorities, and stay productive with our intuitive task manager.
        </p>
      </div>
      
      <TaskManager />
    </div>
  );
};

export default Tasks;
