import './App.css'
import NavBar from './navbar/NavBar'
import { Routes, Route } from "react-router-dom";
import About from './About/About'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Event from './event/Event'
import Home from './Home/Home'
import Products from './products/Products'
import Services from './services/Services';
import Footer from './footer/Footer';
import ScrollTop from './scrollTop/ScrollTop';
import EventDetailed from './event/EventDetailed';
import Carrer from './carrer/Carrer';
// import HeadLine from './Home/HeadLine'
function App() {

  return (
    <>
     <ScrollTop/>
     <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        <Route path="/event" element={<Event />} />
        <Route path="/product" element={<Products />} />
           <Route path="/services" element={<Services />} />
           <Route path="/event/event-in-detailed" element={<EventDetailed />} />
           <Route path="/event" element={<Carrer />} />
             <Route path="/services" element={<Services />} />
      </Routes>
      

      <Footer/>
    </>
  )
}

export default App
