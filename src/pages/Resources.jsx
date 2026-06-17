import { useState } from "react";
import "../pages/styles/ResourcesPage.css";

const resources = [
  {
    id: 1,
    title: "Документация API",
    description: "Полная документация по API Telegram-ботов. Примеры кода, описание методов и интеграции.",
    link: "#",
    type: "Документация"
  },
  {
    id: 2,
    title: "База знаний",
    description: "Статьи, руководства и пошаговые инструкции по созданию и настройке ботов.",
    link: "/workshops",
    type: "Обучение"
  },
  {
    id: 3,
    title: "Telegram Bot API",
    description: "Официальная документация Telegram Bot API с описанием всех методов и типов.",
    link: "https://core.telegram.org/bots/api",
    type: "Внешний ресурс"
  },
  {
    id: 4,
    title: "Открытые примеры кода",
    description: "GitHub-репозиторий с примерами ботов на Python, Node.js и других языках.",
    link: "#",
    type: "Open Source"
  },
  {
    id: 5,
    title: "Инструменты разработки",
    description: "Набор инструментов для тестирования, деплоя и мониторинга Telegram-ботов.",
    link: "#",
    type: "Инструменты"
  },
  {
    id: 6,
    title: "Сообщество разработчиков",
    description: "Telegram-чат для обмена опытом, обсуждения идей и получения помощи.",
    link: "#",
    type: "Сообщество"
  },
  {
    id: 7,
    title: "Шаблоны ботов",
    description: "Готовые шаблоны для различных сценариев: магазины, CRM, поддержка и другие.",
    link: "#",
    type: "Шаблоны"
  },
  {
    id: 8,
    title: "Блог о разработке",
    description: "Технические статьи о лучших практиках разработки ботов и интеграций.",
    link: "#",
    type: "Блог"
  },
  {
    id: 9,
    title: "Видеоуроки",
    description: "Серия видеоуроков по созданию ботов от основ до продвинутых техник.",
    link: "#",
    type: "Обучение"
  }
];

const categories = ["Все", ...new Set(resources.map(r => r.type))];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredResources = activeCategory === "Все"
    ? resources
    : resources.filter(r => r.type === activeCategory);

  return (
    <div className="resources-page">
      {/* Фон */}
      <div className="minimal-background">
        <div className="grid-pattern"></div>
        <div className="accent-line"></div>
      </div>

      {/* Hero секция */}
      <section className="resources-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-text">Ресурсы</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Полезные</span>
              <span className="title-line highlight">ресурсы</span>
            </h1>
            
            <p className="hero-subtitle">
              Документация, инструменты, шаблоны и сообщество. Всё, что нужно 
              для создания и масштабирования Telegram-ботов.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">9</div>
                <div className="stat-label">Ресурсов</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">5</div>
                <div className="stat-label">Категорий</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">100+</div>
                <div className="stat-label">Часов контента</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="resources-filters">
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

      {/* Сетка ресурсов */}
      <section className="resources-grid-section">
        <div className="container">
          <div className="resources-grid">
            {filteredResources.map((resource, index) => (
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                key={resource.id}
                className="resource-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="resource-card-header">
                  <div className="resource-type" style={{ background: 'rgba(2, 96, 232, 0.1)', color: 'var(--blue)', borderColor: 'rgba(2, 96, 232, 0.2)' }}>
                    {resource.type}
                  </div>
                  <div className="resource-number">{resource.id.toString().padStart(2, '0')}</div>
                </div>
                
                <h3 className="resource-card-title">{resource.title}</h3>
                <p className="resource-card-desc">{resource.description}</p>
                
                <div className="resource-card-footer">
                  <span className="resource-arrow">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="resources-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Не нашли нужный ресурс?</h2>
              <p className="cta-text">
                Свяжитесь с нами — мы поможем найти то, что вам нужно, 
                или создадим индивидуальный ресурс под ваши задачи.
              </p>
              
              <div className="cta-actions">
                <button className="cta-primary" onClick={() => window.location.href = '/contacts'}>
                  Связаться с нами
                </button>
                <button className="cta-secondary" onClick={() => window.location.href = '/supportme'}>
                  Техподдержка
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
