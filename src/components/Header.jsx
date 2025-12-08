import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Предотвращаем скролл body при открытом меню
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  // Закрываем меню при нажатии Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-container">

        {/* Логотип с ссылкой на главную */}
        <Link to="/" className="logo">
          RobotService
        </Link>

        {/* Desktop menu */}
        <nav className="nav desktop-nav">
          <Link to="/">Главная</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/cases">Кейсы</Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>
            Контакты
          </Link>
          <Link to="/order" className="order-btn">Заказать</Link>
        </nav>

        {/* Mobile burger с анимацией */}
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <span className="burger-line top-line" />
          <span className="burger-line middle-line" />
          <span className="burger-line bottom-line" />
        </button>

        {/* Overlay для мобильного меню */}
        <div 
          className={`menu-overlay ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile menu panel */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Главная
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Услуги
          </Link>
          <Link to="/cases" onClick={() => setMenuOpen(false)}>
            Кейсы
          </Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>
            Контакты
          </Link>
          <Link
            to="/order"
            className="order-btn mobile-order"
            onClick={() => setMenuOpen(false)}
          >
            Заказать
          </Link>
        </div>

      </div>
    </header>
  );
}