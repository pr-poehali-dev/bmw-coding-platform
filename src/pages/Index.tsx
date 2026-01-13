import Header from '@/components/tuning/Header';
import Hero from '@/components/tuning/Hero';
import Services from '@/components/tuning/Services';
import Benefits from '@/components/tuning/Benefits';
import Contact from '@/components/tuning/Contact';
import Footer from '@/components/tuning/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}