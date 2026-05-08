import { useEffect, useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "../Navbar/navbar.css"
function Navbar() {

  /* ModalState */
  const [modal, setModal] = useState(false)

  /* FormState */
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [number, setNumber] = useState();
  const [numberError, setNumberError] = useState();
  function handleForm(event) {
    event.preventDefault()
    if (name === "") {
      setNameError("Please entre your name !")
    } else { setNameError("") }

    if (email === "") {
      setEmailError("Please entre your email !")
    } else { setEmailError("") }

    if (number === "") {
      setNumberError("Please entre your phone number !")
    } else { setNumberError("") }

    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify({ "NAME": name, "EMAIL": email, "NUMBER": number })
    })
  }

  /* NavbarScroll */
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener(
      "scroll", handleScroll
    )
  }, [])

  /* MobileMenu */

  const [menu, setMenu] = useState(false)
  const menuRef = useRef(null)
  useEffect(() => {
    const handleClcik = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenu(false)
      }
    }
    document.addEventListener(
      "mousedown", handleClcik
    )
  }, [])

  return (
    <div>
      <header>
        <div className="container-fluid">
          <nav className={scroll ? "navbarHeader scroll" : "navbarHeader"} >
            <img className="navImg" src="/Images/logo.png" alt="logo"></img>
            <ul className={menu ? "navbarList open" : "navbarList"} ref={menuRef}>
              <li>
                <NavLink to="/" onClick={() => setMenu(false)}> Home </NavLink>
              </li>
              <li>
                <Link to="Properties" onClick={() => setMenu(false)}> Properties </Link>
              </li>
              <li>
                <Link to="Services" onClick={() => setMenu(false)}> Services </Link>
              </li>
              <li>
                <Link to="About" onClick={() => setMenu(false)}> About </Link>
              </li>
              <li>
                <Link to="Testimonial" onClick={() => setMenu(false)}> Testimonial </Link>
              </li>
              <li>
                <Link to="Contact" onClick={() => setMenu(false)}> Contact </Link>
              </li>
            </ul>
            <button className="btn-donate" onClick={() => setModal(true)}> Request a Visit </button>
            <div className="menu-icon" onClick={() => setMenu(!menu)}>
              <i className="fa fa-bars nav-icon"></i>
            </div>
          </nav>
          {modal && (
            <div className="modal">
              <img src="/Images/logo.png" className="modal-img"></img>
              <div className="modal-content">
                <button className="close-btn" onClick={() => setModal(false)}> <i className="fa fa-window-close icon"></i> </button>
                <h2 className="modal-title"> Request a Visit </h2>
                <form className="modal-form" onSubmit={handleForm}>
                  <input type="text" placeholder="Your Name ..." name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                  {nameError && <p className="error"> {nameError} </p>}
                  <input type="email" placeholder="Your Email ..." name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                  {emailError && <p className="error">{emailError}</p>}
                  <input type="tel" placeholder="Your Phone *****" name="Phone" value={number} onChange={(e) => setNumber(e.target.value)}></input>
                  {numberError && <p className="error"> {numberError} </p>}
                  <button className="btn-visit" type="submit"> Submit </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default Navbar