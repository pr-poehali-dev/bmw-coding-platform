import Header from '@/components/clinic/Header';
import HeroSection from '@/components/clinic/HeroSection';
import ServicesSection from '@/components/clinic/ServicesSection';
import TrustSection from '@/components/clinic/TrustSection';
import AcademySection from '@/components/clinic/AcademySection';
import ResultsSection from '@/components/clinic/ResultsSection';
import ExpertSection from '@/components/clinic/ExpertSection';
import FAQSection from '@/components/clinic/FAQSection';
import Footer from '@/components/clinic/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <AcademySection />
      <ResultsSection />
      <ExpertSection />
      <FAQSection />
      <Footer />
    </div>
  );
}