// Cases.jsx
import { useState } from "react";
import "../pages/styles/CasesPage.css";

export default function Cases() {
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");

  // Данные кейсов
  const cases = [
    {
      id: 1,
      title: "Криптотрейдинг-бот для хедж-фонда",
      category: "финансы",
      difficulty: "профессиональный",
      description: "Автоматизированная система арбитражной торговли на 8 криптобиржах с AI-стратегиями риск-менеджмента",
      results: [
        "Стабильная доходность 12-18% в месяц",
        "Обработка 1500+ сделок в сутки",
        "Снижение человеческого фактора на 95%",
        "Интеграция с 8 биржами (Binance, Bybit, OKX и др.)"
      ],
      technologies: ["Python", "CCXT", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      time: "45 дней",
      budget: "от 300 000 ₽",
      roi: "4 месяца",
      color: "#0066CC",
      files: [
        { name: "Техническое задание", format: "pdf", size: "2.4 MB" },
        { name: "Архитектура системы", format: "pdf", size: "1.8 MB" },
        { name: "Презентация кейса", format: "ppt", size: "5.2 MB" },
        { name: "Диаграммы процессов", format: "pdf", size: "3.1 MB" },
        { name: "Исходный код (пример)", format: "zip", size: "8.7 MB" }
      ]
    },
    {
      id: 2,
      title: "Автоматизированный e-commerce в Telegram",
      category: "ритейл",
      difficulty: "средний",
      description: "Полноценный магазин с CRM, складским учётом и аналитикой продаж внутри Telegram",
      results: [
        "Увеличение конверсии на 65%",
        "Сокращение времени обработки заказа до 2 минут",
        "Автоматизация 80% рутинных операций",
        "Интеграция с 1С и системами доставки"
      ],
      technologies: ["Node.js", "Telegraf", "PostgreSQL", "Redis", "WooCommerce API", "ЮКасса API"],
      time: "28 дней",
      budget: "от 180 000 ₽",
      roi: "2.5 месяца",
      color: "#0066CC",
      files: [
        { name: "ТЗ проекта", format: "pdf", size: "3.1 MB" },
        { name: "Дизайн интерфейса", format: "fig", size: "4.5 MB" },
        { name: "Презентация для клиента", format: "ppt", size: "6.8 MB" },
        { name: "Сценарии бота", format: "pdf", size: "2.2 MB" },
        { name: "Документация API", format: "pdf", size: "1.9 MB" }
      ]
    },
    {
      id: 3,
      title: "AI-ассистент для юридической компании",
      category: "услуги",
      difficulty: "продвинутый",
      description: "Интеллектуальный помощник на GPT-4 для обработки запросов, анализа документов и планирования встреч",
      results: [
        "Экономия 120+ часов в месяц на рутине",
        "Точность ответов на юридические вопросы: 92%",
        "Круглосуточная обработка клиентских запросов",
        "Интеграция с CRM и календарём"
      ],
      technologies: ["Python", "OpenAI API", "FastAPI", "PostgreSQL", "Google Calendar API", "LangChain"],
      time: "35 дней",
      budget: "от 240 000 ₽",
      roi: "3 месяца",
      color: "#0066CC",
      files: [
        { name: "Техническое задание", format: "pdf", size: "3.8 MB" },
        { name: "Архитектура AI-системы", format: "pdf", size: "2.9 MB" },
        { name: "Кейс-презентация", format: "ppt", size: "7.4 MB" },
        { name: "Примеры диалогов", format: "pdf", size: "1.5 MB" },
        { name: "Отчёт по эффективности", format: "xlsx", size: "2.3 MB" }
      ]
    }
  ];

  // Фильтрация кейсов
  const filteredCases = cases.filter(caseItem => {
    if (activeFilter === "all") return true;
    return caseItem.category === activeFilter;
  });

  return (
    <div className="cases-page">
      {/* Hero секция */}
      <section className="cases-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>Реализованные проекты</span>
            </div>
            <h1 className="hero-title">Наши кейсы</h1>
            <p className="hero-subtitle">
              От трейдинга до e-commerce — показываем реальные результаты 
              автоматизации бизнес-процессов через Telegram
            </p>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="cases-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">37+</div>
              <div className="stat-label">Завершённых проектов</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">94%</div>
              <div className="stat-label">Довольных клиентов</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3.2</div>
              <div className="stat-label">Средний ROI (месяца)</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">28</div>
              <div className="stat-label">Средний срок разработки (дней)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="cases-filters">
        <div className="container">
          <div className="filters-container">
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                Все кейсы
              </button>
              <button 
                className={`filter-tab ${activeFilter === "финансы" ? "active" : ""}`}
                onClick={() => setActiveFilter("финансы")}
              >
                Финансы
              </button>
              <button 
                className={`filter-tab ${activeFilter === "ритейл" ? "active" : ""}`}
                onClick={() => setActiveFilter("ритейл")}
              >
                Розница
              </button>
              <button 
                className={`filter-tab ${activeFilter === "услуги" ? "active" : ""}`}
                onClick={() => setActiveFilter("услуги")}
              >
                Услуги
              </button>
            </div>

            <div className="format-filters">
              <div className="format-label">Форматы материалов:</div>
              <div className="format-buttons">
                <button 
                  className={`format-btn ${selectedFormat === "all" ? "active" : ""}`}
                  onClick={() => setSelectedFormat("all")}
                >
                  Все
                </button>
                <button 
                  className={`format-btn ${selectedFormat === "pdf" ? "active" : ""}`}
                  onClick={() => setSelectedFormat("pdf")}
                >
                  PDF
                </button>
                <button 
                  className={`format-btn ${selectedFormat === "ppt" ? "active" : ""}`}
                  onClick={() => setSelectedFormat("ppt")}
                >
                  Презентации
                </button>
                <button 
                  className={`format-btn ${selectedFormat === "zip" ? "active" : ""}`}
                  onClick={() => setSelectedFormat("zip")}
                >
                  Архивы
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Список кейсов */}
      <section className="cases-list">
        <div className="container">
          {filteredCases.map((caseItem, index) => (
            <div 
              key={caseItem.id} 
              className="case-card"
              style={{ '--card-color': caseItem.color }}
            >
              {/* Заголовок и метаинформация */}
              <div className="case-header">
                <div className="case-meta">
                  <span className="case-category">{caseItem.category}</span>
                  <span className="case-difficulty">{caseItem.difficulty}</span>
                  <span className="case-time">{caseItem.time}</span>
                </div>
                <h2 className="case-title">{caseItem.title}</h2>
                <p className="case-description">{caseItem.description}</p>
              </div>

              <div className="case-content">
                {/* Результаты */}
                <div className="case-results">
                  <h3 className="section-title">Достигнутые результаты</h3>
                  <div className="results-list">
                    {caseItem.results.map((result, idx) => (
                      <div key={idx} className="result-item">
                        <div className="result-icon">✓</div>
                        <div className="result-text">{result}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Технологии и детали */}
                <div className="case-details">
                  <div className="tech-stack">
                    <h3 className="section-title">Технологический стек</h3>
                    <div className="tech-tags">
                      {caseItem.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="financial-info">
                    <div className="info-item">
                      <div className="info-label">Бюджет проекта</div>
                      <div className="info-value">{caseItem.budget}</div>
                    </div>
                    <div className="info-item">
                      <div className="info-label">Окупаемость (ROI)</div>
                      <div className="info-value">{caseItem.roi}</div>
                    </div>
                  </div>
                </div>

                {/* Материалы для скачивания */}
                <div className="case-materials">
                  <h3 className="section-title">Материалы по проекту</h3>
                  <p className="materials-subtitle">Скачайте полное ТЗ, презентацию и другие материалы</p>
                  
                  <div className="materials-grid">
                    {caseItem.files
                      .filter(file => selectedFormat === "all" || file.format === selectedFormat)
                      .map((file, idx) => (
                        <a 
                          key={idx} 
                          href="#" 
                          className="material-card"
                          onClick={(e) => e.preventDefault()} // Заглушка для демо
                        >
                          <div className="material-icon">
                            {file.format === "pdf" && "📄"}
                            {file.format === "ppt" && "📊"}
                            {file.format === "zip" && "📦"}
                            {file.format === "fig" && "🎨"}
                            {file.format === "xlsx" && "📊"}
                          </div>
                          <div className="material-content">
                            <div className="material-name">{file.name}</div>
                            <div className="material-info">
                              <span className="material-format">{file.format.toUpperCase()}</span>
                              <span className="material-size">{file.size}</span>
                            </div>
                          </div>
                          <div className="download-btn">
                            <span>⬇</span>
                          </div>
                        </a>
                      ))
                    }
                  </div>

                  <div className="download-all">
                    <button className="download-all-btn">
                      Скачать все материалы (ZIP архив)
                    </button>
                    <div className="total-size">Всего: ~24 MB</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA секция */}
      <section className="cases-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Хотите аналогичный проект?</h2>
              <p className="cta-text">
                Расскажите о вашей задаче, и мы разработаем индивидуальное решение 
                с гарантированным результатом
              </p>
              <div className="cta-bullets">
                <div className="bullet-item">Бесплатный аудит ваших процессов</div>
                <div className="bullet-item">Предварительный расчёт ROI</div>
                <div className="bullet-item">Прототип за 3 дня</div>
              </div>
              <div className="cta-actions">
                <button className="cta-primary" onClick={() => navigate('/order')}>Обсудить проект</button>
                <button className="cta-secondary" onClick={() => navigate('/order')}>Получить консультацию</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}