import { Globe, Layout, Users, Truck, Zap, Smartphone } from 'lucide-react';

export const featureCategories = [
  {
    title: 'Page Builder',
    icon: Layout,
    features: [
      {
        name: 'Intelligent Page Builder',
        description:
          'Drag-and-drop interface for effortless site creation and management',
      },
      {
        name: 'Patterns & Blocks',
        description: 'Create custom pages quickly and save reusable blocks',
      },
      {
        name: 'Customization Tools',
        description: 'Easy-to-use tools for tailoring your store to your brand',
      },
      {
        name: 'Themes and Layouts',
        description: "Customize your store's look and feel",
        badge: 'Coming Soon',
      },
    ],
  },
  {
    title: 'Vendor Management',
    icon: Users,
    features: [
      {
        name: 'Multi-Vendor Platform',
        description: 'Seamlessly scale from single store to marketplace',
      },
      {
        name: 'Vendor Dashboard',
        description: 'Comprehensive tools for inventory and sales management',
      },
      {
        name: 'Vendor Posts',
        description:
          'Vendors can create posts and share promotions with followers',
      },
      {
        name: 'Direct Messaging',
        description:
          'Customers can communicate directly with vendors through the platform',
      },
      {
        name: 'Withdrawal System',
        description:
          'Support multiple payout methods including PayPal, bank transfers and local wallets',
      },
    ],
  },
  {
    title: 'Shipping & Delivery',
    icon: Truck,
    features: [
      {
        name: 'Multiple Shipping Methods',
        description: 'Vendors can create and offer various shipping options',
      },
      {
        name: 'Geographic Customization',
        description:
          'Set shipping rates based on countries and states/provinces',
      },
      {
        name: 'Flexible Rate Options',
        description:
          'Choose between flat-rate shipping or variable rates based on order details',
      },
      {
        name: 'Free Shipping Rules',
        description: 'Set minimum order values for free shipping',
      },
      {
        name: 'Shipping Restrictions',
        description: 'Define shipping availability based on customer locations',
      },
    ],
  },
  {
    title: 'Global Commerce',
    icon: Globe,
    features: [
      {
        name: 'Multi-Currency Support',
        description: 'Sell globally with support for multiple currencies',
      },
      {
        name: 'Multi-Language Support',
        description: 'Reach diverse markets with multilingual storefronts',
      },
      {
        name: 'RTL & Arabic Support',
        description: 'Cater to markets with right-to-left languages',
      },
      {
        name: 'Flexible Tax Management',
        description:
          'Set taxes according to country or globally, tailored to your needs',
      },
    ],
  },
  {
    title: 'Advanced Features',
    icon: Zap,
    features: [
      {
        name: 'AI-Powered Assistant',
        description:
          'Get instant support and answers to your e-commerce queries',
      },
      {
        name: 'Advanced Analytics',
        description:
          'Real-time insights into sales, conversions, and customer behavior',
      },
      {
        name: 'Recommendation System',
        description: 'Boost sales with intelligent product suggestions',
      },
      {
        name: 'Advanced Search',
        description:
          'Utilize Meilisearch for fast, efficient searches on large datasets',
      },
      {
        name: 'Performance Optimization',
        description: 'Implement Redis caching for improved speed',
      },
    ],
  },
  {
    title: 'Mobile & Apps',
    icon: Smartphone,
    features: [
      {
        name: 'Customer App',
        description:
          'Browse products, make purchases, and track orders on-the-go',
        badge: 'In Development',
      },
      {
        name: 'Vendor App',
        description:
          'Manage inventory, process orders, and track sales from anywhere',
        badge: 'Coming Soon',
      },
      {
        name: 'Real-Time Sync',
        description: 'Seamless integration between web and mobile platforms',
        badge: 'Coming Soon',
      },
      {
        name: 'Push Notifications',
        description:
          'Keep users informed about order status, promotions, and more',
      },
    ],
  },
];
