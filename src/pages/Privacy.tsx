export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-ibm">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <a href="/" className="text-gold text-sm font-oswald uppercase tracking-widest hover:underline mb-10 inline-block">
          ← Назад
        </a>

        <h1 className="font-oswald text-4xl font-bold uppercase mb-2">
          Политика конфиденциальности
        </h1>
        <p className="text-muted-foreground text-sm mb-10">Последнее обновление: май 2025 г.</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="font-oswald text-xl font-semibold uppercase text-foreground mb-3">1. Общие положения</h2>
            <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных физических лиц, оставляющих заявки на сайте.</p>
            <p className="mt-2">Обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-semibold uppercase text-foreground mb-3">2. Какие данные мы собираем</h2>
            <ul className="space-y-2">
              {["Имя и фамилия", "Номер телефона", "Возраст", "Предпочтительная дата и время для связи"].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-semibold uppercase text-foreground mb-3">3. Цели обработки данных</h2>
            <p>Персональные данные используются исключительно для:</p>
            <ul className="space-y-2 mt-2">
              {[
                "Обратной связи с кандидатом по вопросу трудоустройства",
                "Организации собеседования",
                "Информирования об условиях службы по контракту",
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-semibold uppercase text-foreground mb-3">4. Передача данных третьим лицам</h2>
            <p>Персональные данные не передаются третьим лицам, не продаются и не используются в рекламных целях. Данные могут быть переданы только по требованию уполномоченных государственных органов в случаях, предусмотренных законодательством РФ.</p>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-semibold uppercase text-foreground mb-3">5. Хранение и защита данных</h2>
            <p>Данные хранятся на защищённых серверах и не дольше, чем это необходимо для достижения целей обработки. Мы принимаем технические и организационные меры для защиты данных от несанкционированного доступа.</p>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-semibold uppercase text-foreground mb-3">6. Права субъекта персональных данных</h2>
            <p>Вы вправе в любой момент:</p>
            <ul className="space-y-2 mt-2">
              {[
                "Запросить сведения об обрабатываемых данных",
                "Потребовать исправления или удаления данных",
                "Отозвать согласие на обработку персональных данных",
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-semibold uppercase text-foreground mb-3">7. Согласие на обработку</h2>
            <p>Отправляя форму на сайте, вы даёте согласие на обработку указанных персональных данных в соответствии с настоящей Политикой. Согласие является добровольным и может быть отозвано в любое время путём письменного обращения.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
