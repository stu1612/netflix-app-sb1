import { useState } from "react";

// files
import Landing from "../../components/Landing";
import Slider from "../../components/Slider";
import useLoad from "../../hooks/useLoad";

export default function Home() {
  // local state
  const [movies, setMovies] = useState([]);

  // properties
  const path = "media/categories/content/movies/content";
  // methods
  useLoad(path, setMovies);

  console.log(movies);

  return (
    <div>
      <Landing />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </div>
  );
}
