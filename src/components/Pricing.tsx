'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type FeatureItemProps = {
  feature: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => (
  <li className='flex items-start gap-3'>
    <Check className='text-primary mt-1 h-4 w-4 flex-shrink-0' />
    <span className='text-muted-foreground text-sm leading-relaxed'>
      {feature}
    </span>
  </li>
);

type PricingCardProps = {
  tier: string;
  price: string;
  features: string[];
  popular: boolean;
  cta: string;
  link: string;
  description: string;
  billing?: string;
};

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  price,
  features,
  popular,
  cta,
  link,
  description,
  billing = 'one-time',
}) => (
  <Card
    className={`h-full transition-all duration-200 hover:shadow ${
      popular ? 'border-2 border-[var(--accent)] shadow-md' : ''
    }`}
  >
    <CardHeader className='space-y-4 pb-4 pt-8'>
      {popular && (
        <Badge
          className='absolute -top-3 left-1/2 -translate-x-1/2 px-8 py-1.5'
          variant='success'
        >
          Most Popular
        </Badge>
      )}
      <div className='space-y-2 text-center'>
        <h3 className='text-2xl font-semibold tracking-tight'>{tier}</h3>
        <p className='text-muted-foreground text-sm leading-relaxed'>
          {description}
        </p>
      </div>
      <div className='pt-2 text-center'>
        <div className='flex items-baseline justify-center gap-1'>
          <span className='text-2xl font-semibold tracking-tight'>$</span>
          <span className='text-5xl font-bold tracking-tight'>{price}</span>
        </div>
        <p className='text-muted-foreground mt-2 text-sm'>{billing} payment</p>
      </div>
    </CardHeader>

    <CardContent className='pt-6'>
      <ul className='min-h-[280px] space-y-4'>
        {features.map((feature, i) => (
          <FeatureItem key={i} feature={feature} />
        ))}
      </ul>
    </CardContent>

    <CardFooter className='flex flex-col pb-8 pt-6'>
      <Button
        className='group relative mt-auto w-full'
        variant={popular ? 'primary' : 'secondary'}
      >
        <Link
          href={link}
          aria-label={`${cta} link`}
          className='flex items-center justify-center gap-2 transition-transform group-hover:translate-x-[-4px]'
        >
          {cta}
          <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-2' />
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

const PricingSection: React.FC = () => {
  const plans = [
    {
      tier: 'Regular License',
      price: '299',
      description: 'Perfect for small businesses and individual projects',
      features: [
        'Deploy on a single domain or application',
        'Basic email support during business hours',
        'Access to all source files and documentation',
        '6 months of updates and bug fixes',
        'Community forum access',
        'Telegram Groud Support',
      ],
      cta: 'Get Started',
      popular: false,
      link: 'https://ashahin.gumroad.com/l/majna',
    },
    {
      tier: 'Extended License',
      price: '999',
      description: 'Ideal for growing businesses with multiple projects',
      features: [
        'Deploy on up to 3 domains or applications',
        'Priority email and chat support with 4h response time',
        'White-label license with source files',
        '12 months of updates and security patches',
        '1-on-1 implementation consultation (2 hours)',
        'Private Slack channel access',
      ],
      cta: 'Buy Extended',
      popular: true,
      link: 'https://ashahin.gumroad.com/l/majna?option=CfGaWh-P__T_l4iy3FJAEw%3D%3D',
    },
    {
      tier: 'Developer License',
      price: '2,499',
      description: 'Best for agencies and large enterprises',
      features: [
        'Unlimited deployments for you and your clients',
        '24/7 premium support with 1h response guarantee',
        'Full commercial license with resale rights',
        'Lifetime updates and priority bug fixes',
        'Custom feature development support',
        'Dedicated account manager',
        'Enterprise-level API access',
      ],
      cta: 'Contact Sales',
      popular: false,
      link: 'mailto:shahin@majna.shop',
    },
  ];

  return (
    <section className='px-4 py-20' id='pricing'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-16 space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-5xl'>
            Simple, transparent pricing
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
            Choose the perfect plan for your needs. All plans include our core
            features.
          </p>
        </div>
        <div className='relative grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12'>
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
