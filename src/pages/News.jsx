import { useState } from "react";
import "../pages/styles/NewsPage.css";

const newsItems = [
  {
    id: 1,
    title: "RobotService запускает новую AI-платформу для автоматизации",
    date: "20.12.2024",
    category: "Продукт",
    excerpt: "Мы рады представить нашу новую платформу, которая объединяет все решения в одном месте.",
    content: `
      <h3>Что нового?</h3>
      <p>Новая AI-платформа позволяет создавать, управлять и масштабировать Telegram-ботов без написания кода. Интуитивный интерфейс, готовые шаблоны и мощные AI-инструменты — всё, что нужно для автоматизации вашего бизнеса.</p>
      
      <h3>Ключевые возможности</h3>
      <ul>
        <li>Конструктор ботов drag-and-drop</li>
        <li>Встроенные AI-модели для обработки запросов</li>
        <li>Аналитика и отчёты в реальном времени</li>
        <li>Интеграция с 50+ сервисами</li>
        <li>Автоматическое масштабирование</li>
      </ul>
      
      <h3>Когда будет доступно?</h3>
      <p>Бета-версия откроется в январе 2025 года для всех пользователей каталога. Полное релиз-планируется на март 2025.</p>
    `,
    image: "launch"
  },
  {
    id: 2,
    title: "Партнёрство с крупными банками для интеграции ботов",
    date: "15.12.2024",
    category: "Партнёрство",
    excerpt: "Заключаем стратегические соглашения с ведущими финансовыми институтами.",
    content: `
      <h3>О партнёрстве</h3>
      <p>Мы начинаем сотрудничать с несколькими крупными банками для внедрения Telegram-ботов в их клиентский сервис. Это позволит автоматизировать до 80% рутинных запросов клиентов.</p>
      
      <h3>Что это значит для клиентов?</h3>
      <ul>
        <li>Мгновенные ответы на вопросы 24/7</li>
        <li>Оформление продуктов прямо в чате</li>
        <li>Персональные предложения на основе истории</li>
        <li>Безопасные транзакции через бота</li>
      </ul>
      
      <h3>Масштаб проекта</h3>
      <p>Ожидается, что интеграция охватит более 10 миллионов клиентов в течение первого года.</p>
    `,
    image: "partnership"
  },
  {
    id: 3,
    title: "Обновление AI-моделей: точность ответов выросла на 40%",
    date: "10.12.2024",
    category: "Технологии",
    excerpt: "Новые версии нейросетей обеспечивают более точные и релевантные ответы.",
    content: `
      <h3>Техническое обновление</h3>
      <p>Мы обновили все AI-модели, используемые в наших ботах. Точность ответов на запросы пользователей выросла на 40%, а время обработки сократилось вдвое.</p>
      
      <h3>Что улучшено?</h3>
      <ul>
        <li>Лучшее понимание контекста разговора</li>
        <li>Поддержка более 30 языков</li>
        <li>Обучение на данных конкретного бизнеса</li>
        <li>Уменьшение количества ошибок</li>
      </ul>
      
      <h3>Для кого это важно?</h3>
      <p>Обновление автоматически применяется ко всем существующим и новым ботам на нашей платформе.</p>
    `,
    image: "ai-update"
  },
  {
    id: 4,
    title: "Кейс: как магазин одежды увеличил продажи на 150%",
    date: "5.12.2024",
    category: "Кейсы",
    excerpt: "Разбираем историю успеха бренда одежды, внедрившего Telegram-магазин.",
    content: `
      <h3>О бренде</h3>
      <p>«StyleHub» — российский бренд одежды с онлайн-магазином и 15 розничными точками. До внедрения бота 60% заказов приходилось на кол-центр.</p>
      
      <h3>Что мы сделали?</h3>
      <ul>
        <li>Создали Telegram-магазин с каталогом 500+ товаров</li>
        <li>Интегрировали систему рекомендаций на основе AI</li>
        <li>Настроили автоматическую отправку трек-номеров</li>
        <li>Внедили программу лояльности прямо в боте</li>
      </ul>
      
      <h3>Результаты за 3 месяца</h3>
      <ul>
        <li>Рост продаж на 150%</li>
        <li>Сокращение нагрузки на кол-центр на 70%</li>
        <li>Средний чек вырос на 35% благодаря рекомендациям</li>
        <li>Конверсия из подписчика в покупателя — 12%</li>
      </ul>
    `,
    image: "case-study"
  },
  {
    id: 5,
    title: "Бесплатный вебинар: основы автоматизации для малого бизнеса",
    date: "1.12.2024",
    category: "Мероприятия",
    excerpt: "Приглашаем на бесплатный вебинар о том, как начать автоматизацию с нуля.",
    content: `
      <h3>О вебинаре</h3>
      <p>Приглашаем предпринимателей и руководителей на бесплатный вебинар, где мы разберём основы автоматизации бизнес-процессов с помощью Telegram-ботов.</p>
      
      <h3>Что узнаете?</h3>
      <ul>
        <li>Какие процессы можно автоматизировать</li>
        <li>Сколько можно сэкономить</li>
        <li>Как начать без технических знаний</li>
        <li>Реальные примеры из разных отраслей</li>
      </ul>
      
      <h3>Когда и как?</h3>
      <p>Вебинар состоится 10 декабря в 19:00 МСК. Регистрация открыта через наш Telegram-бот @RobotServiceBot.</p>
    `,
    image: "webinar"
  },
  {
    id: 6,
    title: "Безопасность данных: как мы защищаем информацию клиентов",
    date: "25.11.2024",
    category: "Безопасность",
    excerpt: "Подробный обзор наших мер по защите данных и соответствию стандартам.",
    content: `
      <h3>Приоритет безопасности</h3>
      <p>Мы понимаем, насколько важно доверие клиентов. Поэтому безопасность данных — один из наших главных приоритетов.</p>
      
      <h3>Наши меры защиты</h3>
      <ul>
        <li>Шифрование всех данных по стандарту AES-256</li>
        <li>Серверы расположены в России (152-ФЗ)</li>
        <li>Регулярные аудиты безопасности</li>
        <li>Двухфакторная аутентификация для админов</li>
        <li>Автоматическое резервное копирование</li>
      </ul>
      
      <h3>Сертификация</h3>
      <p>Мы соответствуем требованиям ФЗ-152 о персональных данных и готовимся к сертификации ISO 27001.</p>
    `,
    image: "security"
  }
];

