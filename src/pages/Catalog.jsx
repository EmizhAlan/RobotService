import { useState } from "react";
import "../pages/styles/CatalogPage.css";

const catalogItems = [
  {
    id: 1,
    title: "Telegram-бот для торговли криптовалютами",
    category: "Торговля",
    description: "Автоматизированный бот с AI-стратегиями, риск-менеджментом и подключением к 20+ биржам. Торговля 24/7 без участия человека.",
    features: ["Автоматическая торговля 24/7", "Мультибиржевой арбитраж", "AI-стратегии", "Риск-менеджмент"],
    price: "от 120 000 ₽",
    timeline: "14-21 день"
  },
  {
    id: 2,
    title: "Магазин в Telegram",
    category: "E-commerce",
    description: "Полноценный интернет-магазин прямо в Telegram. Каталог, корзина, оплата и отслеживание доставки без сайта.",
    features: ["Каталог товаров", "Корзина и оформление", "Интеграция оплаты", "Трекинг заказов"],
    price: "от 85 000 ₽",
    timeline: "10-18 дней"
  },
  {
    id: 3,
    title: "Бизнес-ассистент",
    category: "Автоматизация",
    description: "Умный AI-ассистент для автоматизации рутинных задач: обработка запросов, планирование встреч, сбор данных.",
    features: ["Обработка запросов", "Планирование встреч", "Сбор данных", "Мультиязычность"],
    price: "от 95 000 ₽",
    timeline: "12-20 дней"
  },
  {
    id: 4,
    title: "Аналитическая платформа",
    category: "Аналитика",
    description: "Система сбора, анализа и визуализации данных с прогнозными моделями и автоматическими отчетами.",
    features: ["Дашборды", "Прогнозные модели", "Автоотчеты", "Визуализация"],
    price: "от 150 000 ₽",
    timeline: "18-30 дней"
  },
  {
    id: 5,
    title: "Логистический контроллер",
    category: "Логистика",
    description: "Система управления запасами, маршрутизации и отслеживания доставки. Оптимизация цепочек поставок.",
    features: ["Маршрутизация", "Управление запасами", "Трекинг", "Документооборот"],
    price: "от 180 000 ₽",
    timeline: "20-35 дней"
  },
  {
    id: 6,
    title: "CRM-бот для менеджеров",
    category: "CRM",
    description: "Telegram-бот для управления клиентами, лидами и сделками. Автоматическая воронка продаж.",
    features: ["Управление клиентами", "Воронка продаж", "Напоминания", "Аналитика"],
    price: "от 70 000 ₽",
    timeline: "8-15 дней"
  },
  {
    id: 7,
    title: "Обучающая платформа",
    category: "Образование",
    description: "Курс-бот в Telegram с уроками, тестами, сертификатами и системой прогресса учащихся.",
    features: ["Уроки и материалы", "Тестирование", "Сертификаты", "Прогресс"],
    price: "от 60 000 ₽",
    timeline: "10-14 дней"
  },
  {
    id: 8,
    title: "Сервис бронирования",
    category: "Услуги",
    description: "Бот для записи и бронирования услуг с календарём, напоминаниями и онлайн-оплатй.",
    features: ["Онлайн-запись", "Календарь", "Напоминания", "Онлайн-оплата"],
    price: "от 75 000 ₽",
    timeline: "12-18 дней"
  },
  {
    id: 9,
    title: "Корпоративный портал",
    category: "HR",
    description: "Внутренний бот для сотрудников: заявки, уведомления, база знаний, опросы и обратная связь.",
    features: ["Заявки и запросы", "База знаний", "Уведомления", "Опросы"],
    price: "от 110 000 ₽",
    timeline: "15-25 дней"
  }
];

const categories = ["Все", ...new Set(catalogItems.map(item => item.category))];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredItems = activeCategory === "Все"
    ? catalogItems
    : catalogItems.filter(item => item.category === activeCategory);

  return (
    <div className="catalog-page">
      {/* Минималистичный фон */}
      <div className="minimal-background">
        <div className="grid-pattern"></div>
        <div className="accent-line"></div>
      </div>

      {/* Hero секция */}
      <section className="catalog-hero">
        <div className="container">
          <div className="catalog-hero-content">
            <div className="catalog-badge">
              <span className="badge-text">Готовые решения</span>
            </div>
            
            <h1 className="catalog-title">
              <span className="title-line">Каталог продуктов</span>
              <span className="title-line highlight">автоматизации</span>
            </h1>
            
            <p className="catalog-subtitle">
              Готовые решения для автоматизации бизнес-процессов. Выберите подходящий 
              продукт или закажите индивидуальную разработку под ваши задачи.
            </p>
            
            <div className="catalog-stats">
              <div className="stat-item">
                <div className="stat-value">9+</div>
                <div className="stat-label">Готовых решений</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">6-35</div>
                <div className="stat-label">Дней внедрения</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">3-6</div>
                <div className="stat-label">Месяцев окупаемость</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры по категориям */}
      <section className="catalog-filters">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Сетка каталога */}
      <section className="catalog-grid-section">
        <div className="container">
          <div className="catalog-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="catalog-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-header">
                  <div className="card-category">
                    {item.category}
                  </div>
                  <div className="card-number">{item.id.toString().padStart(2, '0')}</div>
                </div>
                
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                
                <div className="card-features">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-check">✓</div>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="card-footer">
                  <div className="card-info">
                    <div className="info-item">
                      <span className="info-label">Срок:</span>
                      <span className="info-value">{item.timeline}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Цена:</span>
                      <span className="info-value highlight-price">{item.price}</span>
                    </div>
                  </div>
                  
                  <button className="card-button">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="catalog-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Не нашли подходящее решение?</h2>
              <p className="cta-text">
                Разработаем индивидуальное решение под ваши задачи. 
                Проведем бесплатный аудит и предложим оптимальный вариант автоматизации.
              </p>
              
              <div className="cta-offer">
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Бесплатный аудит бизнес-процессов</div>
                </div>
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Расчет экономического эффекта</div>
                </div>
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Прототип за 3 дня</div>
                </div>
              </div>
              
              <div className="cta-actions">
                <button className="cta-primary">Получить консультацию</button>
                <button className="cta-secondary">Заказать разработку</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
