import { useContext, useState } from "react";
import { propertyContext } from "../../Pages/context/propertyContext";
import { useNavigate } from "react-router-dom";
import "../Hero/hero.css";

function Hero() {

  /*========== Context ==========*/
  const { search, setSearch, setFilterProperties, properties } = useContext(propertyContext);

  /*========== Navigate ==========*/
  const navigate = useNavigate();

  /*========== States ==========*/
  const [selectType, setSelectType] = useState("");
  const [selectRooms, setSelectRooms] = useState("");

  /*========== HandleSearch ==========*/
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  /*========== HandleApply ==========*/
  const handleApply = () => {
    if (!search?.trim() && selectRooms === "" && selectType === "") {
      alert("Please select at least one filter requirement to refine your search.");
      return; 
    }

    const value = (search || "").toLowerCase();
    const result = (properties || []).filter((property) => {
      const maSearch = value === "" ||
        property.title?.toLowerCase().includes(value) ||
        property.location?.toLowerCase().includes(value);

      const maRooms = selectRooms === "" ||
        property.bedrooms === Number(selectRooms);

      const maType = selectType === "" ||
        (selectType === "For Sale" && property.salePrice != null) ||
        (selectType === "For Mortgage" && property.mortgagePrice != null) ||
        (selectType === "For Rent" && property.rentPrice != null);

      return maSearch && maRooms && maType;
    });

    setFilterProperties(result);

  /*========== Hide/OffCanvas ==========*/
    const container = document.getElementById('offcanvasWithBothOptions');
    if (container) {
      const instance = window.bootstrap?.Offcanvas?.getInstance(container);
      instance?.hide();
    }

    navigate("/Properties");
  };

  return (
    <div className="hero-component">
      <section className="hero-section">
        <div className="over-lay"></div>
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/Images/Luxury-white-castle.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1 className="hero-title">Discover London's Most Elite Residences</h1>
          <p className="hero-subtitle">
            Unveiling a curated portfolio of architectural masterpieces across Kensington, Camden, and Chelsea.
          </p>
          <button
            className="btn hero-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            View Portfolio
          </button>
        </div>

        {/* OffCanvas-Side */}
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Refine Your Search</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <div className="select-one mb-3">
              <label className="form-label">Property Type</label>
              <select className="form-select" onChange={(e) => setSelectType(e.target.value)} value={selectType}>
                <option value="">All</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
                <option value="For Mortgage">For Mortgage</option>
              </select>
            </div> {/* select-one */}

            <div className="select-two mb-3">
              <label className="form-label">Bedrooms</label>
              <select className="form-select" onChange={(e) => setSelectRooms(e.target.value)} value={selectRooms}>
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div> {/* select-two */}

            <div className="select-three mb-4">
              <label className="form-label">Search</label>
              <div className="input-with-icon-wrapper">
                <input
                  type="text"
                  className="form-search"
                  placeholder="Search by location title ..."
                  value={search || ""}
                  onChange={handleSearch}
                />
                <i className="fa fa-search icon-search"></i>
              </div>
            </div> {/* select-three */}

            <button className="search-btn" onClick={handleApply}>Apply Filters</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
