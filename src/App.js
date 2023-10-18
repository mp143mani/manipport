import "./App.css";
import {BrowserRouter as Router,Routes, Route,Navigate}from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Appcertificate from "./Components/Certificate/Appcertificate";
import Appproject from "./Components/Projects/Appproject";
import Home from "./Components/Home/Home";
import AppSkilll from "./Components/Skills/AppSkilll";

import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       
        <Routes>
         <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/project" element={<Appproject />} />

        <Route path="/home" element={<Home />} />
        <Route path="/certificate" element={<Appcertificate/>} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<AppSkilll />} />
        <Route path="/contact" element={<Contact />} /> 
        </Routes>
       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
