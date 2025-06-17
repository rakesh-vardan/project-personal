import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  href?: string;
  download?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  href,
  download,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white disabled:hover:bg-emerald-600',
    secondary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:hover:bg-blue-600',
    outline: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-emerald-600 dark:text-emerald-400 border border-emerald-500 disabled:hover:bg-transparent',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} download={download}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;