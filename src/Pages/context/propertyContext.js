import { createContext, useState } from "react"
import { properties } from "../../data/propertyData"
export const propertyContext = createContext()
export function PropertyProvider({ children }) {
  const [filterProperties, setFilterProperties] = useState(properties)
  const [search, setSearch] = useState("")
  return (
    <div>
      <propertyContext.Provider value={{
        search, setSearch,
        filterProperties, setFilterProperties
      }}> {children} </propertyContext.Provider>
    </div>
  )
}

