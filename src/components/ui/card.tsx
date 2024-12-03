import React from 'react';
import { cn } from '@/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('border-b border-gray-200 p-4', className)} {...props}>
      {children}
    </div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('flex-grow p-4', className)} {...props}>
      {children}
    </div>
  );
};

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h2 className={cn('text-xl font-semibold', className)} {...props}>
      {children}
    </h2>
  );
};

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p className={cn('text-gray-600', className)} {...props}>
      {children}
    </p>
  );
};

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('mt-auto border-t border-gray-200 p-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};
