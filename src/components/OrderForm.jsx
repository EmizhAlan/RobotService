import { useState } from "react";

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    type: "",
    budget: "",
    description: "",
  });

  const sendOrder = async (e) => {
    e.preventDefault();

    const url = "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage";
    const message = `
🔥 Новая заявка
👤 Имя: ${form.name}
📩 Контакт: ${form.contact}
🤖 Тип бота: ${form.type}
💵 Бюджет: ${form.budget}
📄 Описание: ${form.description}
    `;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "<YOUR_TELEGRAM_ID>",
        text: message,
      }),
    });

    alert("Заявка отправлена!");
  };

  return (
    <form className="order-form" onSubmit={sendOrder}>
      <input
        type="text"
        placeholder="Ваше имя"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Ваш Telegram или почта"
        value={form.contact}
        onChange={e => setForm({ ...form, contact: e.target.value })}
      />

      <select
        value={form.type}
        onChange={e => setForm({ ...form, type: e.target.value })}
      >
        <option value="">Выберите тип бота</option>
        <option value="магазин">Магазин / каталог</option>
        <option value="crm">CRM / админ-панель</option>
        <option value="чат">Чат-бот с логикой</option>
        <option value="интеграции">API интеграции</option>
      </select>

      <input
        type="text"
        placeholder="Ваш бюджет"
        value={form.budget}
        onChange={e => setForm({ ...form, budget: e.target.value })}
      />

      <textarea
        placeholder="Опишите задачу"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />

      <button type="submit">Отправить заявку</button>
    </form>
  );
}
