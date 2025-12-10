import OrderForm from "../components/OrderForm";
import "../pages/styles/OrderPage.css";

export default function Order() {
  return (
    <div className="order-page">
      <div className="order-wrapper">
        <div className="order-header">
          <h1 className="order-title">Заказать Telegram-бота</h1>
          <p className="order-subtitle">
            Оставьте заявку и мы свяжемся с вами в течение 1 часа
          </p>
        </div>
        
        <OrderForm />
      </div>
    </div>
  );
}