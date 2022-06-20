// npm
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

  function returnSearchedMovies(category) {
    const filteredItems = movies.filter((item) => item.search === category);
    return filteredItems;
  }

  const blockbusters = returnSearchedMovies("blockbuster");
  const popularComedies = returnSearchedMovies("popular-comedies");
  const oscars = returnSearchedMovies("oscar-movie");

  return (
    <div className="home">
      <Jumbotron />
      <div className="medias">
        <Carousel movies={blockbusters} title="Blockbuster Movies" />
        <Carousel movies={popularComedies} title="Popular Comedies" />
        <Carousel movies={oscars} title="Oscar Award Winning Movies" />
      </div>
    </div>
  );
}
