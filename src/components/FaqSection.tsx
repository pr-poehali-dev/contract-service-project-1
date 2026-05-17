import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Что происходит с семьёй, если контрактник погибнет?",
    a: "Единовременная страховая выплата — 3 700 000 ₽. Ежемесячная пенсия по потере кормильца. Приоритетное место в детских садах и школах. Бесплатное жильё от государства.",
  },
  {
    q: "Положен ли отпуск во время службы?",
    a: "Да. Ежегодный оплачиваемый отпуск — 30 суток. Дополнительно — отпуска по семейным обстоятельствам. Проезд к месту отдыха и обратно — за счёт государства.",
  },
  {
    q: "Обеспечивается ли снаряжение?",
    a: "Полное обеспечение: форма, бронежилет, каска, оружие, боеприпасы — всё за счёт государства. Дополнительное личное снаряжение можно приобрести самостоятельно.",
  },
  {
    q: "Как проходит служба в зоне СВО?",
    a: "Ротация через определённые периоды. Система подразделений, поддержка товарищей. Оперативная медицинская помощь и эвакуация при ранении.",
  },
  {
    q: "Как выплачивается зарплата и что входит в расчёт?",
    a: "Денежное довольствие + боевые надбавки + региональные выплаты. Всё официально, выплачивается на карту ежемесячно. Задержек нет.",
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 section-divider">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-oswald text-4xl font-semibold uppercase text-foreground gold-underline mb-4">
            Частые вопросы
          </h2>
          <p className="text-muted-foreground mt-6">Ответы на вопросы о службе в зоне СВО</p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-navy-card rounded-sm overflow-hidden border transition-colors"
              style={{ borderColor: openFaq === idx ? "hsl(43, 85%, 52%)" : "hsl(220, 18%, 18%)" }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span className="font-ibm font-medium text-foreground">{faq.q}</span>
                <Icon
                  name={openFaq === idx ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-gold flex-shrink-0 ml-4"
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-border mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
