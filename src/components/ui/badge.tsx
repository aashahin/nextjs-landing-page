import React from 'react';
import { cn } from '@/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'purple' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-green-200 text-green-800',
    warning: 'bg-yellow-200 text-yellow-800',
    info: 'bg-blue-200 text-blue-800',
    purple: 'bg-purple-200 text-purple-800',
    outline: 'border border-gray-300 text-gray-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
