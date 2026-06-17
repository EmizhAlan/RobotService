import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Order from "./pages/Order";
import Cases from "./pages/Cases";
import Сontacts from "./pages/Сontacts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Cookies from "./pages/Cookies.jsx";
import SupportPage from "./footerpages/SupportPage.jsx"
import Catalog from "./pages/Catalog"
import Workshop from "./pages/Workshop"
import News from "./pages/News"
import Resources from "./pages/Resources"
import SupportClient from "./pages/SupportClient"
import Documentation from "./pages/Documentation"

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
        <Route path="/supportme" element={<SupportPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/workshops" element={<Workshop />} />
        <Route path="/news" element={<News />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<SupportClient />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
