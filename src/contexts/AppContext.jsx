//npm
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [categoryType, setCategoryType] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [optionValue, setOptionValue] = useState("action");
  const [categoryData, setCategoryData] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectValue, setSelectValue] = useState("Blockbuster Movies");

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        optionValue,
        setOptionValue,
        categoryType,
        setCategoryType,
        episodes,
        setEpisodes,
        categoryData,
        setCategoryData,
        seasons,
        setSeasons,
        selectValue,
        setSelectValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
