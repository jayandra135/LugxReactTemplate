import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar/NavbarComponent";

import HomeComponent from "./components/Home/HomeComponent";
import OurShopComponent from "./components/OurShop/OurShopComponent";
import ProductComponent from "./components/ProductDetails/ProductComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import FooterComp from "./components/Footer/FooterComp";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/ourShop" element={<OurShopComponent />} />
          <Route path="/product" element={<ProductComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;
