'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PreviewModal from './PreviewModal';
import { bottomFeatures, features } from '@/data/analytics';

const AnalyticsSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);

  return (
    <section className='relative border-t bg-gray-50 py-24'>
      <motion.div
        className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className='mb-16 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className='mb-4 text-4xl font-bold text-gray-900'>
              Powerful Analytics Dashboard
            </h2>
            <p className='mx-auto max-w-3xl text-xl text-gray-600'>
              Make data-driven decisions with comprehensive insights into your
              store&apos;s performance
            </p>
          </motion.div>
        </div>

        {/* Main Features Grid */}
        <div className='mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, idx) => {
            const isHovered = hoveredFeature === idx;
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <Card
                  className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    isHovered
                      ? 'ring-2 ring-[var(--foreground)] ring-offset-2'
                      : ''
                  }`}
                >
                  <CardContent className='p-6'>
                    <div
                      className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg'
                      style={{ backgroundColor: feature.color }}
                    >
                      <Icon className='h-6 w-6 text-white' />
                    </div>

                    <h3 className='mb-2 text-xl font-semibold'>
                      {feature.title}
                    </h3>
                    <p className='mb-4 text-gray-600'>{feature.description}</p>

                    <motion.ul
                      className='space-y-2 overflow-hidden'
                      animate={{
                        height: hoveredFeature === idx ? 'auto' : '0',
                      }}
                    >
                      {feature.details.map((detail, detailIdx) => (
                        <motion.li
                          key={detailIdx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: hoveredFeature === idx ? 1 : 0,
                            x: hoveredFeature === idx ? 0 : -10,
                          }}
                          transition={{ delay: detailIdx * 0.1 }}
                          className='flex items-center text-gray-600'
                        >
                          <ArrowRight className='mr-2 h-4 w-4 text-[var(--accent)]' />
                          {detail}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Features */}
        <div className='mb-12 text-center'>
          <h3 className='mb-16 text-3xl font-bold'>Turn Data Into Growth</h3>
          <div className='grid gap-8 md:grid-cols-3'>
            {bottomFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                <Card className='h-full transition-all duration-300 focus-within:shadow-lg hover:-translate-y-1 hover:shadow-lg'>
                  <CardContent className='p-6'>
                    <div className='mb-4 flex items-start justify-between'>
                      <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-stone-100'>
                        <feature.icon className='h-6 w-6 text-[var(--accent)]' />
                      </div>
                      {feature.badge && (
                        <Badge variant='default'>{feature.badge}</Badge>
                      )}
                    </div>
                    <h4 className='mb-2 text-xl font-semibold'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-600'>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className='text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => setIsPreviewDialogOpen(true)}
        >
          <Button>Explore Analytics Features</Button>
        </motion.div>
      </motion.div>

      {/* Preview Dialog */}
      <PreviewModal
        isPreviewDialogOpen={isPreviewDialogOpen}
        setIsPreviewDialogOpen={setIsPreviewDialogOpen}
      />
    </section>
  );
};

export default AnalyticsSection;
