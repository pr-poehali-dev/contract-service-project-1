import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/71395e1f-9745-4aca-9a61-304f88d0259c/files/77302f88-e46d-414f-a041-6446355a2c77.jpg";

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
    desc: "Встреча с офицером. Обсуждение условий, должности, места службы.",
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

const timeslots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", age: "", date: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-background text-foreground font-ibm">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
              <Icon name="Shield" size={18} className="text-background" />
            </div>
            <span className="font-oswald font-semibold text-lg tracking-widest uppercase text-foreground">
              Служба по контракту
            </span>
          </div>
          <a href="#form" className="hidden md:block btn-primary px-6 py-2 text-sm rounded-sm">
            Записаться
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="font-oswald text-gold text-sm tracking-[0.2em] uppercase">
                Вооружённые Силы России
              </span>
            </div>
            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-none text-foreground mb-6 uppercase">
              Защити страну.<br />
              <span className="text-gold">Обеспечь семью.</span>
            </h1>
            <p className="font-ibm text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
              Служба по контракту в зоне СВО — это стабильная зарплата от 210 000 ₽,
              полный соцпакет, жильё и статус защитника Родины.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#form" className="btn-primary px-8 py-4 text-base rounded-sm inline-block">
                Записаться на собеседование
              </a>
              <a href="#requirements" className="btn-outline px-8 py-4 text-base rounded-sm inline-block">
                Узнать условия
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-border">
              {[
                { val: "от 210 000 ₽", label: "в месяц" },
                { val: "3 700 000 ₽", label: "страховая выплата" },
                { val: "30 суток", label: "ежегодный отпуск" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-oswald text-2xl font-bold text-gold">{stat.val}</div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* FAQ */}
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

      {/* FORM */}
      <section id="form" className="py-20 bg-navy section-divider">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="font-oswald text-4xl font-semibold uppercase text-foreground mb-3">
              Записаться на <span className="text-gold">собеседование</span>
            </h2>
            <p className="text-muted-foreground">Оставьте заявку — офицер свяжется с вами в течение часа</p>
          </div>

          {submitted ? (
            <div className="bg-navy-card border border-gold/40 rounded-sm p-12 text-center">
              <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={32} className="text-gold" />
              </div>
              <h3 className="font-oswald text-2xl uppercase text-foreground mb-3">Заявка принята</h3>
              <p className="text-muted-foreground">
                Ожидайте звонка в ближайшее время. Офицер подтвердит время собеседования.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-navy-card border border-border rounded-sm p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-oswald uppercase tracking-wider">
                    Имя и фамилия *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иванов Иван"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-oswald uppercase tracking-wider">
                    Телефон *
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (900) 000-00-00"
                    type="tel"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-muted-foreground mb-2 font-oswald uppercase tracking-wider">
                  Возраст
                </label>
                <input
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  placeholder="Например: 27"
                  type="number"
                  min="18"
                  max="60"
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/60 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-oswald uppercase tracking-wider">
                    Дата собеседования *
                  </label>
                  <input
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    type="date"
                    min={today}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-oswald uppercase tracking-wider">
                    Удобное время *
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeslots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, time: t })}
                        className={`py-2 text-sm font-oswald rounded-sm border transition-colors ${
                          form.time === t
                            ? "bg-gold text-background border-gold"
                            : "bg-background border-border text-muted-foreground hover:border-gold/50"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-base rounded-sm">
                Отправить заявку
              </button>
              <p className="text-muted-foreground/50 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 section-divider">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-gold rounded-sm flex items-center justify-center">
              <Icon name="Shield" size={15} className="text-background" />
            </div>
            <span className="font-oswald text-sm tracking-widest uppercase text-muted-foreground">
              Служба по контракту
            </span>
          </div>
          <div className="text-muted-foreground/50 text-xs">
            © 2024 — Официальный набор в ВС РФ
          </div>
        </div>
      </footer>
    </div>
  );
}