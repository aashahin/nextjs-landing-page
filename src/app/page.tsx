import AnalyticsSection from '@/components/Analytics';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PricingSection from '@/components/Pricing';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AnalyticsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
