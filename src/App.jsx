import './App.css';  
// 1. Added Navigate to the react-router-dom imports
import { Routes, Route, Navigate } from "react-router-dom"; 

import NavBar from './navbar/NavBar';
import About from './About/About';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import Event from './event/Event';
import Home from './Home/Home';
import Products from './products/Products';
import Services from './services/Services';
import Footer from './footer/Footer';
import ScrollTop from './scrollTop/ScrollTop';
import EventDetailed from './event/EventDetailed';
import CarrerLayOut from "./layout/CareerLayout";
import FullTime from "./pages/FullTime";
import Internship from "./pages/Internship";

function App() {
  return (
    <>
      <ScrollTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/event" element={<Event />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/event/event-in-detailed" element={<EventDetailed />} />
        

        {/* Nested Career Routes */}
        <Route path="/career" element={<CarrerLayOut />}>
          <Route index element={<Navigate to="full-time" replace />} />
          <Route path="full-time" element={<FullTime />} />
          <Route path="internship" element={<Internship />} />
        </Route> 
      </Routes> 

      <Footer />
    </>
  );
}

export default App;