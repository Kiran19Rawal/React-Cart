import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";

import NavBar from "./components/NavBar";
import CartPage from "./components/CartPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
