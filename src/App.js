import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Products } from "./components/Pages/Products";
import { Sobre } from "./components/Pages/Sobre";
import { Contact } from "./components/Pages/Contact";
import { Carrinho } from "./components/Pages/Carrinho";
import { Sapatinho } from "./components/Pages/Sapatinho";
import { Cestinho } from "./components/Pages/Cestinho";
import { Bolsa } from "./components/Pages/Bolsa";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/sapatinho" element={<Sapatinho />} />
            <Route path="/cestinho" element={<Cestinho />} />
            <Route path="/bolsa" element={<Bolsa />} />
          </Routes>
        </div>
         <Footer />
      </Router>
  </>
  );
}

export default App;
