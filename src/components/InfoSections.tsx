import { useState } from "react";
import Icon from "@/components/ui/icon";

const positions = [
  { title: "Стрелок / Пулемётчик", category: "Пехота", pay: "от 210 000 ₽" },
  { title: "Механик-водитель БМП", category: "Бронетехника", pay: "от 240 000 ₽" },
  { title: "Оператор БПЛА", category: "Разведка", pay: "от 260 000 ₽" },
  { title: "Сапёр", category: "Инженерные войска", pay: "от 250 000 ₽" },
  { title: "Снайпер", category: "Спецназ", pay: "от 270 000 ₽" },
  { title: "Связист", category: "Связь", pay: "от 220 000 ₽" },
  { title: "Водитель / Механик", category: "Тыл", pay: "от 200 000 ₽" },
  { title: "Медик боевой", category: "Медслужба", pay: "от 230 000 ₽" },
];

const steps = [
  {
    num: "01",
    title: "Подача заявки",
    desc: "Заполняете форму на сайте или звоните по телефону. Ответ в течение 24 часов.",
    icon: "FileText",
  },
  {
    num: "02",
    title: "Собеседование",
    desc: "Встреча с менеджером. Обсуждение условий, должности, места службы.",
    icon: "Users",
  },
  {
    num: "03",
    title: "Медкомиссия",
    desc: "Прохождение военно-врачебной комиссии. Срок — 1–3 дня.",
    icon: "Heart",
  },
  {
    num: "04",
    title: "Подписание контракта",
    desc: "Оформление документов. Начало службы и выплата первого денежного довольствия.",
    icon: "Shield",
  },
];

const benefits = [
  {
    icon: "Home",
    title: "Жильё",
    items: [
      "Служебное жильё бесплатно",
      "Военная ипотека до 3,5 млн ₽",
      "Надбавка за аренду — до 15 000 ₽/мес",
    ],
  },
  {
    icon: "Heart",
    title: "Медицина",
    items: [
      "Бесплатное лечение в военных госпиталях",
      "Медицинское обслуживание семьи",
      "Реабилитация после ранения",
    ],
  },
  {
    icon: "Award",
    title: "Ветеранские льготы",
    items: [
      "Статус ветерана боевых действий",
      "Льготы ЖКХ — до 50% скидки",
      "Приоритет в трудоустройстве",
    ],
  },
  {
    icon: "GraduationCap",
    title: "Образование",
    items: [
      "Бесплатное высшее образование",
      "Профессиональная переподготовка",
      "Поступление вне конкурса",
    ],
  },
];

const requirementBlocks = [
  {
    icon: "User",
    title: "Возраст",
    items: [
      { title: "Основной диапазон", text: "От 18 до 58 лет для граждан РФ." },
      { title: "Региональные исключения", text: "В некоторых регионах допускается выше — уточняйте при подаче заявки." },
      { title: "Женщины", text: "С 18 лет, без верхнего ограничения для офицеров." },
    ],
  },
  {
    icon: "Flag",
    title: "Гражданство",
    items: [
      { title: "Граждане РФ", text: "Принимаются без ограничений." },
      { title: "Иностранные граждане", text: "Ряд стран — допускается, уточняйте условия." },
      { title: "Лица без гражданства", text: "Рассматриваются в индивидуальном порядке." },
    ],
  },
  {
    icon: "Activity",
    title: "Здоровье",
    items: [
      { title: "Категория годности", text: "А и Б — подходят. В — требует уточнения причин. Д — не подходит." },
      { title: "Зрение", text: "Ухудшенное допускается, кроме ряда регионов. Обязательны контактные линзы и способность читать таблицу." },
      { title: "Избыточный вес", text: "Оценивается ИМТ. Воронеж, Казань, Н. Новгород могут принять при 1–2 степени, если кандидат справляется с нагрузкой." },
      { title: "Плоскостопие", text: "Допускается всех степеней при отсутствии ограничений." },
      { title: "Проблемы с зубами", text: "Допустимы, если не вызывают боли или воспалений." },
      { title: "Татуировки", text: "Допустимы, кроме запрещённой символики. На лице — только при наличии справки из ПНД." },
      { title: "Шрамы и операции", text: "Рассматриваются индивидуально. Требуются фото и заключение об отсутствии ограничений." },
      { title: "Инвалидность III группы", text: "Допустима в отдельных случаях (Н. Новгород, Воронеж) при отсутствии визуальных признаков." },
      { title: "ПНД и наркоучёт", text: "Возможен в ряде регионов (Камчатка, Вологда, Воронеж, Н. Новгород), если кандидат не из этих городов." },
    ],
  },
];

