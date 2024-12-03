'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, Loader2 } from 'lucide-react';
import { featureCategories } from '@/data/features';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Features = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setHoveredFeature(null);
  };

  const handleKeyNavigation = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setActiveCategory((prev) => (prev + 1) % featureCategories.length);
    } else if (event.key === 'ArrowLeft') {
      setActiveCategory((prev) =>
        prev === 0 ? featureCategories.length - 1 : prev - 1
      );
    }
  };

  if (isLoading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <Loader2 className='h-8 w-8 animate-spin text-gray-600' />
      </div>
    );
  }

  return (
    <section
      className='relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24'
      role='region'
      aria-label='Feature Categories'
      id='features'
    >
      {/* Animated Background Pattern */}
      <motion.div
        className='absolute inset-0 -z-10 opacity-40'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='absolute h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-100 blur-3xl'
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute right-0 top-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-blue-100 blur-3xl'
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </motion.div>

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Animated Header Section */}
        <motion.div
          className='relative mb-20 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-5xl font-bold text-transparent'>
            Everything You Need to Succeed
          </h1>

          <p className='mx-auto max-w-3xl text-xl leading-relaxed text-gray-600'>
            Build, scale, and manage your e-commerce business with our
            comprehensive suite of tools and features
          </p>
        </motion.div>

        {/* Enhanced Category Navigation */}
        <div
          className='mb-16 flex flex-wrap justify-center gap-3'
          role='tablist'
          onKeyDown={handleKeyNavigation}
          aria-label='Feature categories'
        >
          {featureCategories.map((category, index) => {
            const isActive = activeCategory === index;
            const panelId = `panel-${index}`;
            const tabId = `tab-${index}`;

            return (
              <motion.div
                key={category.title}
                whileHover={{ scale: isActive ? 1.02 : 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => handleCategoryChange(index)}
                  role='tab'
                  id={tabId}
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  variant={isActive ? 'primary' : 'secondary'}
                  className={`group flex items-center gap-3 rounded-full transition-all duration-300 ${
                    isActive ? 'scale-105 shadow-lg' : 'hover:bg-gray-100/80'
                  }`}
                >
                  <category.icon
                    className={`h-5 w-5 transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-500 group-hover:text-gray-900'
                    } ${isActive ? 'rotate-0' : 'group-hover:-rotate-12'}`}
                  />
                  <span>{category.title}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`}
                  />
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Features Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeCategory}
            role='tabpanel'
            id={`panel-${activeCategory}`}
            aria-labelledby={`tab-${activeCategory}`}
            className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {featureCategories[activeCategory].features.map((feature, idx) => {
              const Icon = featureCategories[activeCategory].icon;
              const isHovered = hoveredFeature === idx;

              return (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <Card
                    onMouseEnter={() => setHoveredFeature(idx)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    onFocus={() => setHoveredFeature(idx)}
                    onBlur={() => setHoveredFeature(null)}
                    className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                      isHovered
                        ? 'ring-2 ring-[var(--foreground)] ring-offset-2'
                        : ''
                    }`}
                  >
                    <CardContent className='p-6'>
                      <div className='mb-4 flex items-center justify-between'>
                        <motion.div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                            isHovered
                              ? 'scale-110 bg-[var(--foreground)]'
                              : 'bg-gray-900'
                          }`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className='h-6 w-6 text-white' />
                        </motion.div>

                        {feature.badge && (
                          <Badge
                            variant={
                              feature.badge === 'New'
                                ? 'success'
                                : feature.badge === 'Popular'
                                  ? 'purple'
                                  : feature.badge === 'Coming Soon'
                                    ? 'warning'
                                    : feature.badge === 'Enterprise'
                                      ? 'info'
                                      : 'default'
                            }
                          >
                            {feature.badge}
                          </Badge>
                        )}
                      </div>

                      <h3 className='mb-2 text-xl font-semibold text-gray-900'>
                        {feature.name}
                      </h3>

                      <p className='pb-4 text-gray-600'>
                        {feature.description}
                      </p>
                    </CardContent>

                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/0 to-indigo-600/5'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Features;
