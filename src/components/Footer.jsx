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
              {/* Telegram */}
              <a href="https://t.me/robotservice" className="social-link" aria-label="Telegram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.2L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.8l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
              </a>

              {/* VK */}
              <a href="https://vk.com/robotservice" className="social-link" aria-label="VK">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.89.791-1.225.791-.164 0-.419-.192-.419-.739V6.949c0-.656-.187-.949-.74-.949H9.161c-.419 0-.668.306-.668.593 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001H2.752c-.749 0-.898.345-.898.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667C18.277 18.758 18.77 19 19.4 19h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/robotservice" className="social-link" aria-label="Instagram">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
            <h3 className="footer-heading">О НАС</h3>
            <ul className="footer-links">
              <li><Link to="/workshops" className="footer-link">Полезная информация</Link></li>
              <li><Link to="/courses" className="footer-link">Новости</Link></li>
              <li><Link to="/tutorials" className="footer-link">Поддержка проекта</Link></li>
              <li><Link to="/resources" className="footer-link">Ресурсы</Link></li>
            </ul>
          </div>

          {/* Помощь */}
          <div className="footer-section">
            <h3 className="footer-heading">ПОМОЩЬ</h3>
            <ul className="footer-links">
              <li><Link to="/support" className="footer-link">Поддержка клиента</Link></li>
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