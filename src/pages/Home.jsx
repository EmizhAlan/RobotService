import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./styles/Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      {/* Герой секция */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-gradient">Создание кастомных</span>
              <span className="title-main">Telegram-ботов</span>
            </h1>
            
            <p className="hero-description">
              Разработка индивидуальных ботов, адаптированных под конкретные бизнес-процессы. 
              Примеры задач: онлайн-заказы, CRM-управление, чат-поддержка, автоматизация задач, 
              контент-боты, интеграция с API и платёжными системами.
            </p>
            
            <div className="hero-actions">
              <Link to="/order" className="cta-button primary">
                Оставить заявку
              </Link>
              <Link to="/cases" className="cta-button secondary">
                Посмотреть кейсы
              </Link>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Реализованных проектов</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Техническая поддержка</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Удовлетворённость клиентов</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            {/* Просто красивая картинка */}
              <div className="hero-image">
               <img 
                 src="/script.jpg" 
                 alt="Ремонт компьютеров в Краснодаре"
                 className="hero-img"
                 style={{
                    width: '100%',
                   maxWidth: '500px',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                   display: 'block',
                   margin: '0 auto'
                 }}
               />
              </div>
            {/* Декоративные элементы */}
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>
            <div className="decorative-circle circle-3"></div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="features">
        <div className="features-container">
          <h2>Почему выбирают RobotService</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Работа по ТЗ</h3>
              <p>Работаем по готовому ТЗ или помогаем его составить с нуля под ваши задачи</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3>Чистый код</h3>
              <p>Пишем чистый, структурированный код, который легко поддерживать и расширять</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </div>
              <h3>Интеграции</h3>
              <p>Интеграции с API, CRM, Google Sheets, платёжными системами и другими сервисами</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h3>Поддержка</h3>
              <p>Полное сопровождение проекта после сдачи, техподдержка и консультации</p>
            </div>
          </div>
        </div>
      </section>

            {/* Секция преимуществ */}
      <section className="benefits">
        <div className="benefits-container">
          <div className="benefits-header">
            <h2 className="benefits-title">Преимущества</h2>
            <p className="benefits-subtitle">
              Индивидуальные решения, быстрая разработка и полная поддержка 
              для упрощения внедрения проектов.
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">01</div>
              <div className="benefit-content">
                <h3 className="benefit-heading">Индивидуальные решения</h3>
                <p className="benefit-description">
                  Адаптация бота под конкретные бизнес-процессы и задачи клиента. 
                  Не шаблонные решения, а уникальные продукты.
                </p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-number">02</div>
              <div className="benefit-content">
                <h3 className="benefit-heading">Быстрая <br></br>разработка</h3>
                <p className="benefit-description">
                  Оперативное создание бота с учётом всех требований клиента. 
                  Соблюдение сроков без потери качества.
                </p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-number">03</div>
              <div className="benefit-content">
                <h3 className="benefit-heading">Продуктивная архитектура</h3>
                <p className="benefit-description">
                  Чёткий подход к оптимальной структуре бота для удобства 
                  использования, масштабирования и поддержки.
                </p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-number">04</div>
              <div className="benefit-content">
                <h3 className="benefit-heading">Понимание бизнес-процессов</h3>
                <p className="benefit-description">
                  Глубокое знание бизнес-процессов помогает создавать ботов, 
                  максимально соответствующих потребностям компании.
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-number">05</div>
              <div className="benefit-content">
                <h3 className="benefit-heading">Фокус на<br></br> опыте</h3>
                <p className="benefit-description">
                  Интуитивные сценарии взаимодействия и чёткая логика 
                  диалогов делают общение с ботом простым даже для 
                  нетехнических пользователей.
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-number">06</div>
              <div className="benefit-content">
                <h3 className="benefit-heading">Гибкость в решений задач</h3>
                <p className="benefit-description">
                  Боты проектируются с учётом роста бизнеса — 
                  легко адаптируются под новые задачи, 
                  каналы и объёмы работы без полной перестройки системы.
                </p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-number">07</div>
                <div className="benefit-content">
                  <h3 className="benefit-heading">Контроль процессов</h3>
                  <p className="benefit-description">
                    Все действия ботов логируются и доступны для анализа — 
                    вы всегда понимаете, что происходит внутри системы.
                  </p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">08</div>
              <div className="benefit-content">
                <h3 className="benefit-heading">Снижение возможных затрат</h3>
                <p className="benefit-description">
                  Автоматизация сокращает расходы на ручной труд, 
                  минимизирует количество ошибок и снижает нагрузку на сотрудников.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Секция этапов работы */}
      <section className="work-stages">
        <div className="work-stages-container">
          <div className="work-stages-header">
            <h2 className="work-stages-title">Этапы работы</h2>
            <p className="work-stages-subtitle">
              Консультация, описание функционала, смета и сроки, разработка, тестирование, запуск, поддержка.
            </p>
          </div>
          
          <div className="stages-timeline">
            
            <div className="stage-item">
              <div className="stage-number">1</div>
              <div className="stage-content">
                <h3 className="stage-title">Консультация</h3>
                <p className="stage-description">
                  Обсуждаем задачи, цели и идеи проекта. Анализируем потребности бизнеса 
                  и определяем оптимальные решения.
                </p>
              </div>
              <div className="stage-line"></div>
            </div>
            
            <div className="stage-item">
              <div className="stage-number">2</div>
              <div className="stage-content">
                <h3 className="stage-title">Описание функционала</h3>
                <p className="stage-description">
                  Формируем подробный список функций и возможностей бота. 
                  Создаём техническое задание и схему работы.
                </p>
              </div>
              <div className="stage-line"></div>
            </div>
            
            <div className="stage-item">
              <div className="stage-number">3</div>
              <div className="stage-content">
                <h3 className="stage-title">Смета и сроки</h3>
                <p className="stage-description">
                  Рассчитываем стоимость проекта и определяем реалистичные сроки выполнения. 
                  Заключаем договор.
                </p>
              </div>
              <div className="stage-line"></div>
            </div>
            
            <div className="stage-item">
              <div className="stage-number">4</div>
              <div className="stage-content">
                <h3 className="stage-title">Разработка</h3>
                <p className="stage-description">
                  Создаём архитектуру бота, пишем код, реализуем весь функционал согласно техническому заданию.
                </p>
              </div>
              <div className="stage-line"></div>
            </div>
            
            <div className="stage-item">
              <div className="stage-number">5</div>
              <div className="stage-content">
                <h3 className="stage-title">Тестирование</h3>
                <p className="stage-description">
                  Проводим всестороннее тестирование бота, исправляем ошибки, 
                  оптимизируем производительность.
                </p>
              </div>
              <div className="stage-line"></div>
            </div>
            
            <div className="stage-item">
              <div className="stage-number">6</div>
              <div className="stage-content">
                <h3 className="stage-title">Запуск</h3>
                <p className="stage-description">
                  Разворачиваем бота на сервере, подключаем к Telegram, 
                  проводим финальные настройки и запускаем в работу.
                </p>
              </div>
              <div className="stage-line"></div>
            </div>
            
            <div className="stage-item">
              <div className="stage-number">7</div>
              <div className="stage-content">
                <h3 className="stage-title">Поддержка</h3>
                <p className="stage-description">
                  Оказываем техническую поддержку, мониторим работу бота, 
                  вносим доработки и улучшения по необходимости.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

            {/* Секция тарифов */}
      <section className="pricing">
        <div className="pricing-container">
          <div className="pricing-header">
            <h2 className="pricing-title">Тарифы</h2>
            <p className="pricing-subtitle">
              Стартовый бот: базовая функциональность. Бизнес-бот: расширенные функции. 
              Полная автоматизация: комплексное решение. Инди-проект: разработка под клиента.
            </p>
          </div>
          
          <div className="pricing-grid">
            
            {/* Стартовый бот */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="plan-name">Стартовый бот</h3>
                <p className="plan-description">Базовый пакет для простых задач</p>
              </div>
              
              <div className="pricing-price">
                <span className="price-amount">10 000 руб.</span>
              </div>
              
              <ul className="plan-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Приём заказов
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Чат-бот поддержки
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Интеграция с API
                </li>
                <li className="feature-disabled">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  CRM-система
                </li>
                <li className="feature-disabled">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  Платёжные системы
                </li>
              </ul>
              
              <button className="pricing-button" onClick={() => navigate('/services')}>
                Выбрать тариф
              </button>
            </div>
            
            {/* Бизнес-бот */}
            <div className="pricing-card featured">
              <div className="featured-badge">Популярный</div>
              <div className="pricing-card-header">
                <h3 className="plan-name">Бизнес-бот</h3>
                <p className="plan-description">Пакет для среднего бизнеса</p>
              </div>
              
              <div className="pricing-price">
                <span className="price-amount">50 000 руб.</span>
              </div>
              
              <ul className="plan-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  CRM-база клиентов
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Управление клиентами
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Уведомления сотрудников
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Расширенная аналитика
                </li>
                <li className="feature-disabled">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  Мультиязычность
                </li>
              </ul>
              
              <button className="pricing-button primary" onClick={() => navigate('/services')}>
                Выбрать тариф
              </button>
            </div>
            
            {/* Полная автоматизация */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="plan-name">Автоматизация</h3>
                <p className="plan-description">Автоматизация бизнес-процессов</p>
              </div>
              
              <div className="pricing-price">
                <span className="price-amount">100 000 руб.</span>
              </div>
              
              <ul className="plan-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Чат-боты поддержки
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Боты для автоматизации задач
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Интеграции с платёжными системами
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Мультиязычная поддержка
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Приоритетная поддержка 24/7
                </li>
              </ul>
              
              <button className="pricing-button" onClick={() => navigate('/services')}>
                Выбрать тариф
              </button>
            </div>
            
          </div>
          
          <div className="pricing-footer">
            <p className="custom-project-text">
              Нужен индивидуальный проект? 
              <a href="/contacts" className="custom-project-link"> Обсудить персональный тариф →</a>
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}