import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { IMaskInput } from 'react-imask';
import qrCode from '../../public/assetst/qrcode.jpg';
import '../footerpages/styles/SupportPage.css';

const SupportPage = () => {

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'ad' или 'partnership'
  // ИСПРАВЛЕНО: изменил userData на formData
  const [formData, setFormData] = useState({
    name: '',
    contact: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.support-container, .support-card, .donation-card, .support-message, .impact-card, .benefit-card_2');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const BOT_TOKEN = "8544607115:AAFrA1GapB8tgluo8V5R3yFlajN6yPicqG4";
  const CHAT_ID = "-5023413115";

  // Функция для открытия модального окна
  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalOpen(false);
    setFormData({ name: '', contact: '' }); // ИСПРАВЛЕНО: formData вместо userData
  };

  // Обработчик изменения полей формы
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Функция отправки в Telegram
  const sendToTelegram = async (messageText) => {
    setLoading(true);
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: messageText,
          parse_mode: "Markdown",
        }),
      });
      const data = await response.json();
      if (data.ok) {
        alert('Спасибо! Ваша заявка отправлена. Мы скоро свяжемся.');
      } else {
        alert('Ошибка отправки. Попробуйте позже.');
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке.");
    } finally {
      setLoading(false);
    }
  };

  // Обработчик отправки формы
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    const typeText = modalType === 'ad' ? 'Предложение рекламы' : 'Корпоративное партнёрство';
    const message = `📣 *НОВАЯ ЗАЯВКА С САЙТА*\n\n👤 *Имя:* ${formData.name}\n📞 *Контакт:* ${formData.contact}\n🎯 *Тип запроса:* ${typeText}\n🕒 *Время:* ${new Date().toLocaleString("ru-RU")}`;
    
    await sendToTelegram(message);
    closeModal();
  };

  // Обработчики для кнопок (теперь открывают модальное окно)
  const handleAdOffer = () => {
    openModal('ad');
  };

  const handlePartnership = () => {
    openModal('partnership');
  };
    
  return (
    <>
    <div className="support-container">
      <div className="support-hero">
        <div className="support-hero-content">
          <h1 className="support-title">Инвестируйте в будущее с RobotService</h1>
          <p className="support-subtitle">
            Ваша поддержка — это не просто пожертвование. Это вклад в развитие искусственного интеллекта, 
            который уже сегодня меняет мир. Ваша помощь приближает нас к новым технологическим прорывам.
          </p>
        </div>
      </div>

      <div className="support-content">
        {/* Новый блок: Как ваша поддержка меняет мир */}
        <div className="impact-section">
          <div className="impact-header">
            <h2>Как ваша поддержка меняет мир технологий</h2>
            <p>Мы не просто создаем боты — мы создаем инструменты, которые трансформируют бизнес-процессы</p>
          </div>
          
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-content">
                <h3>Автоматизация будущего</h3>
                <p>
                  Каждое пожертвование ускоряет разработку систем, которые заменяют рутинный человеческий труд. 
                  Мы уже автоматизировали более 500 бизнес-процессов для компаний по всей России.
                </p>
              </div>
            </div>
            
            <div className="impact-card">
              <div className="impact-content">
                <h3>Образовательные инициативы</h3>
                <p>
                  5% всех полученных средств мы направляем на бесплатное обучение студентов и начинающих 
                  разработчиков. За последний год провели 4 вебинара, тем самым заявили о себе.
                </p>
              </div>
            </div>
            
            <div className="impact-card">
              <div className="impact-content">
                <h3>Open-Source проекты</h3>
                <p>
                  Мы открываем исходный код наших наработок. Ваша поддержка помогает развивать библиотеки 
                  и фреймворки, которые используют более 20 разработчиков в нашей сфере.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Блок: Что вы получаете, поддерживая нас */}
        <div className="benefits-section">
          <div className="benefits-header">
            <h2>Что вы получаете, поддерживая RobotService</h2>
            <p>Ваша поддержка возвращается к вам в виде реальных преимуществ</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card_2">
              <div className="benefit-content">
                <h3>Приоритетный доступ к новинкам</h3>
                <p>
                  Все наши спонсоры получают ранний доступ к новым функциям и API за месяц до официального 
                  релиза. Вы будете первым, кто сможет использовать передовые технологии.
                </p>
                
              </div>
            </div>
            
            <div className="benefit-card_2">
              <div className="benefit-content">
                <h3>Персональная техническая поддержка</h3>
                <p>
                  Специальная линия поддержки для наших спонсоров. Среднее время ответа — менее 1 часа, 
                  даже в нерабочее время.
                </p>
               
              </div>
            </div>
            
            <div className="benefit-card_2">
              <div className="benefit-content">
                <h3>Участие в roadmap</h3>
                <p>
                  Ваше мнение напрямую влияет на то, какие функции мы разрабатываем в первую очередь. 
                  Регулярные опросы и голосования только для наших спонсоров.
                </p>
              
              </div>
            </div>
          </div>
        </div>

        {/* Основной блок поддержки */}
        <div className="support-card">
          <div className="support-card-header">
            <h2>Почему ваш вклад сегодня критически важен?</h2>
            <p className="header-subtitle">
              Сейчас мы на пороге технологического прорыва, и именно ваша поддержка определит его скорость
            </p>
          </div>
          
          <div className="support-reasons">
            <div className="reason-item">
              <div className="reason-content">
                <h3>Гонка технологий не ждёт</h3>
                <p>
                  Каждый день мировые компании инвестируют миллионы в ИИ. Без вашей поддержки мы рискуем 
                  отстать. Наши конкуренты имеют бюджеты в десятки раз больше.
                </p>
              </div>
            </div>
            
            <div className="reason-item">
              <div className="reason-content">
                <h3>Масштабы инфраструктуры</h3>
                <p>
                  Количество пользователей наших сервисов выросло на 300% за последний год. Нам срочно 
                  нужно масштабировать серверы и оптимизировать архитектуру.
                </p>
              </div>
            </div>
            
            <div className="reason-item">
              <div className="reason-content">
                <h3>Привлечение топ-специалистов</h3>
                <p>
                  Чтобы создавать прорывные продукты, нам нужны лучшие умы в области ИИ. 
                  Ваши пожертвования позволяют предлагать конкурентоспособные условия.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Блок с донатами */}
        <div className="donation-card">
          <div className="donation-header">
            <h2>Сделайте вклад прямо сейчас</h2>
            <p>Поддержите развитие российского ИИ — выберите удобный способ</p>
            <div className="urgency-badge">
              <span>СРОЧНО:</span> Нашей команде требуется собрать 500 000₽ до конца месяца для запуска новой AI-платформы
            </div>
          </div>
          
          <div className="qr-container">
            <div className="qr-wrapper">
            <div className="qr-placeholder">
              <div className="qr-code">
                <div className="qr-scan-line"></div>

                <a
                  href="https://tbank.ru/cf/2r6QqGkybAy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Перейти к пожертвованию"
                >
                  <img src={qrCode} alt="QR-код для пожертвования" />
                </a>

              </div>

              <div className="qr-label">
                Отсканируйте в любом банковском приложении
              </div>
              <div className="qr-note">
                Рекомендуемая сумма: от 500₽
              </div>
            </div>
          </div>

            
            <div className="donation-info">
              <div className="info-item">
                <div className="info-content">
                  <h4>Подтверждение перевода</h4>
                  <p>
                    Вы получите автоматическое подтверждение успешного перевода. 
                    Пожертвование является полностью добровольным.
                  </p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-content">
                  <h4>Полная отчётность</h4>
                  <p>
                    Вы можете видеть, как ваша поддержка помогает развивать технологии, 
                    подписывайтесь на наши соц сети и наблюдайте за продвижением нашей команды
                  </p>
                </div>
              </div>
              
              
            </div>
          </div>
          
          <div className="progress-section">
            <div className="progress-header">
              <span>Цель месяца: 500 000₽</span> <br></br>
              <span>Собрано: 327 850₽</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65.6%' }}></div>
            </div>
            <div className="progress-text">Осталось собрать: 172 150₽ (34.4%)</div>
          </div>
          
          <div className="donation-alternatives">
            <h3>Альтернативные способы поддержки</h3>
            <div className="alternative-methods">
              <div className="method">
                <div className="method-content">
                  <h4>Реклама</h4>
                  <p>Мы как предлагаем рекламу продуктов наших клиентов, так и принимаем рекламу от наших портнёров, всегда рады новым предложениям.</p>
                  <button className="subscribe-btn" onClick={handleAdOffer}>
                  Предложить рекламу
                </button>
                </div>
              </div>
              <div className="method">
                <div className="method-content">
                  <h4>Корпоративное партнёрство</h4>
                  <p>Для компаний с инвестициями от 50 000₽ мы предлагаем стратегическое партнёрство. 
                    Мы открыты к диалогу и готовы выстроить долгосрочное взаимовыгодное сотрудничество.</p>
                  <button className="partner-btn" onClick={handlePartnership}>
                  Стать партнёром
                  </button>
                  </div>  
                           
              </div>              
            </div>            
          </div>
        </div>
        

        {/* Финальное сообщение */}
        <div className="support-message">
          <div className="message-content">
            <h3>Вы не просто жертвуете деньги — вы строите будущее</h3>
            <p>
              Каждый Telegram-бот, которого мы создаём, каждый автоматизированный процесс, 
              каждая интеграция — это шаг к тому миру, где технологии работают на человека, 
              а не наоборот. Но мы не можем сделать это в одиночку.
            </p>
            <p className="highlight-text">
              Сегодня у вас есть уникальная возможность стать частью чего-то большего, 
              чем просто IT-компания. Стать частью сообщества, которое меняет то, как 
              российский бизнес взаимодействует с технологиями.
            </p>
            <div className="team-signature">
              <p>С благодарностью и верой в технологическое будущее России,</p>
              <p className="signature"><strong>Команда RobotService</strong></p>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    {/* Модальное окно с исправленными значениями */}
        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>{modalType === 'ad' ? 'Предложение рекламы' : 'Корпоративное партнёрство'}</h3>
              <p className="modal-subtitle">Оставьте ваши контакты для связи</p>
              
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Ваше имя</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Имя" 
                    value={formData.name}
                    onChange={handleFormChange}
                    disabled={loading}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact">Номер телефона</label>
                  <IMaskInput
                    mask="+7 (000) 000-00-00"
                    value={formData.contact}
                    onAccept={(value) =>
                      setFormData(prev => ({
                        ...prev,
                        contact: value
                      }))
                    }
                    placeholder="+7 (___) ___-__-__"
                    type="tel"
                    name="contact"
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="modal-buttons">
                  <button 
                    type="submit"
                    className="modal-submit-btn" 
                    disabled={loading}
                  >
                    {loading ? 'Отправка...' : 'Отправить заявку'}
                  </button>
                  <button 
                    type="button"
                    className="modal-cancel-btn" 
                    onClick={closeModal}
                    disabled={loading}
                  >
                    Отмена
                  </button>
                </div>
              </form>
              
              <p className="modal-note">
                Нажимая "Отправить заявку", вы соглашаетесь на обработку персональных данных
              </p>
            </div>
          </div>
        )}  
</>
  );
};

export default SupportPage;