import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const results = [
  {
    name: 'Анна, 32 года',
    procedure: 'Увеличение губ',
    before: 'https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/6bf308fb-a380-44a2-aa49-3b11ac06d33c.jpg',
    after: 'https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/ec2e31d7-ec21-456b-bbae-05a4d3b3f0e3.jpg',
    review: 'Результат превзошёл все ожидания! Губы выглядят естественно, коллеги не заметили процедуру.',
    rating: 5
  },
  {
    name: 'Елена, 38 лет',
    procedure: 'Биоревитализация',
    before: 'https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/6bf308fb-a380-44a2-aa49-3b11ac06d33c.jpg',
    after: 'https://cdn.poehali.dev/projects/1fa99a0f-d8eb-4e10-869c-960e6cf163ad/files/ec2e31d7-ec21-456b-bbae-05a4d3b3f0e3.jpg',
    review: 'Кожа стала заметно более упругой и сияющей. Чувствую себя на 10 лет моложе!',
    rating: 5
  }
];

export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentResult = results[currentIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="results" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Результаты наших клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные фотографии до и после процедур. Никаких фильтров и обработки.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl p-8 lg:p-12 border border-border shadow-lg">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-muted">
              <div className="relative w-full h-full">
                <img 
                  src={currentResult.before}
                  alt="До процедуры"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img 
                    src={currentResult.after}
                    alt="После процедуры"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Icon name="ChevronsLeftRight" size={20} className="text-accent" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-foreground">
                  До
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-foreground">
                  После
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
              />
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="User" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {currentResult.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{currentResult.procedure}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(currentResult.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground italic">
                "{currentResult.review}"
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? results.length - 1 : prev - 1))}
                className="border-accent text-accent hover:bg-accent/10"
              >
                <Icon name="ChevronLeft" size={18} className="mr-1" />
                Предыдущий
              </Button>

              <div className="flex gap-2">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-accent w-8' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={() => setCurrentIndex((prev) => (prev === results.length - 1 ? 0 : prev + 1))}
                className="border-accent text-accent hover:bg-accent/10"
              >
                Следующий
                <Icon name="ChevronRight" size={18} className="ml-1" />
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Хотите увидеть такой же результат? Запишитесь на бесплатную консультацию
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-foreground font-medium"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
