import { useState } from "react";
import "../pages/styles/DocumentationPage.css";

const documentation = [
  {
    id: 1,
    title: "Быстрый старт",
    description: "Пошаговое руководство по созданию первого Telegram-бота за 15 минут.",
    sections: ["Регистрация бота", "Настройка вебхука", "Первое сообщение", "Тестирование"],
    level: "Начальный"
  },
  {
    id: 2,
    title: "API Reference",
    description: "Полная документация по всем методам API с примерами на Python и Node.js.",
    sections: ["Методы бота", "Типы объектов", "Обработка ошибок", "Rate limiting"],
    level: "Средний"
  },
  {
    id: 3,
    title: "Интеграция с CRM",
    description: "Как подключить бота к популярным CRM-системам и автоматизировать воронку продаж.",
    sections: ["AmoCRM", "1C-Битрикс", "Salesforce", "Кастомная CRM"],
    level: "Средний"
  },
  {
    id: 4,
    title: "AI и машинное обучение",
    description: "Руководство по интеграции AI-моделей в бота для обработки естественного языка.",
    sections: ["NLP модели", "Обучение на данных", "Внедрение в бота", "Оптимизация"],
    level: "Продвинутый"
  },
  {
    id: 5,
    title: "Платежные системы",
    description: "Интеграция ЮKassa, Stripe и других платёжных систем в Telegram-бота.",
    sections: ["ЮKassa", "Stripe", "Криптовалюты", "Тестовый режим"],
    level: "Средний"
  },
  {
    id: 6,
    title: "Деплой и мониторинг",
    description: "Как развернуть бота на сервере и настроить мониторинг производительности.",
    sections: ["Docker", "CI/CD", "Логирование", "Алертинг"],
    level: "Продвинутый"
  },
  {
    id: 7,
    title: "Безопасность",
    description: "Лучшие практики по защите бота и данных пользователей от угроз.",
    sections: ["Шифрование", "Аутентификация", "Защита от атак", "Соответствие GDPR"],
    level: "Продвинутый"
  },
  {
    id: 8,
    title: "Тестирование",
    description: "Подходы к тестированию ботов: юнит-тесты, интеграционные тесты, нагрузочное тестирование.",
    sections: ["Юнит-тесты", "Интеграционные", "Нагрузочные", "CI/CD тесты"],
    level: "Средний"
  },
  {
    id: 9,
    title: "Масштабирование",
    description: "Как подготовить бота к увеличению нагрузки и обслуживанию миллионов пользователей.",
    sections: ["Вертикальное", "Горизонтальное", "Кэширование", "CDN"],
    level: "Продвинутый"
  },
  {
    id: 10,
    title: "Аналитика и отчётность",
    description: "Встраивание аналитики в бота: метрики, дашборды, автоматические отчёты.",
    sections: ["Метрики", "Дашборды", "Отчёты", "Интеграции"],
    level: "Начальный"
  },
  {
    id: 11,
    title: "Мультиязычность",
    description: "Как добавить поддержку нескольких языков в боте и управлять локализацией.",
    sections: ["i18n", "Переводы", "Автоперевод", "Локализация"],
    level: "Начальный"
  },
  {
    id: 12,
    title: "Безопасная обработка данных",
    description: "Соответствие 152-ФЗ и GDPR, политика конфиденциальности и хранение данных.",
    sections: ["152-ФЗ", "GDPR", "Хранение", "Удаление данных"],
    level: "Средний"
  }
];

const levels = ["Все", ...new Set(documentation.map(d => d.level))];

export default function Documentation() {
  const [activeLevel, setActiveLevel] = useState("Все");
  const [openDoc, setOpenDoc] = useState(null);

  const filteredDocs = activeLevel === "Все"
    ? documentation
    : documentation.filter(d => d.level === activeLevel);

  return (
    <div className="documentation-page">
      {/* Фон */}
      <div className="minimal-background">
        <div className="grid-pattern"></div>
        <div className="accent-line"></div>
      </div>

      {/* Hero секция */}
      <section className="documentation-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-text">Документация</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Полная</span>
              <span className="title-line highlight">документация</span>
            </h1>
            
            <p className="hero-subtitle">
              Руководства, API reference, примеры кода и лучшие практики 
              по созданию и масштабированию Telegram-ботов.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">12</div>
                <div className="stat-label">Разделов</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Статей</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">3</div>
                <div className="stat-label">Уровня</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры по уровню */}
      <section className="documentation-filters">
        <div className="container">
          <div className="filter-tabs">
            {levels.map((level) => (
              <button
                key={level}
                className={`filter-tab ${activeLevel === level ? 'active' : ''}`}
                onClick={() => setActiveLevel(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Список документации */}
      <section className="docs-section">
        <div className="container">
          <div className="docs-grid">
            {filteredDocs.map((doc, index) => (
              <div
                key={doc.id}
                className="doc-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="doc-card-header">
                  <div className="doc-level" style={{ 
                    background: doc.level === 'Начальный' ? 'rgba(2, 96, 232, 0.1)' : 
                               doc.level === 'Средний' ? 'rgba(2, 96, 232, 0.1)' : 
                               'rgba(31, 91, 255, 0.1)',
                    color: doc.level === 'Начальный' ? '#0260e8' : 
                           doc.level === 'Средний' ? '#0260e8' : '#1f5bff',
                    borderColor: doc.level === 'Начальный' ? 'rgba(2, 96, 232, 0.2)' : 
                                 doc.level === 'Средний' ? 'rgba(2, 96, 232, 0.2)' : 
                                 'rgba(31, 91, 255, 0.2)'
                  }}>
                    {doc.level}
                  </div>
                  <div className="doc-number">{doc.id.toString().padStart(2, '0')}</div>
                </div>
                
                <h3 className="doc-card-title">{doc.title}</h3>
                <p className="doc-card-desc">{doc.description}</p>
                
                <button 
                  className="doc-expand-btn"
                  onClick={() => setOpenDoc(openDoc === doc.id ? null : doc.id)}
                >
                  {openDoc === doc.id ? 'Свернуть' : 'Подробнее'}
                </button>
                
                {openDoc === doc.id && (
                  <div className="doc-sections">
                    <h4>Содержание:</h4>
                    <ul>
                      {doc.sections.map((section, idx) => (
                        <li key={idx}>{section}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="documentation-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Нужна помощь с интеграцией?</h2>
              <p className="cta-text">
                Наши инженеры готовы помочь с настройкой бота под ваши задачи. 
                Бесплатная консультация для всех клиентов.
              </p>
              
              <div className="cta-actions">
                <button className="cta-primary" onClick={() => window.location.href = '/order'}>
                  Заказать консультацию
                </button>
                <button className="cta-secondary" onClick={() => window.location.href = '/catalog'}>
                  Смотреть решения
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
