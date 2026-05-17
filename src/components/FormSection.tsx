import { useState } from "react";
import Icon from "@/components/ui/icon";

const SUBMIT_URL = "https://functions.poehali.dev/0e890e58-b697-4915-8f8e-6fcc3c6d07b0";
const timeslots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

export default function FormSection() {
  const [form, setForm] = useState({ name: "", phone: "", age: "", date: "", time: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setError("Ошибка отправки. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      {/* FORM */}
      <section id="form" className="py-20 bg-navy section-divider">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="font-oswald text-4xl font-semibold uppercase text-foreground mb-3">
              Записаться на <span className="text-gold">собеседование</span>
            </h2>
            <p className="text-muted-foreground">Оставьте заявку — менеджер свяжется с вами в течение часа</p>
          </div>

          {submitted ? (
            <div className="bg-navy-card border border-gold/40 rounded-sm p-12 text-center">
              <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={32} className="text-gold" />
              </div>
              <h3 className="font-oswald text-2xl uppercase text-foreground mb-3">Заявка принята</h3>
              <p className="text-muted-foreground">
                Ожидайте звонка в ближайшее время. Менеджер подтвердит время собеседования.
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

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              <button type="submit" disabled={loading} className="w-full btn-primary py-4 text-base rounded-sm disabled:opacity-60">
                {loading ? "Отправка..." : "Отправить заявку"}
              </button>
              <p className="text-muted-foreground/50 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 section-divider" style={{ backgroundColor: '#0F2E1F' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#FBBF24' }}>
              <Icon name="Shield" size={15} style={{ color: '#0F172A' }} />
            </div>
            <span className="font-oswald text-sm tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Служба по контракту
            </span>
          </div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © 2024 — Официальный набор в ВС РФ
          </div>
        </div>
      </footer>
    </>
  );
}