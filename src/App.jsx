import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Order from "./pages/Order";
import Cases from "./pages/Cases";
import Сontacts from "./pages/Cases";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
