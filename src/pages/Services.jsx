import { useState, useEffect, useRef } from "react";
import "../pages/styles/ServicesPage.css";

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeTab, setActiveTab] = useState("bots");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  const services = {
    bots: {
      id: 1,
      title: "Боты для бизнеса",
      tagline: "Автоматизация продаж и клиентского сервиса",
      description: "Создаем интеллектуальных Telegram-ботов, которые превращают мессенджер в мощный инструмент для роста вашего бизнеса",
      details: [
        {
          title: "CRM-интеграция",
          description: "Подключение к Bitrix24, AmoCRM, RetailCRM",
          icon: "📊"
        },
        {
          title: "Автоматизация продаж",
          description: "Обработка заявок 24/7, лидогенерация",
          icon: "🤖"
        },
        {
          title: "Мультиканальность",
          description: "Единый бот для Telegram, WhatsApp, VK",
          icon: "🔄"
        },
        {
          title: "Персонализация",
          description: "Индивидуальные сценарии для каждого клиента",
          icon: "🎯"
        },
        {
          title: "Аналитика",
          description: "Детальная статистика и отчеты в реальном времени",
          icon: "📈"
        },
        {
          title: "База клиентов",
          description: "Автоматическое ведение и сегментация",
          icon: "🗃️"
        }
      ],
      technologies: ["Python", "Aiogram", "PostgreSQL", "Redis", "Docker", "RabbitMQ"],
      price: "от 25 000 ₽",
      time: "5-10 дней",
      color: "#0260e8",
      gradient: "linear-gradient(135deg, #0260e8 0%, #1f5bff 100%)"
    },
    automation: {
      id: 2,
      title: "Автоматизация процессов",
      tagline: "Умные парсеры и интеграции",
      description: "Разрабатываем системы автоматизации, которые экономят десятки часов работы в месяц",
      details: [
        {
          title: "Парсинг данных",
          description: "Сбор информации с сайтов и соцсетей",
          icon: "🔍"
        },
        {
          title: "API-интеграции",
          description: "Подключение к внешним сервисам и базам",
          icon: "🔗"
        },
        {
          title: "Работа с документами",
          description: "Автоматическое формирование отчетов",
          icon: "📄"
        },
        {
          title: "Google Sheets/Excel",
          description: "Синхронизация и автоматическое обновление",
          icon: "📊"
        },
        {
          title: "Триггерные действия",
          description: "Автоматические реакции на события",
          icon: "⚡"
        },
        {
          title: "Интеграция с 1C",
          description: "Обмен данными с учетными системами",
          icon: "📦"
        }
      ],
      technologies: ["Node.js", "Python", "FastAPI", "Selenium", "BeautifulSoup", "API"],
      price: "от 30 000 ₽",
      time: "7-14 дней",
      color: "#13ce66",
      gradient: "linear-gradient(135deg, #13ce66 0%, #00b894 100%)"
    },
    payments: {
      id: 3,
      title: "Платежные решения",
      tagline: "Прием оплаты в Telegram",
      description: "Встраиваем надежные платежные системы для монетизации вашего бота",
      details: [
        {
          title: "Подключение платежек",
          description: "ЮКасса, CryptoCloud, TgPay, Robokassa",
          icon: "💳"
        },
        {
          title: "Автоматические чеки",
          description: "Генерация и отправка по ФЗ-54",
          icon: "🧾"
        },
        {
          title: "Подписки и доступы",
          description: "Регулярные платежи и ограничения",
          icon: "🔄"
        },
        {
          title: "Криптоплатежи",
          description: "Прием Bitcoin, USDT, Ethereum",
          icon: "₿"
        },
        {
          title: "Антифрод система",
          description: "Защита от мошеннических операций",
          icon: "🛡️"
        },
        {
          title: "Бухгалтерия",
          description: "Интеграция с системами учета",
          icon: "📚"
        }
      ],
      technologies: ["ЮКасса API", "CryptoCloud", "Telegram Payments", "Stripe", "Binance API"],
      price: "от 20 000 ₽",
      time: "3-7 дней",
      color: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)"
    },
    ai: {
      id: 4,
      title: "AI-боты",
      tagline: "Искусственный интеллект в Telegram",
      description: "Внедряем нейросети для создания умных ассистентов нового поколения",
      details: [
        {
          title: "GPT-4 / Claude",
          description: "Интеллектуальные диалоги и поддержка",
          icon: "🧠"
        },
        {
          title: "Генерация контента",
          description: "Тексты, изображения, голосовые сообщения",
          icon: "🎨"
        },
        {
          title: "Анализ настроений",
          description: "Определение эмоций в сообщениях",
          icon: "😊"
        },
        {
          title: "Рекомендации",
          description: "Персональные предложения для клиентов",
          icon: "💡"
        },
        {
          title: "Обучение на данных",
          description: "Адаптация под ваш бизнес",
          icon: "📚"
        },
        {
          title: "Мультимодальность",
          description: "Работа с текстом, изображениями, аудио",
          icon: "🎭"
        }
      ],
      technologies: ["OpenAI API", "Anthropic Claude", "LangChain", "TensorFlow", "PyTorch"],
      price: "от 50 000 ₽",
      time: "10-20 дней",
      color: "#9b51e0",
      gradient: "linear-gradient(135deg, #9b51e0 0%, #bb6bd9 100%)"
    }
  };

  const features = [
    { icon: "⚡", title: "Быстрая разработка", desc: "От прототипа до запуска за 2 недели" },
    { icon: "🔒", title: "Безопасность", desc: "SSL-шифрование и защита данных" },
    { icon: "📱", title: "Адаптивность", desc: "Работает на всех устройствах" },
    { icon: "🔄", title: "Масштабируемость", desc: "Поддержка тысяч пользователей" },
    { icon: "📊", title: "Аналитика", desc: "Подробные отчеты и метрики" },
    { icon: "🛠️", title: "Поддержка", desc: "Техническая поддержка 24/7" }
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

  const currentService = services[activeTab];

  return (
    <div className="services-page">
      {/* Анимированный фон */}
      <div className="animated-background">
        <div className="gradient-circle-1"></div>
        <div className="gradient-circle-2"></div>
        <div className="gradient-circle-3"></div>
      </div>

      {/* Hero секция */}
      <section className="hero-section" data-section="hero" ref={(el) => addToRefs(el, 0)}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">🚀 Премиум-разработка</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Разработка</span>
              <span className="title-line highlight">Telegram ботов</span>
              <span className="title-line">для вашего бизнеса</span>
            </h1>
            
            <p className="hero-subtitle">
              Создаем интеллектуальные решения, которые автоматизируют процессы, 
              увеличивают продажи и улучшают клиентский опыт. Более 50 успешных кейсов.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item animate-float">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Работа без перерывов</div>
              </div>
              <div className="stat-item animate-float" style={{ animationDelay: "0.2s" }}>
                <div className="stat-value">+40%</div>
                <div className="stat-label">К конверсии</div>
              </div>
              <div className="stat-item animate-float" style={{ animationDelay: "0.4s" }}>
                <div className="stat-value">-60%</div>
                <div className="stat-label">К затратам</div>
              </div>
            </div>
            
            <div className="hero-actions">
              <button 
                className="primary-button animate-pulse"
                onClick={() => openModal("consultation")}
              >
                🚀 Получить консультацию
              </button>
              <button 
                className="secondary-button"
                onClick={() => document.getElementById("services").scrollIntoView({ behavior: 'smooth' })}
              >
                📋 Смотреть услуги
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-bot">
              <div className="bot-icon">🤖</div>
              <div className="bot-message">Привет! Я помогу вашему бизнесу!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Табы услуг */}
      <section 
        id="services" 
        className="services-section" 
        data-section="services" 
        ref={(el) => addToRefs(el, 1)}
      >
        <div className="container">
          <div className="section-header">
            <div className="section-badge">💼 Услуги</div>
            <h2 className="section-title">Что мы разрабатываем</h2>
            <p className="section-subtitle">
              Выберите категорию услуг, чтобы увидеть детали и возможности
            </p>
          </div>
          
          <div className="service-tabs">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                className={`tab-button ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
                style={{ '--tab-color': service.color }}
              >
                <span className="tab-icon">{key === 'bots' ? '🤖' : key === 'automation' ? '⚙️' : key === 'payments' ? '💳' : '🧠'}</span>
                <span className="tab-title">{service.title}</span>
              </button>
            ))}
          </div>
          
          {/* Активная услуга */}
          <div className="active-service animate-slide-up">
            <div className="service-header">
              <div className="service-meta">
                <div className="service-price-badge">{currentService.price}</div>
                <div className="service-time">Срок: {currentService.time}</div>
              </div>
              <div className="service-title-section">
                <h3 className="service-title">{currentService.title}</h3>
                <p className="service-tagline">{currentService.tagline}</p>
              </div>
              <p className="service-description">{currentService.description}</p>
            </div>
            
            <div className="service-features-grid">
              {currentService.details.map((detail, index) => (
                <div 
                  key={index}
                  className={`feature-card ${hoveredCard === index ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon">{detail.icon}</div>
                  <div className="feature-content">
                    <h4 className="feature-title">{detail.title}</h4>
                    <p className="feature-desc">{detail.description}</p>
                  </div>
                  <div className="feature-hover-effect"></div>
                </div>
              ))}
            </div>
            
            <div className="technologies-section">
              <h4 className="tech-title">Используемые технологии:</h4>
              <div className="tech-tags">
                {currentService.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="tech-tag animate-slide-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="service-actions">
              <button 
                className="order-button"
                onClick={() => openModal(currentService.id)}
                style={{ background: currentService.gradient }}
              >
                🚀 Заказать разработку
              </button>
              <button className="details-button">
                📋 Подробное ТЗ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="features-section" data-section="features" ref={(el) => addToRefs(el, 2)}>
        <div className="container">
          <div className="section-header center">
            <div className="section-badge">⭐ Преимущества</div>
            <h2 className="section-title">Почему выбирают нас</h2>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-wrapper animate-bounce">
                  <span className="feature-main-icon">{feature.icon}</span>
                </div>
                <h3 className="feature-item-title">{feature.title}</h3>
                <p className="feature-item-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="process-section" data-section="process" ref={(el) => addToRefs(el, 3)}>
        <div className="container">
          <div className="section-header center">
            <div className="section-badge">🔄 Процесс</div>
            <h2 className="section-title">Как мы работаем</h2>
            <p className="section-subtitle">
              От идеи до запуска — 6 четких этапов разработки
            </p>
          </div>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="process-step"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <div className="step-line"></div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="cta-section" data-section="cta" ref={(el) => addToRefs(el, 4)}>
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">
                Готовы <span className="highlight">автоматизировать</span> бизнес?
              </h2>
              <p className="cta-text">
                Оставьте заявку и получите бесплатный аудит ваших процессов
                с расчетом экономии от внедрения бота
              </p>
              
              <div className="cta-features">
                <div className="cta-feature">✅ Бесплатный анализ бизнеса</div>
                <div className="cta-feature">✅ Прототип бота за 24 часа</div>
                <div className="cta-feature">✅ Расчет ROI от внедрения</div>
              </div>
              
              <div className="cta-actions">
                <button 
                  className="cta-primary-button"
                  onClick={() => openModal("consultation")}
                >
                  🎯 Получить расчет
                </button>
                <button className="cta-secondary-button">
                  📞 Связаться сейчас
                </button>
              </div>
            </div>
            
            <div className="cta-visual">
              <div className="cta-robot animate-float">
                <div className="robot-body">🤖</div>
                <div className="robot-message">Жду вашу заявку!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content animate-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2 className="modal-title">
                {activeModal === 'consultation' ? '📞 Заказать консультацию' : '🚀 Заказать разработку'}
              </h2>
              <p className="modal-subtitle">
                {activeModal === 'consultation' 
                  ? 'Оставьте контакты, и наш менеджер свяжется с вами в течение 15 минут'
                  : 'Расскажите о проекте, и мы рассчитаем стоимость и сроки'}
              </p>
            </div>
            
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">👤</span>
                    Ваше имя *
                  </label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">📱</span>
                    Телефон *
                  </label>
                  <input 
                    type="tel" 
                    className="form-input"
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  <span className="label-icon">📧</span>
                  Email
                </label>
                <input 
                  type="email" 
                  className="form-input"
                  placeholder="ivan@example.com"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  <span className="label-icon">💡</span>
                  Опишите задачу
                </label>
                <textarea 
                  className="form-textarea"
                  rows="4"
                  placeholder="Расскажите о вашем проекте, целях и пожеланиях..."
                />
              </div>
              
              <div className="form-actions">
                <button type="submit" className="submit-button">
                  🚀 Отправить заявку
                </button>
                <button type="button" className="cancel-button" onClick={closeModal}>
                  Отмена
                </button>
              </div>
              
              <div className="form-notice">
                <span className="notice-icon">🔒</span>
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}