import { useState } from "react";
import "../pages/styles/ContactsPage.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "", // Изменено с phone на contact для соответствия sendOrder
    description: "" // Изменено с message на description
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Замените эти значения на свои
  const BOT_TOKEN = "8544607115:AAFrA1GapB8tgluo8V5R3yFlajN6yPicqG4";
  const CHAT_ID = "-5023413115";
  const phoneNumber = "+7 (918) 339-12-32";

  // Используем sendOrder вместо handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Проверка заполнения обязательных полей
    if (!formData.name || !formData.contact || !formData.description) {
      alert("Пожалуйста, заполните обязательные поля: имя, контакт и описание задачи");
      return;
    }

    setLoading(true);

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    const message = `
🎯 НОВАЯ ЗАЯВКА С САЙТА ROBOTSERVICE
━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Имя:* ${formData.name}
📞 *Контакт:* ${formData.contact}
📝 *Описание задачи:*
${formData.description}
━━━━━━━━━━━━━━━━━━━━━━━━
🕒 ${new Date().toLocaleString("ru-RU")}
    `;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setSuccess(true);
        // Сброс формы
        setFormData({
          name: "",
          contact: "",
          description: "",
        });
        
        // Скрыть сообщение об успехе через 5 секунд
        setTimeout(() => setSuccess(false), 5000);
        alert("Заявка отправлена! Мы свяжемся с вами в течение 15 минут.");
      } else {
        alert(`Ошибка отправки: ${data.description || "Неизвестная ошибка"}`);
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке. Пожалуйста, попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contacts-simple">
      {/* Hero секция */}
      <section className="contact-hero-simple">
        <div className="hero-container_2">
          <div className="hero-badge-simple">
            <span>Свяжитесь с нами</span>
          </div>
          <h1 className="hero-title-simple">
            Готовы помочь вашему бизнесу
          </h1>
          <p className="hero-text-simple">
            Мы специализируемся на создании интеллектуальных Telegram-ботов, 
            которые полностью автоматизируют бизнес-процессы, увеличивают продажи 
            и экономят ваше время. Расскажите о своей задаче — мы найдём лучшее решение.
          </p>
        </div>
      </section>

      {/* Основной контент */}
      <section className="contact-content-simple">
        <div className="contact-container">
          
          {/* Левая часть - Информация */}
          <div className="contact-info-simple">
            <div className="phone-block">
              <div className="phone-icon"></div>
              <h2 className="phone-title">Позвоните нам</h2>
              <a 
                href={`tel:${phoneNumber.replace(/\D/g, '')}`} 
                className="phone-number"
              >
                {phoneNumber}
              </a>
              <p className="phone-note">
                Бесплатная консультация по вашему проекту.<br />
                Работаем ежедневно с 9:00 до 21:00.
              </p>
            </div>

            <div className="features-block">
              <h3 className="features-title">Что мы предлагаем:</h3>
              <ul className="features-list">
                <li className="feature-item">Автоматизация рутинных процессов</li>
                <li className="feature-item">Интеллектуальные боты на AI</li>
                <li className="feature-item">Платежные системы в Telegram</li>
                <li className="feature-item">Интеграция с CRM и аналитика</li>
                <li className="feature-item">Быстрая разработка (от 5 дней)</li>
                <li className="feature-item">Техническая поддержка 24/7</li>
              </ul>
            </div>
          </div>

          {/* Правая часть - Простая форма */}
          <div className="contact-form-simple">
            <h2 className="form-title-simple">Быстрая заявка</h2>
            <p className="form-subtitle-simple">
              Оставьте контакты, и мы перезвоним в течение 15 минут
            </p>
            
            {success && (
              <div className="success-message" style={{
                background: "#4CAF50",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "20px",
                textAlign: "center"
              }}>
                Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="simple-form">
              <div className="form-group-simple">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input-simple"
                  placeholder="Ваше имя *"
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="form-group-simple">
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="form-input-simple"
                  placeholder="Номер телефона или Telegram *"
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="form-group-simple">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-textarea-simple"
                  placeholder="Краткое описание задачи *"
                  rows="3"
                  required
                  disabled={loading}
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn-simple"
                disabled={loading}
              >
                {loading ? "Отправка..." : "Отправить заявку"}
              </button>
              
              <p className="form-note-simple">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Простой CTA блок */}
      <section className="cta-simple">
        <div className="cta-container">
          <h2 className="cta-title-simple">Нужен бот для бизнеса?</h2>
          <p className="cta-text-simple">
            Разработаем решение, которое автоматизирует ваши процессы уже через неделю
          </p>
          <a 
            href={`tel:${phoneNumber.replace(/\D/g, '')}`} 
            className="cta-button-simple"
          >
            Позвонить сейчас
          </a>
        </div>
      </section>
    </div>
  );
}