import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Какой возраст подходит для службы по контракту?",
    a: "От 18 до 58 лет. В некоторых регионах допускается и выше — уточняйте при подаче заявки.",
  },
  {
    q: "Подхожу ли я, если у меня категория годности В?",
    a: "Категории А и Б подходят без ограничений. Категория В рассматривается индивидуально — потребуется уточнение причин. Категория Д не подходит.",
  },
  {
    q: "Берут ли с плохим зрением, лишним весом или плоскостопием?",
    a: "Ухудшенное зрение допускается (кроме ряда регионов) при наличии контактных линз и способности читать таблицу. Избыточный вес оценивается по ИМТ — в Воронеже, Казани и Н. Новгороде принимают при 1–2 степени, если кандидат справляется с нагрузкой. Плоскостопие допускается всех степеней при отсутствии ограничений по нагрузке.",
  },
  {
    q: "Берут ли с татуировками, шрамами или после операций?",
    a: "Татуировки допустимы, кроме запрещённой символики. На лице — только при наличии справки из ПНД. Шрамы и следы операций рассматриваются индивидуально: потребуются фото и заключение об отсутствии ограничений.",
  },
  {
    q: "Берут ли с инвалидностью или если стоишь на учёте в ПНД/наркологии?",
    a: "Инвалидность III группы допустима в отдельных случаях (Н. Новгород, Воронеж) при отсутствии визуальных признаков. Психоневрологический и наркологический учёт возможен в ряде регионов (Камчатка, Вологда, Воронеж, Н. Новгород) — если кандидат не проживает в этих городах.",
  },
  {
    q: "Положен ли отпуск во время службы?",
    a: "Да. Ежегодный оплачиваемый отпуск — 30 суток. Дополнительно — отпуска по семейным обстоятельствам. Проезд к месту отдыха и обратно за счёт государства.",
  },
  {
    q: "Как выплачивается зарплата и что входит в расчёт?",
    a: "Денежное довольствие + боевые надбавки + региональные выплаты + единоразовые выплаты при подписании контракта. Всё официально, выплачивается на карту ежемесячно.",
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