function RequirementBlock({ icon, title, items }: { icon: string; title: string; items: { title: string; text: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="bg-navy-card border border-border rounded-sm overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
          <Icon name={icon} size={20} className="text-gold" />
        </div>
        <h3 className="font-oswald text-xl font-semibold uppercase text-foreground">{title}</h3>
      </div>
      <div className="border-t border-border">
        {items.map((item, idx) => (
          <div key={item.title} className="border-b border-border last:border-b-0">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span className="font-oswald text-sm font-semibold text-foreground">{item.title}</span>
              <Icon
                name={openIdx === idx ? "ChevronUp" : "ChevronDown"}
                size={16}
                className="text-gold flex-shrink-0 ml-3"
              />
            </button>
            {openIdx === idx && (
              <div className="px-6 pb-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InfoSections() {
  return (
    <>
      {/* PAYMENTS */}
      <section className="py-20 bg-navy section-divider">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-oswald text-4xl font-semibold uppercase text-foreground gold-underline mb-4">
              Доходы и выплаты
            </h2>
            <p className="text-muted-foreground mt-6">Все суммы — официальные, подтверждённые законодательством РФ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Оклад по воинской должности", value: "от 40 000 ₽", sub: "базовая часть" },
              { label: "Боевые надбавки", value: "до 130 000 ₽", sub: "за участие в БД" },
              { label: "Региональная надбавка", value: "до 50 000 ₽", sub: "зависит от района" },
              { label: "Единовременный контракт", value: "от 400 000 ₽", sub: "при подписании" },
              { label: "Страховка при ранении", value: "от 900 000 ₽", sub: "в зависимости от тяжести" },
              { label: "Единоразовая выплата", value: "до 3 100 000 ₽", sub: "при заключении контракта" },
              { label: "Погашение долгов", value: "до 10 000 000 ₽", sub: "государственная программа" },
            ].map((item) => (
              <div key={item.label} className="bg-navy-card border border-border card-hover rounded-sm p-6">
                <div className="text-muted-foreground text-sm mb-2">{item.label}</div>
                <div className="font-oswald text-2xl font-bold text-gold">{item.value}</div>
                <div className="text-muted-foreground text-xs mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="py-20 section-divider">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-oswald text-4xl font-semibold uppercase text-foreground gold-underline mb-4">
              Кто может служить
            </h2>
            <p className="text-muted-foreground mt-6">Базовые требования для заключения контракта</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {requirementBlocks.map((block) => (
              <RequirementBlock key={block.title} icon={block.icon} title={block.title} items={block.items} />
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONS */}
      <section className="py-20 bg-navy section-divider">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-oswald text-4xl font-semibold uppercase text-foreground gold-underline mb-4">
              Востребованные должности
            </h2>
            <p className="text-muted-foreground mt-6">Актуальные вакансии — набор открыт прямо сейчас</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {positions.map((pos) => (
              <div key={pos.title} className="border border-border card-hover rounded-sm p-5" style={{ backgroundColor: '#1E293B' }}>
                <div className="text-xs font-oswald uppercase tracking-widest mb-2" style={{ color: 'rgba(251,191,36,0.7)' }}>{pos.category}</div>
                <div className="font-oswald text-base font-semibold mb-3" style={{ color: '#ffffff' }}>{pos.title}</div>
                <div className="font-oswald text-lg font-bold" style={{ color: '#FBBF24' }}>{pos.pay}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 section-divider">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-oswald text-4xl font-semibold uppercase text-foreground gold-underline mb-4">
              Льготы и гарантии
            </h2>
            <p className="text-muted-foreground mt-6">Государственные гарантии для военнослужащих и их семей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-navy-card border border-border rounded-sm p-6">
                <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                  <Icon name={b.icon} size={24} className="text-gold" />
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase text-foreground mb-4">{b.title}</h3>
                <ul className="space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <Icon name="Check" size={15} className="text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 bg-navy section-divider">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-oswald text-4xl font-semibold uppercase text-foreground gold-underline mb-4">
              Четыре шага до контракта
            </h2>
            <p className="text-muted-foreground mt-6">Весь процесс занимает не более 5–7 рабочих дней</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-navy-card border border-border rounded-sm p-6">
                <div className="font-oswald text-5xl font-bold text-gold/20 mb-4 leading-none">{step.num}</div>
                <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                  <Icon name={step.icon} size={20} className="text-gold" />
                </div>
                <h3 className="font-oswald text-lg font-semibold uppercase text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}