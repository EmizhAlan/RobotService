import CaseCard from "../components/CaseCard";

export default function Cases() {
  return (
    <div>
      <h1>Кейсы</h1>

      <CaseCard
        title="Бот для интернет-магазина"
        result="Автоматизировали приём заказов → +37% конверсии"
      />

      <CaseCard
        title="Парсер Wildberries"
        result="Мониторинг цен и остатков для бизнеса"
      />
    </div>
  );
}
