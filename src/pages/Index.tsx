import Header from '@/components/reborn/Header';
import HeroSection from '@/components/reborn/HeroSection';
import TechnologySection from '@/components/reborn/TechnologySection';
import ApplicationsSection from '@/components/reborn/ApplicationsSection';
import TeamSection from '@/components/reborn/TeamSection';
import ContactSection from '@/components/reborn/ContactSection';
import Footer from '@/components/reborn/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TechnologySection />
      <ApplicationsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}