
import React from "react"
import './App.css';
import Starting from "./components/starting/starting";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Manufacturer from "./components/manufacturer/manufacturer";
import Supplier from "./components/supplier/supplier";
import Consumer from "./components/consumer/consumer";
import Scan from "./components/manufacturer/scanproduct";
import Check from "./components/manufacturer/checkproduct";
import CheckL from "./components/consumer/checkproduct";
import SScan from "./components/supplier/scanproduct";
function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Starting />} />
          <Route path="/MLogin" element={<Login />} />
          <Route path="/MRegister" element={<Register />} />
          <Route path="/Manufacturer" element={<Manufacturer />} />
          <Route path="/Supplier" element={<Supplier />} />
          <Route path="/Consumer" element={<Consumer />} />
          <Route path="/Scan" element={<Scan />} />
          <Route path="/Check" element={<Check />} />
          <Route path="/LCheck" element={<CheckL />} />
          <Route path="/SScan" element={<SScan />}></Route>

        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
