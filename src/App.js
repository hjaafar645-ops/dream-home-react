import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PropertyProvider } from "./Pages/context/propertyContext";
import Navbar from "./Component/Navbar/navbar";
import Home from "./Pages/Home/home";
import Properties from "./Pages/Properties/Properties";
import PropertiesDetails from "./Pages/PropertiesDetails/propertiesDetails";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Component/Footer/footer";
import Favorites from "./Pages/Favorites/Favorites";
import Admin from "./Pages/Admin/Admin";
import Compare from "./Pages/Compare/Compare";
import NotFound from "./Pages/NotFound/NotFound";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="luxury-realestate-app">
      <BrowserRouter>
        <PropertyProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Properties" element={<Properties />} />
            <Route path="/PropertiesDetails/:id" element={<PropertiesDetails />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<About />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Compare" element={<Compare />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PropertyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
