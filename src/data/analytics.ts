import {
  Bell,
  Brain,
  Gauge,
  Globe,
  LineChart,
  MousePointer,
  Package,
  Shield,
  Search,
} from 'lucide-react';

export const features = [
  {
    icon: LineChart,
    title: 'Sales Performance',
    description: 'Orders by year, month, and week',
    details: [
      'Orders by year, month, and week',
      'Revenue trends and projections',
      'Average order value tracking',
    ],
    color: '#3B82F6', // blue-500
  },
  {
    icon: Globe,
    title: 'Geographic Insights',
    description: 'Sales distribution by country',
    details: [
      'Sales distribution by country',
      'Regional performance metrics',
      'Location-based customer behavior',
    ],
    color: '#22C55E', // green-500
  },
  {
    icon: MousePointer,
    title: 'Traffic Analysis',
    description: 'Track your traffic sources and search performance',
    details: ['Referral source tracking', 'Search engine performance'],
    color: '#F97316', // orange-500
  },
  {
    icon: Gauge,
    title: 'Technical Performance',
    description: 'Page load times and optimization',
    details: [
      'Page load times and optimization',
      'Browser and device analytics',
      'Error tracking and monitoring',
    ],
    color: '#EF4444', // red-500
  },
  {
    icon: Package,
    title: 'Product Insights',
    description: 'Best and worst performers',
    details: ['Best and worst performers', 'Category performance metrics'],
    color: '#EAB308', // yellow-500
  },
  {
    icon: Shield,
    title: 'Blocked Bots',
    description: 'Monitor and block malicious bot traffic',
    details: [
      'Bot traffic detection',
      'Automated blocking',
      'Bot activity reporting',
    ],
    color: '#A855F7', // purple-500
  },
];

export const bottomFeatures = [
  {
    icon: Brain,
    title: 'AI-Powered Assistance',
    description:
      'Get AI-powered analysis of your sales trends and customer behavior patterns.',
    badge: 'New',
  },
  {
    icon: Search,
    title: 'Search Engine Performance',
    description:
      'Track and optimize your search engine visibility and rankings based on your website traffic.',
    badge: 'Popular',
  },
  {
    icon: Bell,
    title: 'Real-Time Monitoring',
    description:
      'Track key performance indicators in real-time and receive alerts for important changes.',
    badge: 'Essential',
  },
];
