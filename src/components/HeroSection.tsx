import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/71395e1f-9745-4aca-9a61-304f88d0259c/files/77302f88-e46d-414f-a041-6446355a2c77.jpg";

export default function HeroSection() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#FBBF24' }}>
              <Icon name="Shield" size={18} style={{ color: '#0F172A' }} />
            </div>
            <span className="font-oswald font-semibold text-lg tracking-widest uppercase" style={{ color: '#ffffff' }}>
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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,59,43,0.97) 0%, rgba(26,59,43,0.88) 55%, rgba(26,59,43,0.4) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 40%)' }} />

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
                  <div className="font-oswald text-3xl md:text-4xl font-bold" style={{ color: '#FBBF24' }}>{stat.val}</div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}