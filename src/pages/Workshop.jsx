import { useState, useEffect } from "react";
import "../pages/styles/WorkshopPage.css";

const articles = [
  {
    id: 1,
    title: "Как Telegram-боты экономят компании 200+ часов в месяц",
    excerpt: "Разбираем реальные кейсы автоматизации бизнес-процессов с помощью Telegram-ботов. Пошаговый разбор экономии ресурсов.",
    content: `
      <h3>Почему именно Telegram?</h3>
      <p>Telegram — это не просто мессенджер. Это платформа с более чем 700 миллионами активных пользователей, которая предоставляет мощные API для создания ботов. В отличие от мобильных приложений, бот не требует установки и занимает минимум ресурсов устройства.</p>
      
      <h3>Кейс 1: Автоматизация отдела продаж</h3>
      <p>Компания «ТехноСтрой» внедрила CRM-бота для обработки входящих заявок. Результат:</p>
      <ul>
        <li>Время обработки заявки сократилось с 15 минут до 30 секунд</li>
        <li>Менеджеры освободились от рутины и увеличили количество звонков на 40%</li>
        <li>Конверсия из заявки в сделку выросла на 25%</li>
      </ul>
      
      <h3>Кейс 2: Автоматизация поддержки клиентов</h3>
      <p>Сеть клиник «Здоровье Плюс» внедрила бота для записи на приём и ответов на частые вопросы. Экономия:</p>
      <ul>
        <li>3 администратора могут обслуживать в 3 раза больше пациентов</li>
        <li>Время ожидания ответа сократилось с 5 минут до мгновенного</li>
        <li>Количество ошибок при записи снизилось на 90%</li>
      </ul>
      
      <h3>Расчёт окупаемости</h3>
      <p>Средний бот окупается за 2-4 месяца. При этом он работает 24/7 без перерывов, выходных и больничных.</p>
    `,
    category: "Автоматизация",
    date: "15.12.2024",
    readTime: "8 мин",
    image: "automation"
  },
  {
    id: 2,
    title: "AI-стратегии для трейдинга: как машинное обучение меняет рынок",
    excerpt: "Обзор современных AI-подходов к автоматизированной торговле. Как работают алгоритмы и какова их реальная эффективность.",
    content: `
      <h3>Что такое AI-трейдинг?</h3>
      <p>AI-трейдинг использует машинное обучение и нейронные сети для анализа рынка и принятия решений. В отличие от традиционных индикаторов, AI может выявлять сложные паттерны и адаптироваться к изменяющимся условиям в реальном времени.</p>
      
      <h3>Ключевые преимущества</h3>
      <ul>
        <li>Обработка тысяч сигналов одновременно</li>
        <li>Отсутствие эмоциональной составляющей</li>
        <li>Скорость реакции в миллисекунды</li>
        <li>Непрерывное обучение на новых данных</li>
      </ul>
      
      <h3>Реальные результаты</h3>
      <p>Наши клиенты показывают среднюю доходность 8-15% в месяц при правильно настроенных системах риск-менеджмента. Важно: AI не гарантирует прибыль, но значительно повышает вероятность успешных сделок.</p>
      
      <h3>Риск-менеджмент</h3>
      <p>Любая AI-система должна включать строгие правила управления рисками: лимиты на сделку, максимальную просадку, диверсификацию портфеля.</p>
    `,
    category: "AI и трейдинг",
    date: "10.12.2024",
    readTime: "12 мин",
    image: "trading"
  },
  {
    id: 3,
    title: "Полное руководство по внедрению Telegram-магазина",
    excerpt: "Пошаговая инструкция по созданию интернет-магазина прямо в Telegram. Что нужно знать перед запуском и на что обратить внимание.",
    content: `
      <h3>Зачем магазин в Telegram?</h3>
      <p>Telegram-магазин — это полноценная торговая площадка без необходимости создания отдельного сайта. Пользователи могут просматривать каталог, добавлять товары в корзину и оплачивать заказ, не покидая мессенджер.</p>
      
      <h3>Этапы внедрения</h3>
      <ol>
        <li><strong>Аудит</strong> — анализ текущих процессов и товаров</li>
        <li><strong>Проектирование</strong> — создание структуры каталога и логики работы</li>
        <li><strong>Интеграция</strong> — подключение платёжных систем и складского учёта</li>
        <li><strong>Тестирование</strong> — проверка всех сценариев покупки</li>
        <li><strong>Запуск</strong> — публикация бота и маркетинг</li>
      </ol>
      
      <h3>Интеграции</h3>
      <p>Бот может интегрироваться с популярными CMS (WooCommerce, 1C-Битрикс), платёжными системами (ЮKassa, CloudPayments) и службами доставки (СДЭК, Boxberry).</p>
      
      <h3>Результаты клиентов</h3>
      <p>Средний рост продаж после внедрения Telegram-магазина — 65%. Время обработки заказа сокращается с 30 минут до 2 минут.</p>
    `,
    category: "E-commerce",
    date: "5.12.2024",
    readTime: "10 мин",
    image: "ecommerce"
  },
  {
    id: 4,
    title: "Автоматизация логистики: оптимизация маршрутов с помощью ИИ",
    excerpt: "Как искусственный интеллект помогает оптимизировать логистические цепочки и сократить расходы на 25%.",
    content: `
      <h3>Проблемы традиционной логистики</h3>
      <p>Ручное планирование маршрутов, ошибки в отгрузках, неоптимальное использование транспорта — всё это приводит к потере времени и денег. По статистике, до 30% транспортных расходов можно оптимизировать.</p>
      
      <h3>Решение на основе ИИ</h3>
      <p>Алгоритмы машинного обучения анализируют множество факторов: пробки, погоду, доступность разгрузки, приоритет доставки. Результат — оптимальные маршруты в реальном времени.</p>
      
      <h3>Ключевые возможности</h3>
      <ul>
        <li>Динамическая маршрутизация с учётом пробок</li>
        <li>Прогнозирование сроков доставки с точностью 95%</li>
        <li>Автоматическое уведомление клиентов об изменении статуса</li>
        <li>Оптимизация загрузки транспорта до 90%</li>
      </ul>
      
      <h3>Кейс: логистическая компания</h3>
      <p>Внедрение системы управления запасами и маршрутизации сократило логистические расходы на 18% и увеличило количество доставок в день на 25%.</p>
    `,
    category: "Логистика",
    date: "28.11.2024",
    readTime: "9 мин",
    image: "logistics"
  },
  {
    id: 5,
    title: "Как создать корпоративного ассистента для компании",
    excerpt: "Пошаговое руководство по разработке внутреннего бота для сотрудников: от заявки до обучения персонала.",
    content: `
      <h3>Зачем корпоративный бот?</h3>
      <p>Внутренний Telegram-бот объединяет все корпоративные процессы в одном месте: от заявок на отпуск до базы знаний и уведомлений.</p>
      
      <h3>Основные функции</h3>
      <ul>
        <li><strong>HR-раздел:</strong> заявки на отпуск, больничный, справок</li>
        <li><strong>IT-поддержка:</strong> создание тикетов и отслеживание статуса</li>
        <li><strong>База знаний:</strong> поиск по документам и инструкциям</li>
        <li><strong>Уведомления:</strong> рассылка новостей и объявлений</li>
        <li><strong>Опросы:</strong> сбор обратной связи от сотрудников</li>
      </ul>
      
      <h3>Преимущества внедрения</h3>
      <p>Средняя экономия времени HR-отдела — 15 часов в неделю. Время получения ответа на вопрос сотрудника сокращается с нескольких часов до мгновенного.</p>
      
      <h3>Безопасность</h3>
      <p>Все данные хранятся на защищённых серверах компании. Доступ к боту только для авторизованных сотрудников через корпоративный вход.</p>
    `,
    category: "HR и корпоративные решения",
    date: "20.11.2024",
    readTime: "7 мин",
    image: "corporate"
  },
  {
    id: 6,
    title: "Аналитика данных в Telegram: дашборды и отчёты в реальном времени",
    excerpt: "Как настроить систему сбора и визуализации данных прямо в Telegram. Примеры дашбордов и автоматических отчётов.",
    content: `
      <h3>Почему Telegram для аналитики?</h3>
      <p>Многие руководители проверяют метрики прямо в мессенджере. Telegram-бот позволяет получать дашборды, отчёты и алерты без необходимости заходить в сложные системы.</p>
      
      <h3>Возможности</h3>
      <ul>
        <li>Автоматические ежедневные отчёты в 9:00</li>
        <li>Интерактивные дашборды с графиками</li>
        <li>Алерты при достижении/превышении KPI</li>
        <li>Запрос любой метрики по команде</li>
      </ul>
      
      <h3>Интеграции</h3>
      <p>Бот может подключаться к Google Analytics, CRM-системам, рекламным кабинетам и любым API с данными.</p>
      
      <h3>Примеры метрик</h3>
      <p>Продажи за день, количество новых лидов, конверсия воронки, расход рекламного бюджета, NPS клиентов — всё это приходит в Telegram автоматически.</p>
    `,
    category: "Аналитика",
    date: "15.11.2024",
    readTime: "6 мин",
    image: "analytics"
  }
];

