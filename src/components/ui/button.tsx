import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseClasses =
    'rounded-[var(--rounded)] px-4 py-2 text-sm font-medium transition-all duration-300 active:scale-95 active:transform';
  const primaryClasses =
    'bg-[var(--accent)] text-white hover:bg-[#95a57d] hover:shadow-md';
  const secondaryClasses =
    'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50';
  const linkClasses =
    'px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900';

  const combinedClasses = `${baseClasses} ${variant === 'primary' ? primaryClasses : variant === 'secondary' ? secondaryClasses : linkClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
