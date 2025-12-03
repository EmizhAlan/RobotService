export default async function sendOrder(data) {
  console.log("Отправка заявки:", data);

  // здесь позже будет реальный запрос
  // return fetch("/api/order", {...})

  return new Promise((resolve) => setTimeout(resolve, 500));
}
