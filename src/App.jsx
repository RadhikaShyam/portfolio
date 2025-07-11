import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectDetail from "./pages/ProjectDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThankYou from "./pages/ThankYou";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/thank-you" element={<ThankYou />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
