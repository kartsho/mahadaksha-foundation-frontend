import './App.css';
// 1. Added Navigate to the react-router-dom imports
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from './component/navbar/NavBar';
import About from './pages/About/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Event from './pages/event/Event';
import Home from './Home/Home';
import Products from './pages/products/Products';
import Services from './pages/services/Services';
import Footer from './component/footer/Footer';
import ScrollTop from './scrollTop/ScrollTop';
import EventDetailed from './pages/event/EventDetailed';
import CarrerLayOut from "./layout/CareerLayout";
import FullTime from "./pages/career/FullTime";
import Internship from "./pages/career/Internship";
import JobDetails from './component/JobDetails/JobDetails';
import CareerApplication from './pages/career/ApplyForm/CareerApplication';

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
        <Route path="/events/:slug" element={<EventDetailed />} />



        {/* Nested Career Routes */}
        {/* <Route path="/career" element={<CarrerLayOut />}>
          <Route index element={<Navigate to="full-time" replace />} />
          <Route path="full-time" element={<FullTime />} />
          <Route path="full-time/:slug" element={<JobDetails />} />
          <Route path="/careers/apply" element={<CareerApplication />} />


          <Route path="internship" element={<Internship />} />
        </Route> */}

        <Route path="/career" element={<CarrerLayOut />}>
          <Route index element={<Navigate to="full-time" replace />} />
          <Route path="full-time" element={<FullTime />} />
          <Route path="full-time/:slug" element={<JobDetails />} />
          <Route path="apply/:slug" element={<CareerApplication />} />

          <Route path="internship" element={<Internship />} />
        </Route>

      </Routes>

      <Footer />
    </>
  );
}

export default App;