const categories = ["Все", ...new Set(newsItems.map(n => n.category))];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selectedNews, setSelectedNews] = useState(null);

  const filteredNews = activeCategory === "Все"
    ? newsItems
    : newsItems.filter(n => n.category === activeCategory);

  return (
    <div className="news-page">
      {/* Фон */}
      <div className="minimal-background">
        <div className="grid-pattern"></div>
        <div className="accent-line"></div>
      </div>

      {/* Hero секция */}
      <section className="news-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-text">Новости</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Последние</span>
              <span className="title-line highlight">обновления</span>
            </h1>
            
            <p className="hero-subtitle">
              Следите за новостями RobotService: запуски продуктов, партнерства, 
              кейсы клиентов и технологические обновления.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">6</div>
                <div className="stat-label">Статей</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">6</div>
                <div className="stat-label">Категорий</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">20+</div>
                <div className="stat-label">Новостей в месяц</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="news-filters">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedNews(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Список новостей */}
      <section className="news-grid-section">
        <div className="container">
          {selectedNews ? (
            <article className="article-full">
              <button className="back-button" onClick={() => setSelectedNews(null)}>
                ← Назад к новостям
              </button>
              
              <div className="article-meta">
                <span className="article-category">{selectedNews.category}</span>
                <span className="article-date">{selectedNews.date}</span>
              </div>
              
              <h2 className="article-title">{selectedNews.title}</h2>
              
              <div className="article-content">
                {selectedNews.content}
              </div>
              
              <div className="article-cta">
                <p>Хотите узнать больше о наших решениях?</p>
                <button className="cta-button" onClick={() => window.location.href = '/catalog'}>
                  Смотреть каталог
                </button>
              </div>
            </article>
          ) : (
            <div className="news-grid">
              {filteredNews.map((news, index) => (
                <div
                  key={news.id}
                  className="news-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="news-card-header">
                    <div className="news-category">
                      {news.category}
                    </div>
                    <div className="news-number">{news.id.toString().padStart(2, '0')}</div>
                  </div>
                  
                  <h3 className="news-card-title">{news.title}</h3>
                  <p className="news-card-excerpt">{news.excerpt}</p>
                  
                  <div className="news-card-footer">
                    <span className="meta-date">{news.date}</span>
                    <button className="read-more-btn" onClick={() => setSelectedNews(news)}>
                      Читать →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA секция */}
      <section className="news-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Хотите стать героем нашей новости?</h2>
              <p className="cta-text">
                Расскажите о вашем опыте использования RobotService. 
                Мы поделимся вашей историей успеха с нашим сообществом.
              </p>
              
              <div className="cta-actions">
                <button className="cta-primary" onClick={() => window.location.href = '/contacts'}>
                  Связаться с нами
                </button>
                <button className="cta-secondary" onClick={() => window.location.href = '/cases'}>
                  Наши кейсы
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
