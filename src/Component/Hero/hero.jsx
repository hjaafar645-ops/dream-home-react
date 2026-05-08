import "../Hero/hero.css"
import { useContext, useState } from "react"
import { propertyContext } from "../../Pages/context/propertyContext"
import { useNavigate } from "react-router-dom"
import { properties } from "../../data/propertyData"
function Hero() {
  const navigate = useNavigate()
  const { search, setSearch,
    filterProperties, setFilterProperties } = useContext(propertyContext)
  const [selectType, setSelectType] = useState("")
  const [selectRooms, setSelectRooms] = useState("")
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleApply = () => {
    const value = (search || "").toLowerCase()
    const result = properties.filter((property) => {
      const maSearch = value === "" || property.title?.toLowerCase().includes(value) ||
        property.location?.toLowerCase().includes(value)
      const maRooms = selectRooms === "" ||
        property.bedrooms === Number(selectRooms)
      const maType = selectType === "" ||
        (selectType === "For Sale" && property.salePrice != null) ||
        (selectType === "For Mortgage" && property.mortgagePrice != null) ||
        (selectType === "For Rent" && property.rentPrice != null);
      return maSearch && maRooms && maType
    });
    setFilterProperties(result)
    navigate("/Properties")
  }

  return (
    <div>
      <section className="hero-section">
        <div className="over-lay"></div>
        <video className="hero-video" autoPlay loop muted>
          <source src="/Images/Luxury-white-castle.mp4" type="video/mp4"></source>
        </video>
        <div className="hero-content">
          <h1 className="hero-title">
            Find your dream home today
          </h1>
          <p className="hero-subtitle">
            Explore the finest properties for sale or rent in your area with ease and confidence .
          </p>
          <button className="btn hero-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"> Get Started </button>
        </div>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"> Refine Your Search </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="select-one mb-3">
              <label className="form-label"> Property Type </label>
              <select className="form-select" onChange={(e) => setSelectType(e.target.value)} value={selectType}>
                <option value=""> All </option>
                <option value="For Sale"> For Sale </option>
                <option value="For Rent"> For Rent </option>
                <option value="For Mortgage"> For Mortgage </option>
              </select>
              <div className="select-two mb-3">
                <label className="form-label"> Bedrooms </label>
                <select className="form-select" onChange={(e) => setSelectRooms(e.target.value)} value={selectRooms}>
                  <option value=""> Any </option>
                  <option value="1"> 1 </option>
                  <option value="2"> 2 </option>
                  <option value="3"> 3 </option>
                  <option value="4"> 4 </option>
                  <option value="5"> 5 </option>
                  <option value="6"> 6 </option>
                  <option value="7"> 7 </option>
                  <option value="8"> 8 </option>
                  <option value="9"> 9 </option>
                  <option value="10"> 10 </option>
                </select>
                <div className="select-three">
                  <label className="form-label"> Search </label>
                  <input type="text" className="form-search" placeholder="Search by location title ..." value={search} onChange={handleSearch}></input>
                  <i className="fa fa-search icon-search"></i>
                </div>
                <button className="search-btn" onClick={handleApply}> Apply </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero