import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Whether to show hover effects
 * @param {string} props.padding - Padding size (sm, md, lg)
 * @returns {JSX.Element} - Card component
 */
const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'md',
  ...rest 
}) => {
  // Base classes
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700';
  
  // Padding classes
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };
  
  // Hover classes
  const hoverClasses = hover ? 'card-hover' : '';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${paddingClasses[padding]} ${hoverClasses} ${className}`;
  
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  padding: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Card;
