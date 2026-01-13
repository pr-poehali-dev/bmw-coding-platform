import Header from '@/components/reborn/Header';
import Hero from '@/components/reborn/Hero';
import About from '@/components/reborn/About';
import Services from '@/components/reborn/Services';
import Dyno from '@/components/reborn/Dyno';
import Contact from '@/components/reborn/Contact';
import Footer from '@/components/reborn/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Dyno />
      <Contact />
      <Footer />
    </div>
  );
}
