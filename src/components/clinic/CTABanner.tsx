import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function CTABanner({ title, description, buttonText, variant = 'primary' }: CTABannerProps) {
  const bgClasses = {
    primary: 'bg-gradient-to-r from-primary to-primary/80',
    secondary: 'bg-gradient-to-r from-secondary to-secondary/80',
    accent: 'bg-gradient-to-r from-accent to-accent/80'
  };

  return (
    <div className={`${bgClasses[variant]} rounded-3xl p-8 md:p-12 text-center shadow-xl`}>
      <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <Button 
        size="lg"
        className="bg-white hover:bg-white/90 text-foreground font-semibold text-lg px-8 py-6 shadow-xl"
      >
        <Icon name="Phone" className="mr-2" size={20} />
        {buttonText}
      </Button>
    </div>
  );
}
