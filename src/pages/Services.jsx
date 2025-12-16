import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import "../pages/styles/ServicesPage.css";

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeTab, setActiveTab] = useState("trading");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);
  const navigate = useNavigate();
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    company: '',
    name: '',
    position: '',
    phone: '',
    email: '',
    process: '',
    budget: 'Не определен',
  });

  const BOT_TOKEN = "8544607115:AAFrA1GapB8tgluo8V5R3yFlajN6yPicqG4";
  const CHAT_ID = "-5023413115";

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToTelegram = async (message) => {
  setLoading(true);

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      throw new Error('Telegram API error');
    }

    alert('Заявка успешно отправлена');
    closeModal();
  } catch (error) {
    console.error(error);
    alert('Ошибка при отправке. Попробуйте позже.');
  } finally {
    setLoading(false);
  }
};

  const handleFormSubmit = async (e) => {
  e.preventDefault();

  if (!agreePrivacy || !agreeTerms) return;

  const message = `
📩 *НОВАЯ ЗАЯВКА С САЙТА*

🏢 *Компания:* ${formData.company}
👤 *Контактное лицо:* ${formData.name}
💼 *Должность:* ${formData.position}
📞 *Телефон:* ${formData.phone}
✉️ *Email:* ${formData.email}
⚙️ *Процесс:* ${formData.process}
💰 *Бюджет:* ${formData.budget}

🕒 *Дата:* ${new Date().toLocaleString('ru-RU')}
`;

  await sendToTelegram(message);
};


  const caseStudies = {
    trading: {
      id: 1,
      title: "Торговый терминал",
      category: "Финансовые технологии",
      tagline: "Автоматизированные стратегии криптотрейдинга",
      description: "Полноценный торговый терминал с AI-стратегиями, риск-менеджментом и подключением к 20+ биржам",
      problem: "Ручной трейдинг требует постоянного мониторинга, подвержен эмоциям и упускает рыночные возможности",
      solution: "Автоматическая торговля 24/7 по алгоритмическим стратегиям с машинным обучением",
      results: [
        "Средняя месячная доходность: 8-15%",
        "Обработка 1000+ сделок в день",
        "Снижение человеческого фактора на 95%"
      ],
      features: [
        {
          title: "Мультибиржевой арбитраж",
          description: "Автоматический поиск и исполнение арбитражных сделок между биржами"
        },
        {
          title: "AI-стратегии",
          description: "Адаптивные алгоритмы на основе машинного обучения и анализа паттернов"
        },
        {
          title: "Риск-менеджмент",
          description: "Автоматическое ограничение убытков, диверсификация портфеля"
        },
        {
          title: "Backtesting",
          description: "Тестирование стратегий на исторических данных с визуализацией"
        },
        {
          title: "Мониторинг",
          description: "Панель управления с реальной аналитикой и уведомлениями"
        },
        {
          title: "API интеграции",
          description: "Подключение к Binance, Bybit, OKX, KuCoin и другим площадкам"
        }
      ],
      technologies: ["Python", "CCXT", "FastAPI", "PostgreSQL", "Redis", "Docker", "TensorFlow"],
      implementation: "14-21 день",
      investment: "от 120 000 ₽",
      roi: "3-6 месяцев",
      color: "#0066CC",
      gradient: "linear-gradient(135deg, #0066CC 0%, #004D99 100%)"
    },
    ecommerce: {
      id: 2,
      title: "Автоматизированный магазин",
      category: "Электронная коммерция",
      tagline: "Полный цикл продаж в мессенджерах",
      description: "CRM-система с автоматической обработкой заказов, инвентаризацией и аналитикой",
      problem: "Ручная обработка заказов, ошибки в остатках, потеря клиентов из-за медленного ответа",
      solution: "Единая система управления заказами, клиентами и складом через Telegram-интерфейс",
      results: [
        "Сокращение времени обработки заказа с 30 до 2 минут",
        "Автоматическое обновление остатков",
        "Персональные предложения на основе истории покупок",
        "Снижение нагрузки на менеджеров на 70%"
      ],
      features: [
        {
          title: "Каталог товаров",
          description: "Автоматическая синхронизация с CMS и маркетплейсами"
        },
        {
          title: "Корзина и оформление",
          description: "Мгновенное создание заказа с выбором доставки и оплаты"
        },
        {
          title: "Интеграция со складом",
          description: "Автоматический учет остатков и резервирование товара"
        },
        {
          title: "Платежные системы",
          description: "Поддержка 10+ способов оплаты с автоматическими чеками"
        },
        {
          title: "Лояльность",
          description: "Программа бонусов, скидки и промокоды"
        },
        {
          title: "Аналитика продаж",
          description: "Дашборд с конверсией, средним чеком и LTV"
        }
      ],
      technologies: ["Node.js", "PostgreSQL", "Redis", "WooCommerce API", "ЮКасса API", "CDEK API"],
      implementation: "10-18 дней",
      investment: "от 85 000 ₽",
      roi: "2-4 месяца",
      color: "#00A86B",
      gradient: "linear-gradient(135deg, #00A86B 0%, #008F5A 100%)"
    },
    assistant: {
      id: 3,
      title: "Бизнес-ассистент",
      category: "Автоматизация процессов",
      tagline: "Умный помощник для рутинных операций",
      description: "AI-ассистент для автоматизации административных задач и коммуникации",
      problem: "Ручная обработка запросов клиентов, планирование встреч, сбор данных отнимают 40% рабочего времени",
      solution: "Интеллектуальный помощник, обрабатывающий запросы и выполняющий задачи автономно",
      results: [
        "Экономия 25+ часов в неделю на рутине",
        "Круглосуточная обработка запросов",
        "Интеграция с календарем и CRM",
        "Автоматизация отчетности"
      ],
      features: [
        {
          title: "Обработка запросов",
          description: "Понимание естественного языка и контекстный ответ"
        },
        {
          title: "Планирование встреч",
          description: "Автоматическое согласование времени и напоминания"
        },
        {
          title: "Сбор и анализ данных",
          description: "Парсинг информации из различных источников"
        },
        {
          title: "Интеграция с CRM",
          description: "Автоматическое создание лидов и обновление карточек"
        },
        {
          title: "Мультиязычность",
          description: "Поддержка русского, английского и других языков"
        },
        {
          title: "Голосовые команды",
          description: "Управление через голосовые сообщения"
        }
      ],
      technologies: ["Python", "OpenAI API", "Google Dialogflow", "PostgreSQL", "Redis", "REST API"],
      implementation: "12-20 дней",
      investment: "от 95 000 ₽",
      roi: "1-3 месяца",
      color: "#9C27B0",
      gradient: "linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)"
    },
    analytics: {
      id: 4,
      title: "Аналитическая платформа",
      category: "Бизнес-аналитика",
      tagline: "Мониторинг и прогнозирование в реальном времени",
      description: "Система сбора, анализа и визуализации данных с прогнозными моделями",
      problem: "Разрозненные данные, ручное формирование отчетов, отсутствие предиктивной аналитики",
      solution: "Централизованная платформа с автоматическими отчетами и AI-прогнозами",
      results: [
        "Сокращение времени на отчеты с 8 до 0.5 часов в день",
        "Прогнозирование трендов с точностью 85%+",
        "Выявление скрытых закономерностей",
        "Автоматические алерты об аномалиях"
      ],
      features: [
        {
          title: "Дашборды",
          description: "Настраиваемые панели с ключевыми метриками"
        },
        {
          title: "Прогнозные модели",
          description: "Предсказание спроса, продаж и поведения клиентов"
        },
        {
          title: "Интеграция данных",
          description: "Объединение данных из 30+ источников"
        },
        {
          title: "Автоотчеты",
          description: "Ежедневные/еженедельные отчеты по расписанию"
        },
        {
          title: "Визуализация",
          description: "Интерактивные графики и диаграммы"
        },
        {
          title: "Мобильная аналитика",
          description: "Доступ к данным через Telegram"
        }
      ],
      technologies: ["Python", "Apache Kafka", "TensorFlow", "Grafana", "ClickHouse", "D3.js"],
      implementation: "18-30 дней",
      investment: "от 150 000 ₽",
      roi: "4-8 месяцев",
      color: "#FF6B35",
      gradient: "linear-gradient(135deg, #FF6B35 0%, #E85A2D 100%)"
    },
    logistics: {
      id: 5,
      title: "Логистический контроллер",
      category: "Склад и доставка",
      tagline: "Оптимизация цепочек поставок",
      description: "Система управления запасами, маршрутизации и отслеживания доставки",
      problem: "Ручное планирование маршрутов, ошибки в отгрузках, неоптимальное использование транспорта",
      solution: "Автоматическое планирование логистики с учетом множества факторов и ограничений",
      results: [
        "Сокращение логистических расходов на 15-25%",
        "Оптимизация загрузки транспорта на 30%",
        "Сокращение времени доставки на 20%",
        "Автоматическое отслеживание всех отправлений"
      ],
      features: [
        {
          title: "Маршрутизация",
          description: "Оптимальные маршруты с учетом пробок и времени"
        },
        {
          title: "Управление запасами",
          description: "Прогнозирование пополнения и автоматические заказы"
        },
        {
          title: "Трекинг",
          description: "Отслеживание местоположения в реальном времени"
        },
        {
          title: "Документооборот",
          description: "Автоматическое формирование накладных и актов"
        },
        {
          title: "Интеграция с ТК",
          description: "Подключение к СДЭК, Boxberry, Почте России"
        },
        {
          title: "Аналитика расходов",
          description: "Детализация затрат по направлениям и перевозчикам"
        }
      ],
      technologies: ["Java", "PostgreSQL/PostGIS", "Redis", "RabbitMQ", "Leaflet.js", "OR-Tools"],
      implementation: "20-35 дней",
      investment: "от 180 000 ₽",
      roi: "5-9 месяцев",
      color: "#2D936C",
      gradient: "linear-gradient(135deg, #2D936C 0%, #1E6B4E 100%)"
    }
  };

  const metrics = [
    { value: "150+", label: "Проектов автоматизации", description: "Успешно внедренных решений" },
    { value: "40%", label: "Средняя экономия", description: "Сокращение операционных затрат" },
    { value: "98%", label: "Надежность систем", description: "Uptime работающих решений" },
    { value: "3.2", label: "Средний ROI", description: "Окупаемость в месяцах" }
  ];

  const implementationSteps = [
    { phase: "Диагностика", tasks: ["Аудит процессов", "Выявление узких мест", "Постановка целей"] },
    { phase: "Проектирование", tasks: ["Разработка архитектуры", "Прототипирование", "Утверждение ТЗ"] },
    { phase: "Разработка", tasks: ["Написание кода", "Интеграция систем", "Внутреннее тестирование"] },
    { phase: "Внедрение", tasks: ["Пилотная эксплуатация", "Обучение персонала", "Настройка процессов"] },
    { phase: "Поддержка", tasks: ["Мониторинг работы", "Оптимизация", "Масштабирование"] }
  ];

  const testimonials = [
    {
      company: "Крипто-хедж-фонд",
      person: "Александр В., управляющий директор",
      text: "Торговый терминал сократил операционные расходы на 40% и увеличил доходность портфеля. Система работает стабильно даже при высокой волатильности.",
      result: "+12% к прибыли"
    },
    {
      company: "Сеть розничных магазинов",
      person: "Марина К., операционный директор",
      text: "Автоматизированный магазин в Telegram увеличил онлайн-продажи на 65% и сократил нагрузку на кол-центр. Клиенты ценят скорость оформления заказа.",
      result: "+65% продаж"
    },
    {
      company: "Логистическая компания",
      person: "Дмитрий П., директор по развитию",
      text: "Логистический контроллер оптимизировал маршруты и сократил расходы на топливо на 18%. Теперь управляем 200+ машинами через одного бота.",
      result: "-18% расходов"
    }
  ];

  const processSteps = [
    { number: "01", title: "Анализ", desc: "Изучаем бизнес-процессы и ставим цели" },
    { number: "02", title: "Дизайн", desc: "Проектируем интерфейс и сценарии бота" },
    { number: "03", title: "Разработка", desc: "Пишем код и интегрируем системы" },
    { number: "04", title: "Тестирование", desc: "Проверяем работу в реальных условиях" },
    { number: "05", title: "Запуск", desc: "Разворачиваем бота и обучаем команду" },
    { number: "06", title: "Поддержка", desc: "Мониторим и улучшаем систему" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el, index) => {
    sectionRefs.current[index] = el;
  };

  const openModal = (serviceId) => {
    setActiveModal(serviceId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "auto";
  };

  const currentCase = caseStudies[activeTab];

  const timelineRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Обработчики для drag-and-drop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  // Обработчики для кнопок навигации
  const scrollLeftHandler = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRightHandler = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  // Добавляем обработчики touch для мобильных устройств
  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartX(touch.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };


  return (
    <div className="services-page">
      {/* Минималистичный фон */}
      <div className="minimal-background">
        <div className="grid-pattern"></div>
        <div className="accent-line"></div>
      </div>

      {/* Hero секция */}
      <section className="hero-section" data-section="hero" ref={(el) => addToRefs(el, 0)}>
        <div className="container">
          <div className="hero-content_2">
            <div className="hero-badge_2">
              <span className="badge-text">Интеллектуальная автоматизация</span>
            </div>
            
            <h1 className="hero-title_2">
              <span className="title-line">Превращаем рутину в</span>
              <span className="title-line highlight">автоматизированные системы</span>
            </h1>
            
            <p className="hero-subtitle_2">
              Разрабатываем комплексные решения на основе Telegram-ботов, которые полностью 
              заменяют человеческое участие в ключевых бизнес-процессах. От трейдинга до логистики.
            </p>
            
            <div className="metrics-grid">
              {metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-description">{metric.description}</div>
                </div>
              ))}
            </div>
            
            <div className="hero-actions">
              <button 
                className="primary-button"
                onClick={() => openModal("audit")}
              >
                Заказать аудит процессов
              </button>
              <button 
                className="secondary-button"
                onClick={() => document.getElementById("cases").scrollIntoView({ behavior: 'smooth' })}
              >
                Изучить кейсы
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Кейсы */}
      <section 
        id="cases" 
        className="cases-section" 
        data-section="cases" 
        ref={(el) => addToRefs(el, 1)}
      >
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Реализованные решения</div>
            <h2 className="section-title">Бизнес-кейсы полной автоматизации</h2>
            <p className="section-subtitle">
              Комплексные системы, которые работают автономно 24/7
            </p>
          </div>
          
          <div className="cases-tabs">
            {Object.entries(caseStudies).map(([key, caseStudy]) => (
              <button
                key={key}
                className={`case-tab ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
                style={{ '--tab-color': caseStudy.color }}
              >
                <div className="case-tab-category">{caseStudy.category}</div>
                <div className="case-tab-title">{caseStudy.title}</div>
              </button>
            ))}
          </div>
          
          {/* Активный кейс */}
          <div className="active-case">
            <div className="case-header">
              <div className="case-category">{currentCase.category}</div>
              <h3 className="case-title">{currentCase.title}</h3>
              <div className="case-tagline">{currentCase.tagline}</div>
            </div>
            
            <div className="case-content">
              <div className="case-problem-solution">
                <div className="problem-block">
                  <h4>Проблема бизнеса</h4>
                  <p>{currentCase.problem}</p>
                </div>
                <div className="solution-block">
                  <h4>Наше решение</h4>
                  <p>{currentCase.solution}</p>
                </div>
              </div>
              
              <div className="case-results">
                <h4>Достигаемые результаты</h4>
                <div className="results-grid">
                  {currentCase.results.map((result, index) => (
                    <div key={index} className="result-item">
                      <div className="result-icon">✓</div>
                      <div className="result-text">{result}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="case-features">
                <h4>Ключевые возможности системы</h4>
                <div className="features-grid">
                  {currentCase.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="feature-card"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="feature-header">
                        <div className="feature-number">{(index + 1).toString().padStart(2, '0')}</div>
                        <h5 className="feature-title">{feature.title}</h5>
                      </div>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="case-technical">
                <div className="technical-block">
                  <h5>Технологический стек</h5>
                  <div className="tech-tags">
                    {currentCase.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="implementation-details">
                  <div className="detail-item">
                    <div className="detail-label">Срок внедрения</div>
                    <div className="detail-value">{currentCase.implementation}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Инвестиции</div>
                    <div className="detail-value">{currentCase.investment}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Средний ROI</div>
                    <div className="detail-value">{currentCase.roi}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="case-actions">
              <button 
                className="case-button primary"
                onClick={() => openModal(currentCase.id)}
                
              >
                Рассчитать для моего бизнеса
              </button>
              <button 
                className="case-button secondary"
                onClick={() => navigate('/order')}
              >
                Получить детальное ТЗ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс внедрения */}
      <section className="process-section" data-section="process" ref={(el) => addToRefs(el, 2)}>
        <div className="container">
          <div className="section-header center">
            <div className="section-badge">Методология</div>
            <h2 className="section-title">Процесс внедрения</h2>
            <p className="section-subtitle">
              От анализа до полной автоматизации за 6 этапов
            </p>
          </div>
          
          {/* Контейнер с кнопками навигации */}
          <div className="process-container">
            {/* Кнопка навигации влево */}
            <button 
              className="nav-button nav-button-left"
              onClick={scrollLeftHandler}
              aria-label="Прокрутить влево"
            >
              ←
            </button>
            
            {/* Горизонтальный скролл */}
            <div 
              className="process-timeline"
              ref={timelineRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              {processSteps.map((step, index) => (
                <div key={index} className="process-phase">
                  <div className="phase-number">{step.number}</div>
                  <h3 className="phase-title">{step.title}</h3>
                  <div className="phase-tasks">
                    <div className="task-item">
                      <div className="task-marker"></div>
                      <div className="task-text">{step.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Кнопка навигации вправо */}
            <button 
              className="nav-button nav-button-right"
              onClick={scrollRightHandler}
              aria-label="Прокрутить вправо"
            >
              →
            </button>
          </div>
          
          {/* Индикатор прокрутки (точки) */}
          <div className="scroll-indicator">
            {processSteps.map((_, index) => (
              <button
                key={index}
                className="indicator-dot"
                onClick={() => {
                  if (timelineRef.current) {
                    const cardWidth = 300; // Примерная ширина карточки
                    const gap = 30;
                    const scrollPosition = index * (cardWidth + gap);
                    timelineRef.current.scrollTo({
                      left: scrollPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Перейти к этапу ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="testimonials-section" data-section="testimonials" ref={(el) => addToRefs(el, 3)}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Результаты</div>
            <h2 className="section-title">Эффект от автоматизации</h2>
            <p className="section-subtitle">
              Как наши решения меняют бизнес-процессы
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-company">{testimonial.company}</div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-person">{testimonial.person}</div>
                </div>
                <div className="testimonial-result">
                  <div className="result-label">Результат</div>
                  <div className="result-value">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" data-section="cta" ref={(el) => addToRefs(el, 4)}>
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">
                Готовы автоматизировать ключевые процессы?
              </h2>
              <p className="cta-text">
                Проведем бесплатный аудит вашего бизнеса и предложим решение, 
                которое окупится за 3-6 месяцев
              </p>
              
              <div className="cta-offer">
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Технический аудит процессов</div>
                </div>
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Расчет экономического эффекта</div>
                </div>
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Прототип системы за 3 дня</div>
                </div>
              </div>
              
              <div className="cta-actions">
                <button 
                  className="cta-primary"
                  onClick={() => openModal("consultation")}
                >
                  Получить расчет ROI
                </button>
                <button className="cta-secondary" onClick={() => navigate('/cases')}>
                  Скачать презентацию кейсов
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content_2" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2 className="modal-title">
                {activeModal === 'audit' ? 'Бесплатный аудит процессов' : 'Расчет автоматизации'}
              </h2>
              <p className="modal-subtitle">
                Заполните форму, и наш технический директор свяжется с вами в течение 2 часов
              </p>
            </div>
            
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group_2">
                <label className="form-label">Компания</label>
                <input 
                  type="text" 
                  className="form-input"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  placeholder="Название компании"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group_2">
                  <label className="form-label">Контактное лицо</label>
                  <input 
                    type="text" 
                    className="form-input"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="ФИО"
                    required
                  />
                </div>
                
                <div className="form-group_2">
                  <label className="form-label">Должность</label>
                  <input 
                    type="text" 
                    className="form-input"
                    name="position"
                    value={formData.position}
                    onChange={handleFormChange}
                    placeholder="Должность"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group_2">
                  <label className="form-label">Телефон</label>
                  <IMaskInput
                    mask="+7 (000) 000-00-00"
                    className="form-input"
                    name="phone"
                    value={formData.phone}
                    onAccept={(value) =>
                    setFormData(prev => ({
                    ...prev,
                    phone: value
                    }))
                    }
                    placeholder="+7 (___) ___-__-__"
                    required
                    disabled={loading}
                    />
                </div>
                
                <div className="form-group_2">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-input"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="work@company.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group_2">
                <label className="form-label">Какой процесс хотите автоматизировать?</label>
                <textarea 
                  className="form-textarea"
                  name="process"
                  value={formData.process}
                  onChange={handleFormChange}
                  rows="3"
                  placeholder="Опишите текущий процесс, проблемы и ожидаемый результат..."
                  required
                />
              </div>
              
              <div className="form-group_2">
                <label className="form-label">Бюджет на автоматизацию</label>
                <select className="form-select" name="budget"
                    value={formData.budget}
                    onChange={handleFormChange}>
                  <option>Не определен</option>
                  <option>50-100 тыс. ₽</option>
                  <option>100-250 тыс. ₽</option>
                  <option>250-500 тыс. ₽</option>
                  <option>500 тыс. ₽+</option>
                </select>
              </div>

              <div className="form-agreements">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={agreePrivacy}
                    onChange={(e) => setAgreePrivacy(e.target.checked)}
                    required
                  />
                  <span className="checkbox-custom_2"></span>
                  <span className="checkbox-text">
                    Я соглашаюсь с&nbsp;
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">
                      политикой конфиденциальности
                    </a>
                  </span>
                </label>

                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                  />
                  <span className="checkbox-custom_2"></span>
                  <span className="checkbox-text">
                    Я принимаю&nbsp;
                    <a href="/terms" target="_blank" rel="noopener noreferrer">
                      условия использования
                    </a>
                  </span>
                </label>
              </div>

              
              <div className="form-actions">
                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading || !agreePrivacy || !agreeTerms}
                  >
                  {loading ? 'Отправка...' : 'Отправить заявку на расчет'}
                </button>

              </div>
              
            </form>
          </div>
        </div>
      )}
    </div>
  );
}