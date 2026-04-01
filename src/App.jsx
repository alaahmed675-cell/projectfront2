import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// المكونات الثابتة
import Navbar from "./component/Navbar";
import Footer from "./component/footer";

// الصفحات
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
