import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from "./components/ContactForm";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<ContactForm/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer2 />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
