import { useContext, useState, useEffect } from "react"
import { propertyContext } from "../context/propertyContext"
import Cards from "../../Component/Cards/cards"
import Loading from "../../Component/Loading/Loading"
import "../Properties/Properties.css"

function Properties() {

  /*========== Context ==========*/
  const { filterProperties } = useContext(propertyContext)

  /*========== Visibility/State ==========*/
  const [isVisible, setIsVisible] = useState(false);

  /*========== Loading/State ==========*/
  const [loading, setLoading] = useState(true);

  /*========== Effect/Visibility ==========*/
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  /*========== Effect/Timeout ==========*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  /*========== Handle/ScrollToTop ==========*/
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return <Loading />
  }

  return (
    <article>
      <main className="container-prop">
        {filterProperties.length === 0 ? (
          <p className="result">
            No results found. Try another search
            <i className="fa fa-search-icon-lux fa-search"></i>
          </p>
        ) : (
          <Cards properties={filterProperties} />
        )}
      </main>

      <button
        className={`scroll-to-top-btn ${isVisible ? "scroll-btn-visible" : ""}`}
        type="button"
        onClick={handleScroll} 
        title="Scroll back to top"
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </article>
  )
}

export default Properties;
