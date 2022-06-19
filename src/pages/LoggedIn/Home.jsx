import { useState } from "react";

// files
import Jumbotron from "../../components/Jumbotron";
import Carousel from "../../components/carousel/Carousel";
import useLoad from "../../hooks/useLoad";

export default function Home() {
  // local state
  const [movies, setMovies] = useState([]);

  // properties
  const path = "media/categories/content/movies/content";
  // methods
  useLoad(path, setMovies);

  // const filteredArr = movies.filter(
  //   (item) => item.search === "Blockbuster Movies"
  // );

  return (
    <div className="home">
      <Jumbotron />
      <div className="medias">
        <Carousel movies={movies} />
      </div>
      {/* <Carousel movies={movies} /> */}
    </div>
  );
}
