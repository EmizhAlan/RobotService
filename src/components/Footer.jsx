import { Link } from "react-router-dom";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Основные секции футера */}
        <div className="footer-grid">
          
          {/* Компания и логотип */}
          <div className="footer-section">
            <div className="footer-logo">RobotService</div>
            <p className="footer-description">
              Инновационные робототехнические решения для бизнеса и производства.
              Создаем будущее вместе с вами.
            </p>
            <div className="social-links">
              <a href="https://t.me/robotservice" className="social-link" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.98-.65-.34-1.01.21-1.59.14-.15 2.47-2.27 2.52-2.46.01-.02.01-.09-.04-.13-.05-.04-.12-.03-.17-.02-.07.02-1.22.77-3.45 2.26-.33.22-.63.33-.9.32-.3-.01-.87-.17-1.29-.31-.52-.17-.93-.26-.9-.55.02-.16.23-.33.62-.5 2.4-1.05 4-1.75 4.8-2.1 2.4-1.05 2.89-1.23 3.22-1.23.07 0 .24.02.35.11.1.08.13.19.14.27-.01.06.01.28 0 0z"/>
                </svg>
              </a>
              <a href="https://vk.com/robotservice" className="social-link" aria-label="VK">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.9 15.63h-1.35v-5.3c0-1.25-.25-2.1-1.6-2.1-.87 0-1.39.6-1.62 1.18-.08.2-.1.48-.1.77v5.45H6.17V9.7h1.35v1.56c.4-.75 1.1-1.56 2.65-1.56 1.93 0 2.9 1.3 2.9 3.5v5.43zM17 13.13c0-1.8-.7-3.1-2.05-3.1-1.2 0-1.95.9-2.05 1.95h1.35c.05-.45.35-.75.75-.75.5 0 .85.4.85.95v.65c-.6.05-1.5.2-2.1.5-.75.4-1.1 1.1-1.1 1.95 0 1.15.85 1.95 2 1.95 1.15 0 1.85-.8 1.85-1.95zm-1.35 0c0 .65-.4 1.05-.95 1.05s-.95-.4-.95-1.05c0-.65.4-1.05.95-1.05s.95.4.95 1.05z"/>
                </svg>
              </a>
              <a href="https://youtube.com/robotservice" className="social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 15l5.19-3L10 9v6zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Продукция */}
          <div className="footer-section">
            <h3 className="footer-heading">ПРОДУКЦИЯ</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Главная</Link></li>
              <li><Link to="/services" className="footer-link">Услуги</Link></li>
              <li><Link to="/cases" className="footer-link">Кейсы</Link></li>
              <li><Link to="/catalog" className="footer-link">Каталог</Link></li>
            </ul>
          </div>

          {/* Обучение */}
          <div className="footer-section">
            <h3 className="footer-heading">ОБУЧЕНИЕ</h3>
            <ul className="footer-links">
              <li><Link to="/workshops" className="footer-link">Воркшопы</Link></li>
              <li><Link to="/courses" className="footer-link">Курсы по робототехнике</Link></li>
              <li><Link to="/tutorials" className="footer-link">Видео-уроки</Link></li>
              <li><Link to="/resources" className="footer-link">Ресурсы</Link></li>
            </ul>
          </div>

          {/* Помощь */}
          <div className="footer-section">
            <h3 className="footer-heading">ПОМОЩЬ</h3>
            <ul className="footer-links">
              <li><Link to="/support" className="footer-link">Поддержка</Link></li>
              <li><Link to="/faq" className="footer-link">Частые вопросы</Link></li>
              <li><Link to="/docs" className="footer-link">Документация</Link></li>
              <li><Link to="/contact" className="footer-link">Контакты</Link></li>
            </ul>
          </div>

          

        </div>

        {/* Нижняя часть футера */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 RobotService. Все права защищены.
          </div>
          <div className="footer-legal">
            <Link to="/privacy" className="legal-link">Политика конфиденциальности</Link>
            <Link to="/terms" className="legal-link">Условия использования</Link>
            <Link to="/cookies" className="legal-link">Cookie</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}