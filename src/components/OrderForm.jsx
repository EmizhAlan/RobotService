import { useState } from "react";
import "../components/styles/OrderForm.css"; // Создайте этот файл для стилей

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    type: "",
    budget: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Замените эти значения на свои
  const BOT_TOKEN = "8544607115:AAFrA1GapB8tgluo8V5R3yFlajN6yPicqG4";
  const CHAT_ID = "-5023413115"; // Ваш Telegram ID или ID чата/канала 987073868

  const sendOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Проверка заполнения обязательных полей
    if (!form.name || !form.contact || !form.description) {
      alert("Пожалуйста, заполните обязательные поля: имя, контакт и описание задачи");
      setLoading(false);
      return;
    }

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    const message = `
🎯 НОВАЯ ЗАЯВКА С САЙТА ROBOTSERVICE
━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Имя:* ${form.name}
📞 *Контакт:* ${form.contact}
🤖 *Тип проекта:* ${form.type || "Не указан"}
💰 *Бюджет:* ${form.budget || "Не указан"}
━━━━━━━━━━━━━━━━━━━━━━━━
📝 *Описание задачи:*
${form.description}
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
        setForm({
          name: "",
          contact: "",
          type: "",
          budget: "",
          description: "",
        });
        
        // Скрыть сообщение об успехе через 5 секунд
        setTimeout(() => setSuccess(false), 5000);
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
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="order-form-container">
      {success && (
        <div className="success-message">
          ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
        </div>
      )}
      
      <form className="order-form" onSubmit={sendOrder}>
        <div className="form-header">
          <h3 className="form-title">Оставить заявку</h3>
          <p className="form-subtitle">Заполните форму и мы свяжемся с вами для обсуждения проекта</p>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Ваше имя <span className="required"></span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Иван Иванов"
              value={form.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact" className="form-label">
              Контакт для связи <span className="required"></span>
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              placeholder="Telegram, почта или телефон"
              value={form.contact}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="type" className="form-label">
              Тип проекта
            </label>
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Выберите тип проекта</option>
              <option value="магазин">Магазин / каталог</option>
              <option value="crm">CRM / админ-панель</option>
              <option value="чат">Чат-бот с логикой</option>
              <option value="интеграции">API интеграции</option>
              <option value="парсер">Парсер данных</option>
              <option value="автоматизация">Автоматизация процессов</option>
              <option value="другое">Другое</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budget" className="form-label">
              Бюджет проекта
            </label>
            <input
              id="budget"
              name="budget"
              type="text"
              placeholder="Например: 50 000 ₽"
              value={form.budget}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="description" className="form-label">
            Описание задачи <span className="required"></span>
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Опишите вашу задачу, цели проекта, требования и пожелания..."
            value={form.description}
            onChange={handleChange}
            required
            className="form-textarea"
            rows={5}
          />
        </div>

        <div className="form-footer">
          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Отправка...
              </>
            ) : (
              "Отправить заявку"
            )}
          </button>
          
          <p className="form-note">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </div>
      </form>
    </div>
  );
}