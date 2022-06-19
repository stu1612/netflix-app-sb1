import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";

export default function SelectField() {
  // properties
  const { selectValue, setSelectValue } = useContext(AppContext);

  // methods
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <select id="category" value={selectValue} onChange={handleChange}>
      <option value="blockbuster">Blockbuster Movies</option>
      <option value="home-page">Home Page</option>
      <option value="popular-comedies">Popular Comedies</option>
      <option value="action-comedies">Action comedies</option>
      <option value="oscar-movie">Oscar Winning Movies</option>
      <option value="trending-movies">Trending Movies</option>
      <option value="drama-documentaries">Drama Documentaries</option>
      <option value="popular-documentaries">Popular Documentaries</option>
      <option value="trending-horror">Trending Horror Movies</option>
      <option value="popular-on-netflix">Popular on Netflix</option>
      <option value="golden-globe-comedies">
        Golden Globe Award Winning Comedies
      </option>
      <option value="award-winning-tv">Award Winning TV Programmes</option>
      <option value="popular-dramas">Popular Dramas</option>
    </select>
  );
}
