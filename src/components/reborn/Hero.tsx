import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Hero() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [modification, setModification] = useState('');

  return (
    <section 
      id="hero" 
      className="relative min-h-[700px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80)',
      }}
    >
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 uppercase tracking-tight">
              <span className="text-primary">ЧИП ТЮНИНГ</span> АВТОМОБИЛЕЙ
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-white text-sm font-bold mb-2 text-left">
                  1. Выберите марку:
                </label>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger className="w-full bg-white/90 border-0 h-12 text-base">
                    <SelectValue placeholder="Марка автомобиля" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                    <SelectItem value="audi">Audi</SelectItem>
                    <SelectItem value="volkswagen">Volkswagen</SelectItem>
                    <SelectItem value="porsche">Porsche</SelectItem>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="lexus">Lexus</SelectItem>
                    <SelectItem value="nissan">Nissan</SelectItem>
                    <SelectItem value="mazda">Mazda</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2 text-left">
                  2. Выберите модель:
                </label>
                <Select value={model} onValueChange={setModel} disabled={!brand}>
                  <SelectTrigger className="w-full bg-white/90 border-0 h-12 text-base">
                    <SelectValue placeholder="Модель автомобиля" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="model1">3 Series</SelectItem>
                    <SelectItem value="model2">5 Series</SelectItem>
                    <SelectItem value="model3">X5</SelectItem>
                    <SelectItem value="model4">X6</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2 text-left">
                  3. Выберите модификацию:
                </label>
                <Select value={modification} onValueChange={setModification} disabled={!model}>
                  <SelectTrigger className="w-full bg-white/90 border-0 h-12 text-base">
                    <SelectValue placeholder="Модификация автомобиля" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mod1">320i 2.0T 184hp</SelectItem>
                    <SelectItem value="mod2">330i 2.0T 258hp</SelectItem>
                    <SelectItem value="mod3">M340i 3.0T 374hp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold px-12 py-6 text-lg uppercase tracking-wider shadow-xl"
            >
              ВЫБРАТЬ
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none"></div>
    </section>
  );
}
