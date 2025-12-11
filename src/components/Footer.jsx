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
              <a href="https://web.telegram.org/a/#987073868" className="social-link" aria-label="Telegram">
                <svg className="vk-ico"
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
              <a href="https://vk.com/emizh_alan" className="social-link" aria-label="VK">
                <svg className="vk-icon" width="136" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#new_logo_vk_with_text__a)">
                  <g clip-path="url(#new_logo_vk_with_text__b)">
                    
                    <path d="M11.5 24h1c5.44 0 8.15 0 9.83-1.68C24 20.64 24 17.92 24 12.5v-1.02c0-5.4 0-8.12-1.67-9.8C20.65 0 17.93 0 12.5 0h-1C6.06 0 3.35 0 1.67 1.68 0 3.36 0 6.08 0 11.5v1.02c0 5.4 0 8.12 1.68 9.8C3.36 24 6.08 24 11.5 24Z" fill=""></path>
                    <path d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58a7.62 7.62 0 0 1-3.51 4.98 7.9 7.9 0 0 1 4.11 5.01h-2.84a4.94 4.94 0 0 0-4.14-3.57v3.57h-.31Z" fill="#fff">
                      </path></g></g><defs><clipPath id="new_logo_vk_with_text__a"><path fill="#fff" transform="translate(.000)" d="M0 0h136v24H0z"></path>
                      </clipPath><clipPath id="new_logo_vk_with_text__b">
                        <path fill="#fff" transform="translate(0)" d="M0 0h136v48H0z"></path></clipPath></defs></svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/alanemizh1?igsh=MWk1bDVtNGJ4MXRlNQ==" className="social-link" aria-label="Instagram">
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
              <li><Link to="/news" className="footer-link">Новости</Link></li>
              <li><Link to="/supportme" className="footer-link">Поддержка проекта</Link></li>
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
              <li><Link to="/contacts" className="footer-link">Контакты</Link></li>
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