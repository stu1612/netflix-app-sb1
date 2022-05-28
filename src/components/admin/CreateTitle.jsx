// npm
import { useContext, useState } from "react";
// files
import { FileContext } from "../../contexts/FileContext";
import form from "../../data/adminTitle.json";
import InputField from "../InputField";
import InputFile from "../InputFile";
import resizedImage from "../../scripts/resizedImage";
import useCreateTitle from "../../hooks/useCreateTitle";

export default function CreateTitle({ id }) {
  // global state
  const { setThumbnail, setImage } = useContext(FileContext);

  // local state
  const [title, setTitle] = useState("spy game");
  const [text, setText] = useState("cia operatives workign undercover");
  const [search, setSearch] = useState("thriller");
  const [genre, setGenre] = useState("action, thriller, spy");
  const [age, setAge] = useState(18);
  const [cast, setCast] = useState("brad pitt, robert redford");
  const [year, setYear] = useState(1987);
  const [isLiked, setIsLiked] = useState(false);
  const [videoId, setVideoId] = useState(
    "https://www.youtube.com/watch?v=Y9dZ4YLfrhk"
  );

  // properties
  const path = `media/categories/content/${id}/content`;

  const payload = {
    title: title,
    text: text,
    search: search,
    genre: genre,
    age: age,
    cast: cast,
    year: year,
    isLiked: isLiked,
    videoId: videoId,
    thumbnail: "",
    image: "",
  };

  // methods
  const { onSubmit, isLoading, error } = useCreateTitle(path, title, payload);

  function onThumbnail(event) {
    resizedImage(event, setThumbnail, 600, 340);
  }

  function onImage(event) {
    resizedImage(event, setImage, 1200, 840);
  }

  // safeguard
  if (isLoading) return "Loading ..";
  if (error) return "Error ...";

  return (
    <div>
      <form onSubmit={onSubmit} className="form-admin">
        <InputField setup={form.title} state={[title, setTitle]} />
        <InputField setup={form.text} state={[text, setText]} />
        <InputField setup={form.search} state={[search, setSearch]} />
        <InputField setup={form.genres} state={[genre, setGenre]} />
        <InputField setup={form.age} state={[age, setAge]} />
        <InputField setup={form.cast} state={[cast, setCast]} />
        <InputField setup={form.year} state={[year, setYear]} />
        <InputFile imageSelect={onThumbnail} label="Thumbnail" />
        <InputFile imageSelect={onImage} label="Background image" />
        {id !== "series" && (
          <div>
            <InputField setup={form.videoId} state={[videoId, setVideoId]} />
            <small>
              Dont forgot - add the full youtube url for the movie to upload !
            </small>
          </div>
        )}
        <button className="btn-admin">Submit</button>
      </form>
    </div>
  );
}
