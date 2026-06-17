import { useState } from "react";
import "../pages/styles/SupportClientPage.css";

const faqs = [
  {
    id: 1,
    question: "Сколько времени занимает разработка бота?",
    answer: "Сроки зависят от сложности проекта. Простой бот с базовыми функциями разрабатывается за 7-14 дней. Более сложные системы с AI, интеграциями и аналитикой — от 3 до 6 недель. Точные сроки определяются после обсуждения технического задания.",
    category: "Разработка"
  },
  {
    id: 2,
    question: "Какой бюджет нужен для создания бота?",
    answer: "Стоимость зависит от функциональности. Простой бот — от 30 000 ₽. CRM-бот — от 70 000 ₽. AI-ассистент — от 95 000 ₽. Торговый терминал — от 120 000 ₽. Мы предлагаем гибкие условия оплаты и рассрочку для долгосрочных проектов.",
    category: "Цена"
  },
  {
    id: 3,
    question: "Нужны ли технические знания для управления ботом?",
    answer: "Нет. Мы создаём интуитивно понятные панели управления, с которыми сможет работать любой сотрудник. Кроме того, мы предоставляем полное обучение и документацию по использованию бота.",
    category: "Использование"
  },
  {
    id: 4,
    question: "Можно ли интегрировать бота с моей CRM?",
    answer: "Да, наши боты легко интегрируются с популярными CRM-системами (1C-Битрикс, AmoCRM, Salesforce) и любыми другими сервисами через API. Мы также можем разработать кастомную интеграцию под вашу систему.",
    category: "Интеграции"
  },
  {
    id: 5,
    question: "Как обеспечивается безопасность данных?",
    answer: "Мы используем шифрование AES-256, серверы в России (соответствие 152-ФЗ), регулярные аудиты безопасности и двухфакторную аутентификацию. Все данные клиентов хранятся на защищённых серверах с автоматическим резервным копированием.",
    category: "Безопасность"
  },
  {
    id: 6,
    question: "Предоставляете ли вы поддержку после запуска?",
    answer: "Да, мы предоставляем техническую поддержку 24/7. В базовый тариф входит мониторинг и исправление ошибок. Расширенная поддержка включает оптимизацию, доработку функций и консультации по развитию бота.",
    category: "Поддержка"
  },
  {
    id: 7,
    question: "Можно ли доработать бота после запуска?",
    answer: "Конечно. Мы предлагаем гибкую систему доработок. Вы можете добавлять новые функции, менять логику работы, интегрировать новые сервисы. Мы работаем с клиентами долгосрочно и развиваем ваших ботов по мере роста бизнеса.",
    category: "Разработка"
  },
  {
    id: 8,
    question: "Как происходит оплата?",
    answer: "Мы работаем по договору. Возможна пооперационная оплата: 50% предоплата, 50% после сдачи проекта. Для крупных проектов предлагаем рассрочку. Принимаем оплату от юридических и физических лиц, выставляем все необходимые документы.",
    category: "Цена"
  },
  {
    id: 9,
    question: "Работаете ли вы с клиентами из других стран?",
    answer: "Да, мы работаем с клиентами по всему миру. Наши боты поддерживают множество языков, включая русский, английский, китайский и другие. Мы учитываем локальные особенности и требования к数据处理 в разных странах.",
    category: "География"
  },
  {
    id: 10,
    question: "Что если бот не заработает как预期?",
    answer: "Мы гарантируем соответствие бота техническому заданию. Если в процессе разработки возникнут проблемы, мы оперативно их решим за свой счёт. Кроме того, мы предоставляем тестовый период, в течение который можете протестировать бота и внести корректировки.",
    category: "Гарантии"
  }
];

const categories = ["Все", ...new Set(faqs.map(f => f.category))];

export default function SupportClient() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredFaqs = activeCategory === "Все"
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="support-client-page">
      {/* Фон */}
      <div className="minimal-background">
        <div className="grid-pattern"></div>
        <div className="accent-line"></div>
      </div>

      {/* Hero секция */}
      <section className="support-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-text">FAQ</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Частые</span>
              <span className="title-line highlight">вопросы</span>
            </h1>
            
            <p className="hero-subtitle">
              Ответы на самые популярные вопросы о наших услугах, ценах, сроках и поддержке.
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="support-filters">
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

      {/* Список вопросов */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-list">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`faq-item ${openQuestion === faq.id ? 'open' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button 
                  className="faq-question"
                  onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                >
                  <span className="faq-number">{faq.id.toString().padStart(2, '0')}</span>
                  <span className="faq-text">{faq.question}</span>
                  <span className={`faq-icon ${openQuestion === faq.id ? 'open' : ''}`}>+</span>
                </button>
                
                {openQuestion === faq.id && (
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      <span className="faq-answer-category">{faq.category}</span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="support-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Не нашли ответ на свой вопрос?</h2>
              <p className="cta-text">
                Свяжитесь с нами любым удобным способом. Мы ответим в течение 2 часов 
                в рабочее время.
              </p>
              
              <div className="support-channels">
                <div className="channel-item">
                  <div className="channel-icon">💬</div>
                  <div className="channel-info">
                    <h4>Telegram</h4>
                    <p>@RobotServiceBot</p>
                  </div>
                </div>
                <div className="channel-item">
                  <div className="channel-icon">📧</div>
                  <div className="channel-info">
                    <h4>Email</h4>
                    <p>info@robotservice.ru</p>
                  </div>
                </div>
                <div className="channel-item">
                  <div className="channel-icon">📞</div>
                  <div className="channel-info">
                    <h4>Телефон</h4>
                    <p>+7 (999) 123-45-67</p>
                  </div>
                </div>
              </div>
              
              <div className="cta-actions">
                <button className="cta-primary" onClick={() => window.location.href = '/contacts'}>
                  Связаться с нами
                </button>
                <button className="cta-secondary" onClick={() => window.location.href = '/order'}>
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
