import Header from '@/components/reborn/Header';
import Hero from '@/components/reborn/Hero';
import Science from '@/components/reborn/Science';
import Technology from '@/components/reborn/Technology';
import Applications from '@/components/reborn/Applications';
import Team from '@/components/reborn/Team';
import Contact from '@/components/reborn/Contact';
import Footer from '@/components/reborn/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Science />
      <Technology />
      <Applications />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}