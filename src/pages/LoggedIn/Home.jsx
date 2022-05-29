import { useState } from "react";

// files
import Landing from "../../components/Landing";
import Carousel from "../../components/Carousel";
import useLoad from "../../hooks/useLoad";

export default function Home() {
  // local state
  const [movies, setMovies] = useState([]);

  // properties
  const path = "media/categories/content/movies/content";
  // methods
  useLoad(path, setMovies);

  const filteredArr = movies.filter(
    (item) => item.search === "Blockbuster Movies"
  );

  return (
    <div>
      <Landing />
      <Carousel movies={movies} />
    </div>
  );
}
