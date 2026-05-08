import Cards from "../../Component/Cards/cards"
import { useContext } from "react"
import { propertyContext } from "../context/propertyContext"
import "../Properties/Properties.css"
function Properties() {
  const { filterProperties } = useContext(propertyContext)
  return (
    <div>
      <main>
        {filterProperties.length === 0 ? (
          <h2 className="result"> No results found Try another search <i className="fa fa-search" style={{ color: "rgb(255, 191, 0)" }}></i> </h2>) :
          <Cards properties={filterProperties} />
        }
      </main>
    </div>
  )
}

export default Properties