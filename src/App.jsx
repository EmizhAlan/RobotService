import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Order from "./pages/Order";
import Cases from "./pages/Cases";
import Сontacts from "./pages/Cases";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Cookies from "./pages/Cookies.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/contacts" element={<Сontacts />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
