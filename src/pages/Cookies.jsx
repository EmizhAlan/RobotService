import { Link } from "react-router-dom";

export default function CookiePolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <Link to="/" className="back-link">
            ← Назад на главную
          </Link>
          <h1 className="privacy-title">Политика в отношении файлов cookie</h1>
          <p className="privacy-update">Последнее обновление: 11 декабря 2025 года</p>
        </header>

        <main className="privacy-content">
          <section className="privacy-section">
            <h2>1. Что такое файлы cookie?</h2>
            <p>
              Файлы cookie — это небольшие текстовые файлы, которые сайт сохраняет на вашем устройстве 
              (компьютере, смартфоне, планшете) при посещении. Они позволяют сайту запоминать ваши 
              действия и предпочтения (например, язык, размер шрифта, регион и т.д.) на определённый 
              период времени, чтобы вам не приходилось вводить их снова при каждом визите.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Какие файлы cookie мы используем?</h2>

            <h3>2.1. Технически необходимые cookie</h3>
            <ul>
              <li>Обеспечивают базовую функциональность сайта (например, работу форм)</li>
              <li>Позволяют безопасно передавать данные между страницами</li>
              <li>Хранят настройки, выбранные вами при взаимодействии с сайтом</li>
            </ul>

            <h3>2.2. Аналитические cookie</h3>
            <ul>
              <li>Собирают анонимную информацию о том, как вы используете сайт</li>
              <li>Помогают нам понять, какие страницы популярны, а какие — нет</li>
              <li>Используются для улучшения структуры и контента сайта</li>
              <li>Пример: Google Analytics (с включённой анонимизацией IP-адресов)</li>
            </ul>

            <h3>2.3. Функциональные cookie</h3>
            <ul>
              <li>Запоминают ваше имя или предпочтения (если вы их указали)</li>
              <li>Позволяют персонализировать контент и интерфейс</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Как долго хранятся cookie?</h2>
            <ul>
              <li><strong>Сессионные cookie</strong> — удаляются сразу после закрытия браузера</li>
              <li><strong>Постоянные cookie</strong> — хранятся до истечения срока действия (обычно от 1 дня до 2 лет)</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Как управлять cookie?</h2>
            <p>
              Вы можете контролировать или удалять файлы cookie по своему усмотрению. 
              Большинство браузеров позволяют:
            </p>
            <ul>
              <li>Просматривать и удалять cookie</li>
              <li>Блокировать все cookie или только от определённых сайтов</li>
              <li>Получать уведомление при установке нового cookie</li>
            </ul>
            <p>
              Обратите внимание: если вы отключите cookie, некоторые функции сайта 
              могут работать некорректно или вовсе перестать работать.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Изменения в политике</h2>
            <p>
              Мы оставляем за собой право обновлять настоящую Политику в отношении файлов cookie. 
              Актуальная версия всегда доступна на этой странице. При существенных изменениях 
              мы уведомим вас через сайт.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Контактная информация</h2>
            <ul className="contact-info">
              <li><strong>Email:</strong> emizalan1@gmail.com</li>
              <li><strong>Telegram:</strong> @Emizh_Alan</li>
              <li><strong>Телефон:</strong> +7 (918) 339-12-32</li>
            </ul>
          </section>

          <div className="privacy-notice">
            <p>
              <strong>Важно:</strong> Продолжая использовать сайт <strong>robotservice.ru</strong>, 
              вы даёте согласие на использование файлов cookie в соответствии с настоящей Политикой.
            </p>
          </div>
        </main>

        <footer className="privacy-footer">
          <p>© 2025 RobotService. Все права защищены.</p>
          <Link to="/" className="home-link">
            Вернуться на главную
          </Link>
        </footer>
      </div>
    </div>
  );
}