'use client';

import React, { useEffect } from 'react';

const Dialog = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div
        className='absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity'
        onClick={onClose}
      />
      <div className='relative w-full max-w-md transform rounded-2xl bg-white p-6 shadow-xl transition-all'>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
