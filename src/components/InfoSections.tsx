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
              { label: "При гибели семье", value: "3 700 000 ₽", sub: "единовременно + пенсия" },
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
            {[
              {
                icon: "User",
                title: "Возраст",
                items: ["18–60 лет для граждан РФ", "Без верхнего ограничения для офицеров", "Женщины — с 18 лет"],
              },
              {
                icon: "Activity",
                title: "Здоровье",
                items: ["Категория А или Б", "Психологическое тестирование", "Наркологическое освидетельствование"],
              },
              {
                icon: "Flag",
                title: "Гражданство",
                items: ["Граждане РФ", "Иностранные граждане (ряд стран)", "Лица без гражданства"],
              },
            ].map((block) => (
              <div key={block.title} className="bg-navy-card border border-border rounded-sm p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <Icon name={block.icon} size={20} className="text-gold" />
                  </div>
                  <h3 className="font-oswald text-xl font-semibold uppercase text-foreground">{block.title}</h3>
                </div>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <Icon name="ChevronRight" size={16} className="text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
              <div key={pos.title} className="bg-navy-card border border-border card-hover rounded-sm p-5">
                <div className="text-xs text-gold/70 font-oswald uppercase tracking-widest mb-2">{pos.category}</div>
                <div className="font-oswald text-base font-semibold text-foreground mb-3">{pos.title}</div>
                <div className="font-oswald text-lg text-gold font-bold">{pos.pay}</div>
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