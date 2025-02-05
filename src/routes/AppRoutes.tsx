import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Contacts from "../pages/Contacts";
import Menu from "../pages/Menu";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
