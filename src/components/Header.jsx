import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: 15 }}>Главная</Link>
      <Link to="/services" style={{ marginRight: 15 }}>Услуги</Link>
      <Link to="/cases" style={{ marginRight: 15 }}>Кейсы</Link>
      <Link to="/order">Заказать</Link>
    </nav>
  );
}
