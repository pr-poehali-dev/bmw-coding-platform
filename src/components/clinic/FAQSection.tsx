import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    question: 'Это больно?',
    answer: 'Мы используем современные техники анестезии и тончайшие иглы. Большинство клиентов описывают ощущения как лёгкий дискомфорт. При увеличении губ и глубоких инъекциях применяется аппликационная анестезия, что делает процедуру практически безболезненной.'
  },
  {
    question: 'Сколько длится период восстановления?',
    answer: 'В большинстве случаев восстановление занимает 1-3 дня. Небольшая отёчность может сохраняться до 5-7 дней. Мы рекомендуем планировать процедуру за неделю до важных событий. Синяки возникают редко, но при их появлении легко маскируются корректором.'
  },
  {
    question: 'Это безопасно?',
    answer: 'Абсолютно. Мы используем только FDA-одобренные препараты с доказанной безопасностью. Все процедуры проводятся в стерильных условиях врачами с медицинским образованием. Перед процедурой проводится консультация с выявлением противопоказаний.'
  },
  {
    question: 'Как долго сохраняется результат?',
    answer: 'Эффект ботулинотерапии длится 4-6 месяцев. Филлеры на основе гиалуроновой кислоты держатся 8-18 месяцев в зависимости от зоны и препарата. Биоревитализация требует курса из 3-4 процедур, эффект сохраняется до 6 месяцев.'
  },
  {
    question: 'Будет ли выглядеть искусственно?',
    answer: 'Наша философия — естественность. Мы не создаём "кукольные" лица, а подчёркиваем вашу природную красоту. Дозировки подбираются индивидуально, результат выглядит натурально. Окружающие заметят, что вы прекрасно выглядите, но не поймут, что была процедура.'
  },
  {
    question: 'Есть ли противопоказания?',
    answer: 'Основные противопоказания: беременность, лактация, острые инфекции, нарушения свёртываемости крови, аутоиммунные заболевания. Полный список обсуждается на консультации. В некоторых случаях процедуру можно провести после консультации с вашим лечащим врачом.'
  },
  {
    question: 'Сколько стоит консультация?',
    answer: 'Первичная консультация абсолютно бесплатна! На ней врач осмотрит вас, обсудит ожидания, подберёт оптимальную процедуру и рассчитает точную стоимость. Длительность консультации — 30-40 минут.'
  },
  {
    question: 'Можно ли совмещать процедуры?',
    answer: 'Да, многие процедуры прекрасно дополняют друг друга. Например, ботокс + биоревитализация дают комплексный эффект омоложения. Врач разработает индивидуальную программу с учётом ваших целей и бюджета.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Частые вопросы
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на самые важные вопросы о процедурах
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-2xl overflow-hidden transition-all hover:border-accent"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-semibold text-lg text-foreground">
                  {faq.question}
                </span>
                <Icon 
                  name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                  size={24} 
                  className="text-accent flex-shrink-0 transition-transform"
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 text-muted-foreground animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 text-center border border-accent/20">
          <Icon name="MessageCircle" size={48} className="text-accent mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
            Остались вопросы?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Свяжитесь с нами любым удобным способом — мы подробно ответим 
            на все ваши вопросы и развеем все сомнения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+74951234567"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-foreground font-medium rounded-lg transition-colors"
            >
              <Icon name="Phone" size={18} />
              +7 (495) 123-45-67
            </a>
            <a 
              href="https://wa.me/74951234567"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-accent text-accent hover:bg-accent/10 font-medium rounded-lg transition-colors"
            >
              <Icon name="MessageCircle" size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
