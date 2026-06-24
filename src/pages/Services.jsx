import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import "../pages/styles/ServicesPage.css";

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeTab, setActiveTab] = useState("hosting");
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
    service: '',
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
🛠 *Услуга:* ${formData.service || 'Не выбрана'}
📝 *Задача:* ${formData.process}
💰 *Бюджет:* ${formData.budget}

🕒 *Дата:* ${new Date().toLocaleString('ru-RU')}
`;

  await sendToTelegram(message);
};


  const caseStudies = {
    hosting: {
      id: 1,
      title: "Хостинг для Telegram-ботов",
      category: "Инфраструктура",
      tagline: "Надёжная работа ваших ботов 24/7 без простоев",
      description: "Выделенные серверы для размещения Telegram-ботов и веб-приложений с гарантированным uptime 99.9%. Автоматическое масштабирование и резервное копирование.",
      problem: "Боты падают при перезагрузке компьютера, нет резервного копирования данных, сложно масштабировать при росте пользователей",
      solution: "Облачная инфраструктура с мониторингом, автосохранением и мгновенным восстановлением после сбоев",
      results: [
        "Uptime 99.9% — боты работают круглосуточно",
        "Автоматическое резервное копирование каждые 6 часов",
        "Масштабирование до 10 000+ одновременных пользователей",
        "Мониторинг и алерты в Telegram в реальном времени"
      ],
      features: [
        {
          title: "Мгновенный деплой",
          description: "Развертывание бота за 5 минут через Git или ZIP-загрузку"
        },
        {
          title: "Автомасштабирование",
          description: "Автоматическое добавление ресурсов при росте нагрузки"
        },
        {
          title: "Безопасность",
          description: "SSL-сертификаты, шифрование данных, защита от DDoS"
        },
        {
          title: "Мониторинг",
          description: "Панель управления с метриками работы бота и уведомлениями"
        },
        {
          title: "Бэкапы",
          description: "Автоматическое сохранение базы данных и конфигураций"
        },
        {
          title: "Поддержка",
          description: "Техническая помощь 24/7 и консультации по оптимизации"
        }
      ],
      technologies: ["Node.js", "Docker", "PostgreSQL", "Redis", "Nginx", "Let's Encrypt"],
      implementation: "1-3 дня",
      investment: "от 2 990 ₽/мес",
      roi: "Мгновенная доступность",
      color: "#0066CC",
      gradient: "linear-gradient(135deg, #0066CC 0%, #004D99 100%)"
    },
    website: {
      id: 2,
      title: "Сайт под ключ",
      category: "Веб-разработка",
      tagline: "От идеи до работающего сайта за 14 дней",
      description: "Полный цикл создания сайта: дизайн, разработка, наполнение контентом, SEO-оптимизация и запуск. Адаптивный дизайн для всех устройств.",
      problem: "Самостоятельное создание сайта занимает месяцы, сложно разобраться в хостинге и домене, нет expertise в дизайне и SEO",
      solution: "Готовое решение под ключ с дизайном, контентом и настройкой всех сервисов",
      results: [
        "Готовый сайт за 14 дней с нуля",
        "Адаптивный дизайн для мобильных и десктопов",
        "SEO-оптимизация и подключение к Google Analytics",
        "Обучение команды работе с контентом"
      ],
      features: [
        {
          title: "Уникальный дизайн",
          description: "Разработка индивидуального макета под ваш бренд"
        },
        {
          title: "Адаптивность",
          description: "Идеальное отображение на телефонах, планшетах и ПК"
        },
        {
          title: "CMS система",
          description: "Удобная панель управления для редактирования контента"
        },
        {
          title: "SEO-оптимизация",
          description: "Настройка метатегов, скорости загрузки и индексации"
        },
        {
          title: "Интеграции",
          description: "Подключение оплаты, CRM, мессенджеров и соцсетей"
        },
        {
          title: "Обучение",
          description: "Видеоинструкции и документация по управлению сайтом"
        }
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS S3"],
      implementation: "14-21 день",
      investment: "от 45 000 ₽",
      roi: "3-6 месяцев",
      color: "#0260e8",
      gradient: "linear-gradient(135deg, #0260e8 0%, #0145a8 100%)"
    },
    bot: {
      id: 3,
      title: "Telegram-боты под ключ",
      category: "Автоматизация",
      tagline: "Умные боты для продаж, поддержки и автоматизации",
      description: "Разработка Telegram-ботов любой сложности: интернет-магазины, сервисы поддержки, CRM-интеграции, автоматические рассылки и чат-боты с AI.",
      problem: "Ручная обработка запросов клиентов, потеря лидов, медленные ответы, невозможность масштабировать команду поддержки",
      solution: "Интеллектуальный бот, который работает 24/7, обрабатывает заявки и интегрируется с вашими бизнес-процессами",
      results: [
        "Обработка 1000+ запросов в день без сотрудников",
        "Сокращение времени ответа с 30 минут до 5 секунд",
        "Автоматический сбор лидов и квалификация клиентов",
        "Интеграция с CRM, платёжными системами и складом"
      ],
      features: [
        {
          title: "Интернет-магазин",
          description: "Каталог товаров, корзина, оплата и доставка внутри Telegram"
        },
        {
          title: "Умные ответы",
          description: "AI-обработка вопросов с контекстным пониманием"
        },
        {
          title: "Автоматизация",
          description: "Рассылки, напоминания, триггерные сообщения"
        },
        {
          title: "Интеграции",
          description: "Подключение к 1С, Bitrix24, ЮKassa, СДЭК и другим"
        },
        {
          title: "Аналитика",
          description: "Дашборд с конверсиями, удержанием и доходами"
        },
        {
          title: "Мультитематичность",
          description: "Поддержка нескольких языков и веток сценариев"
        }
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "Telegram API", "OpenAI"],
      implementation: "7-14 дней",
      investment: "от 25 000 ₽",
      roi: "1-3 месяца",
      color: "#0260e8",
      gradient: "linear-gradient(135deg, #0260e8 0%, #0145a8 100%)"
    },
    automation: {
      id: 4,
      title: "Бизнес-автоматизация",
      category: "Процессы",
      tagline: "Связываем все сервисы в единую систему",
      description: "Автоматизация бизнес-процессов: от обработки заявок до отчётности. Интеграция CRM, мессенджеров, платёжных систем и складского учёта.",
      problem: "Данные разрознены по разным сервисам, ручной перенос информации, ошибки при дублировании, сложная отчётность",
      solution: "Единая экосистема, где все сервисы обмениваются данными автоматически",
      results: [
        "Сокращение ручного труда на 60-80%",
        "Устранение ошибок при ручном вводе данных",
        "Автоматическая генерация отчётов и аналитики",
        "Скорость обработки заявок увеличена в 5 раз"
      ],
      features: [
        {
          title: "Вебхуки",
          description: "Автоматическая реакция на события в других сервисах"
        },
        {
          title: "ETL процессы",
          description: "Сбор, преобразование и загрузка данных из разных источников"
        },
        {
          title: "API интеграции",
          description: "Подключение к 50+ популярным сервисам через API"
        },
        {
          title: "Автоматизация",
          description: "Триггерные сценарии и цепочки действий"
        },
        {
          title: "Отчётность",
          description: "Автоматические дашборды и отчёты по расписанию"
        },
        {
          title: "Валидация",
          description: "Проверка данных и алерты при аномалиях"
        }
      ],
      technologies: ["Python", "RabbitMQ", "Apache Kafka", "PostgreSQL", "Grafana", "Zapier API"],
      implementation: "10-20 дней",
      investment: "от 60 000 ₽",
      roi: "2-4 месяца",
      color: "#0260e8",
      gradient: "linear-gradient(135deg, #0260e8 0%, #0145a8 100%)"
    },
    support: {
      id: 5,
      title: "Техподдержка и развитие",
      category: "Сервис",
      tagline: "Ваш IT-отдел на аутсорсе",
      description: "Круглосуточная поддержка ваших цифровых продуктов: мониторинг, обновления, исправление багов, доработка функционала и консультации.",
      problem: "Нет штатного разработчика, сложно найти подрядчика для мелких правок, нет мониторинга и превентивного обслуживания",
      solution: "Выделенная команда поддержки с SLA 99.9% и быстрым откликом на любые запросы",
      results: [
        "Реакция на критические инциденты в течение 15 минут",
        "Проактивный мониторинг и предотвращение сбоев",
        "Регулярные обновления и улучшения продукта",
        "Экономия 200+ тыс. ₽ в месяц на штатном разработчике"
      ],
      features: [
        {
          title: "Мониторинг 24/7",
          description: "Отслеживание работоспособности и алерты при проблемах"
        },
        {
          title: "Обновления",
          description: "Регулярное обновление зависимостей и патчи безопасности"
        },
        {
          title: "Баг-фиксы",
          description: "Исправление ошибок в течение 24 часов"
        },
        {
          title: "Новый функционал",
          description: "Доработка по ТЗ с приоритизацией задач"
        },
        {
          title: "Консультации",
          description: "Экспертные рекомендации по развитию продукта"
        },
        {
          title: "Документация",
          description: "Актуальная документация и changelog изменений"
        }
      ],
      technologies: ["Node.js", "Python", "Docker", "Git", "Grafana", "PagerDuty"],
      implementation: "С первого дня",
      investment: "от 15 000 ₽/мес",
      roi: "Экономия на штате",
      color: "#0260e8",
      gradient: "linear-gradient(135deg, #0260e8 0%, #0145a8 100%)"
    }
  };

  const metrics = [
    { value: "200+", label: "Запущенных ботов", description: "Работают 24/7 для клиентов" },
    { value: "99.9%", label: "Uptime серверов", description: "Гарантия доступности хостинга" },
    { value: "14 дней", label: "Средний срок", description: "Запуск сайта под ключ" },
    { value: "3.5x", label: "Рост конверсии", description: "Средний результат клиентов" }
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
      company: "Telegram-магазин одежды",
      person: "Анна М., владелец бизнеса",
      text: "Перенесли бота на наш хостинг — теперь работает 24/7 без сбоев. За первый месяц получили 500+ заказов через Telegram. Поддержка отвечает моментально!",
      result: "+500 заказов/мес"
    },
    {
      company: "Сеть кофеен",
      person: "Дмитрий К., операционный директор",
      text: "Заказали сайт под ключ за 2 недели. Получили не только красивый дизайн, но и встроенный бот для заказов. Клиенты в восторге от удобства!",
      result: "Сайт + бот за 14 дней"
    },
    {
      company: "IT-стартап",
      person: "Елена С., CTO",
      text: "Бот для техподдержки обрабатывает 80% обращений автоматически. Экономим 150 часов в месяц и сокращаем расходы на колл-центр в 3 раза.",
      result: "-80% нагрузки на поддержку"
    }
  ];

  const processSteps = [
    { number: "01", title: "Консультация", desc: "Обсуждаем задачу и подбираем решение" },
    { number: "02", title: "Расчёт", desc: "Формируем ТЗ и рассчитываем стоимость" },
    { number: "03", title: "Разработка", desc: "Создаём бота, сайт или настраиваем хостинг" },
    { number: "04", title: "Тестирование", desc: "Проверяем работу всех компонентов" },
    { number: "05", title: "Запуск", desc: "Разворачиваем проект и обучаем команду" },
    { number: "06", title: "Поддержка", desc: "Мониторим, обновляем и развиваем проект" }
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
              <span className="badge-text">Разработка и хостинг</span>
            </div>
            
            <h1 className="hero-title_2">
              <span className="title-line">Создаём и размещаем</span>
              <span className="title-line highlight">Telegram-ботов и сайты</span>
            </h1>
            
            <p className="hero-subtitle_2">
              Закажите хостинг для ваших Telegram-ботов или сайт под ключ. 
              Надёжная инфраструктура, современный дизайн и полная автоматизация бизнес-процессов.
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
                Бесплатная консультация
              </button>
              <button 
                className="secondary-button"
                onClick={() => document.getElementById("cases").scrollIntoView({ behavior: 'smooth' })}
              >
                Наши услуги
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
            <div className="section-badge">Наши услуги</div>
            <h2 className="section-title">Комплексные решения для вашего бизнеса</h2>
            <p className="section-subtitle">
              От хостинга до полноценного сайта под ключ
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
                Заказать услугу
              </button>
              <button 
                className="case-button secondary"
                onClick={() => navigate('/order')}
              >
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс внедрения */}
      <section className="process-section" data-section="process" ref={(el) => addToRefs(el, 2)}>
        <div className="container">
          <div className="section-header center">
            <div className="section-badge">Как мы работаем</div>
            <h2 className="section-title">6 шагов от идеи до запуска</h2>
            <p className="section-subtitle">
              Прозрачный процесс разработки и хостинга
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
            <div className="section-badge">Отзывы клиентов</div>
            <h2 className="section-title">Что говорят наши клиенты</h2>
            <p className="section-subtitle">
              Реальные результаты от наших услуг
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
                Готовы запустить вашего бота или сайт?
              </h2>
              <p className="cta-text">
                Бесплатная консультация и расчёт стоимости. 
                Запустим ваш проект за 14 дней с гарантией качества
              </p>
              
              <div className="cta-offer">
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Бесплатный аудит и консультация</div>
                </div>
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Расчёт стоимости за 24 часа</div>
                </div>
                <div className="offer-item">
                  <div className="offer-check">✓</div>
                  <div className="offer-text">Запуск проекта за 14 дней</div>
                </div>
              </div>
              
              <div className="cta-actions">
                <button 
                  className="cta-primary"
                  onClick={() => openModal("consultation")}
                >
                  Получить расчёт стоимости
                </button>
                <button className="cta-secondary" onClick={() => navigate('/cases')}>
                  Смотреть кейсы
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
                {activeModal === 'audit' ? 'Бесплатная консультация' : 'Расчёт стоимости проекта'}
              </h2>
              <p className="modal-subtitle">
                Заполните форму, и наш специалист свяжется с вами в течение 2 часов
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
                <label className="form-label">Какую услугу вы хотите заказать?</label>
                <select className="form-select" name="service"
                    value={formData.service || ''}
                    onChange={handleFormChange}>
                  <option value="">Выберите услугу</option>
                  <option value="hosting">Хостинг для Telegram-ботов</option>
                  <option value="website">Сайт под ключ</option>
                  <option value="bot">Telegram-бот под ключ</option>
                  <option value="automation">Бизнес-автоматизация</option>
                  <option value="support">Техподдержка</option>
                </select>
              </div>

              <div className="form-group_2">
                <label className="form-label">Опишите вашу задачу</label>
                <textarea 
                  className="form-textarea"
                  name="process"
                  value={formData.process}
                  onChange={handleFormChange}
                  rows="3"
                  placeholder="Расскажите о вашем проекте: какой бот или сайт нужен, какие функции должны быть..."
                  required
                />
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
                  {loading ? 'Отправка...' : 'Отправить заявку'}
                </button>

              </div>
              
            </form>
          </div>
        </div>
      )}
    </div>
  );
}