
import Images from "./Navbar/Images";
import Home from "./Navbar/Home";
import Pages from "./Navbar/Pages";
import ErrorPage from "./Navbar/ErrorPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link className="logo">MEGAWIDTH</Link>
        
        <Link to="Pages" className="nav-links">
          Pages
        </Link>
        <Link to="Images" className="nav-links">
          Images
        </Link>
        <Link to="/" className="nav-links">
          Home
        </Link>
      </nav>
      <Routes>
        <Route path="/Pages" element={<Pages />} />
        <Route path="/" element={<Home />} />
        <Route path="/Images" element={<Images />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
