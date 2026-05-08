import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PropertyProvider } from "./Pages/context/propertyContext"
import Navbar from "./Component/Navbar/navbar"
import Home from "./Pages/Home/home"
import Properties from "./Pages/Properties/Properties"
import Services from "./Pages/Services/Services"
import About from "./Pages/About/About"
import Testimonial from "./Pages/Testimonial/Testimonial"
import Contact from "./Pages/Contact/Contact"
import "bootstrap-icons/font/bootstrap-icons.css"
function App() {
  return (
    <div>
      <PropertyProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Properties" element={<Properties />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Testimonial" element={<Testimonial />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </PropertyProvider>
    </div>
  )
}

export default App 