const categories = ["Все", ...new Set(articles.map(a => a.category))];

export default function Workshop() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = activeCategory === "Все"
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="workshop-page">
      {/* Фон */}
      <div className="minimal-background">
        <div className="grid-pattern"></div>
        <div className="accent-line"></div>
      </div>

      {/* Hero секция */}
      <section className="workshop-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-text">Полезная информация</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">База знаний</span>
              <span className="title-line highlight">RobotService</span>
            </h1>
            
            <p className="hero-subtitle">
              Статьи, кейсы и руководства по автоматизации бизнес-процессов, 
              AI-трейдингу, e-commerce и другим направлениям.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">6</div>
                <div className="stat-label">Статей</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">5</div>
                <div className="stat-label">Категорий</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">52+</div>
                <div className="stat-label">Минут чтения</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="workshop-filters">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedArticle(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Список статей */}
      <section className="workshop-grid-section">
        <div className="container">
          {selectedArticle ? (
            <article className="article-full">
              <button className="back-button" onClick={() => setSelectedArticle(null)}>
                ← Назад к списку
              </button>
              
              <div className="article-meta">
                <span className="article-category">{selectedArticle.category}</span>
                <span className="article-date">{selectedArticle.date}</span>
                <span className="article-readtime">{selectedArticle.readTime} чтения</span>
              </div>
              
              <h2 className="article-title">{selectedArticle.title}</h2>
              
              <div className="article-content">
                {selectedArticle.content}
              </div>
              
              <div className="article-cta">
                <p>Хотите реализовать похожее решение для вашего бизнеса?</p>
                <button className="cta-button" onClick={() => window.location.href = '/order'}>
                  Обсудить проект
                </button>
              </div>
            </article>
          ) : (
            <div className="articles-grid">
              {filteredArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="article-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="article-card-header">
                    <div className="article-category" style={{ background: 'rgba(2, 96, 232, 0.1)', color: 'var(--blue)', borderColor: 'rgba(2, 96, 232, 0.2)' }}>
                      {article.category}
                    </div>
                    <div className="article-number">{article.id.toString().padStart(2, '0')}</div>
                  </div>
                  
                  <h3 className="article-card-title">{article.title}</h3>
                  <p className="article-card-excerpt">{article.excerpt}</p>
                  
                  <div className="article-card-footer">
                    <div className="article-meta-mini">
                      <span className="meta-date">{article.date}</span>
                      <span className="meta-readtime">{article.readTime}</span>
                    </div>
                    <button className="read-more-btn" onClick={() => setSelectedArticle(article)}>
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
      <section className="workshop-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Нужна помощь с автоматизацией?</h2>
              <p className="cta-text">
                Наши специалисты проведут бесплатный аудит вашего бизнеса 
                и предложат оптимальное решение для автоматизации.
              </p>
              
              <div className="cta-offer">
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Бесплатная консультация</div>
                </div>
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Расчёт сроков и бюджета</div>
                </div>
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Прототип за 3 дня</div>
                </div>
              </div>
              
              <div className="cta-actions">
                <button className="cta-primary" onClick={() => window.location.href = '/order'}>
                  Получить консультацию
                </button>
                <button className="cta-secondary" onClick={() => window.location.href = '/catalog'}>
                  Смотреть каталог
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
