import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about.js";
import Services from "./components/pages/services";
import ContactUs from "./components/pages/contactUs";
import PageNotFound from "./components/pages/pageNotFound";
import Login from "./components/pages/login";

import Navbar from "./components/navbar";
//eslint-disable-next-line
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="relative z-0">
        <div className="-mt-16 pt-16 -mb-16 pb-28 min-h-screen">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
export default App;
