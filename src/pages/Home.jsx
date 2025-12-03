export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Создаю Telegram-ботов под ключ</h1>
        <p>Быстро, качественно и под ваши задачи</p>
        <a className="cta" href="/order">Оставить заявку</a>
      </section>

      <section className="features">
        <h2>Почему выбирают меня</h2>
        <ul>
          <li>Работаю по ТЗ или помогаю его составить</li>
          <li>Пишу чистый код, легко расширяемый</li>
          <li>Интеграции с API, CRM, Google Sheets</li>
          <li>Сопровождение после сдачи проекта</li>
        </ul>
      </section>
    </div>
  );
}
