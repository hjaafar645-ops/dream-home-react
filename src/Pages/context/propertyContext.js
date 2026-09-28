import { createContext, useState, useEffect } from "react";
import { properties as initialProperties } from "../../data/propertyData";
export const propertyContext = createContext();

export function PropertyProvider({ children }) {

  /*========== State-Properties ==========*/
  const [properties, setProperties] = useState(() => {
    const savedData = localStorage.getItem("aura_properties");
    if (savedData && savedData !== "undefined") {
      try {
        const parsed = JSON.parse(savedData);
        if (Array.isArray(parsed)) return parsed;
      } catch (error) {
        localStorage.removeItem("aura_properties");
      }
    }
    return initialProperties;
  });

  useEffect(() => {
    localStorage.setItem("aura_properties", JSON.stringify(properties));
  }, [properties]);

  /*========== State-Filter ==========*/
  const [filterProperties, setFilterProperties] = useState(properties);
  const [search, setSearch] = useState("");

  /*========== State-Favorites ==========*/
  const [favorites, setFavorites] = useState(() => {
    const savedData = localStorage.getItem("aura_favorites");
    if (savedData && savedData !== "undefined") {
      try {
        const parsed = JSON.parse(savedData);
        if (Array.isArray(parsed)) return parsed;
      } catch (error) {
        localStorage.removeItem("aura_favorites");
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("aura_favorites", JSON.stringify(favorites));
  }, [favorites]);

  /*========== State-Compare ==========*/
  const [compareList, setCompareList] = useState(() => {
    const savedData = localStorage.getItem("aura_compare");
    if (savedData && savedData !== "undefined") {
      try {
        const parsed = JSON.parse(savedData);
        if (Array.isArray(parsed)) return parsed;
      } catch (error) {
        localStorage.removeItem("aura_compare");
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("aura_compare", JSON.stringify(compareList));
  }, [compareList]);

  /*========== Fix/Fallback-Data ==========*/
  useEffect(() => {
    if (!properties || properties.length === 0) {
      setProperties(initialProperties);
      setFilterProperties(initialProperties);
      localStorage.setItem("aura_properties", JSON.stringify(initialProperties));
    }
  }, []);

  /*========== Handle-ScrollToTop ==========*/
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /*========== Effect/Search-Filter ==========*/
  useEffect(() => {
    const value = (search || "").toLowerCase().trim();
    if (value === "") {
      setFilterProperties(properties);
      return;
    }
    const filtered = (properties || []).filter((property) => {
      return property.location?.toLowerCase().includes(value) ||
        property.title?.toLowerCase().includes(value);
    });
    setFilterProperties(filtered);
  }, [search, properties]);

  /*========== Crud-Favorites ==========*/
  const toggleFavorite = (property) => {
    setFavorites((prevFavs) => {
      const isExist = prevFavs.find((item) => item.id === property.id);
      if (isExist) return prevFavs.filter((item) => item.id !== property.id);
      return [...prevFavs, property];
    });
  };

  /*========== Crud-Compare ==========*/
  const addToCompare = (property) => {
    setCompareList((prevList) => {
      const isExist = prevList.find((item) => item.id === property.id);
      if (isExist) return prevList;
      if (prevList.length >= 3) {
        alert("Maximum 3 properties can be compared simultaneously.");
        return prevList;
      }
      return [...prevList, property];
    });
  };

  const removeFromCompare = (id) => {
    setCompareList((prevList) => prevList.filter((item) => item.id !== id));
  };

  /*========== Crud-Admin ==========*/
  const addProperty = (newProperty) => {
    setProperties((prev) => [newProperty, ...prev]);
  };

  const deleteProperty = (id) => {
    setProperties((prev) => prev.filter((item) => item.id !== id));
    setFavorites((prev) => prev.filter((item) => item.id !== id));
    setCompareList((prev) => prev.filter((item) => item.id !== id));
  };

  const resetProperties = () => {
    localStorage.removeItem("aura_properties");
    setProperties(initialProperties);
    setFilterProperties(initialProperties);
  };

  return (
    <propertyContext.Provider
      value={{
        properties,
        setProperties,
        search,
        setSearch,
        filterProperties,
        setFilterProperties,
        favorites,
        toggleFavorite,
        compareList,
        addToCompare,
        removeFromCompare,
        addProperty,
        deleteProperty,
        resetProperties, 
        scrollToTop
      }}
    >
      {children}
    </propertyContext.Provider>
  );
}
