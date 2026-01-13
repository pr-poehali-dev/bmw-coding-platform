import Header from '@/components/auto/Header';
import Hero from '@/components/auto/Hero';
import Features from '@/components/auto/Features';
import CTA from '@/components/auto/CTA';
import Footer from '@/components/auto/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}