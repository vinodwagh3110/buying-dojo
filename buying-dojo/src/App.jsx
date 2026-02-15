import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/navbar";
import CategoryPage from "./pages/CategoryPage";
import PersonalizedPick from "./components/PersonalizedPick";
import Footer from "./components/Footer";
import Home from "./pages/Home";


function App() {
  return (
    <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/personalizedpick/:category" element={<PersonalizedPick />} />
        </Routes>
        <Footer/>
    </CartProvider>
  );
}

export default App;













