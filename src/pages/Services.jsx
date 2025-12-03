import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div>
      <h1>Услуги</h1>

      <ServiceCard
        title="Боты для бизнеса"
        description="CRM, продажи, заявки, аналитика"
      />

      <ServiceCard
        title="Автоматизация"
        description="Парсеры, интеграции, API"
      />

      <ServiceCard
        title="Приём платежей"
        description="ЮКасса, CryptoCloud, TgPay"
      />
    </div>
  );
}
