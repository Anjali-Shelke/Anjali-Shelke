import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";  // fixed path
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
}

export default App;
