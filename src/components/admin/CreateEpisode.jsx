// npm
import { useState, useContext } from "react";

// files
import { FileContext } from "../../contexts/FileContext";
import form from "../../data/adminEpisode.json";
import InputField from "../InputField";
import InputFile from "../InputFile";
import resizedImage from "../../scripts/resizedImage";
import useCreateEpisode from "../../hooks/useCreateEpisode";
import validateString from "../../scripts/validateString";

export default function CreateEpisode({ params }) {
  // global state
  const { setSubThumbnail } = useContext(FileContext);

  // local state
  const [title, setTitle] = useState("Episode 1");
  const [text, setText] = useState("");
  const [videoId, setVideoId] = useState("");

  // properties
  const { subId, lastId } = params;

  const path = `media/categories/content/series/content/${subId}/content/${lastId}/content`;

  const payload = {
    title: title,
    text: text,
    thumbnail: "",
  };

  // methods
  const { onSubmit, isLoading, error } = useCreateEpisode(
    path,
    lastId,
    title,
    payload
  );

  function onImageSelect(event) {
    resizedImage(event, setSubThumbnail, 600, 340);
  }

  // safeguard
  if (isLoading) return "Loading ..";
  if (error) return "Error ...";

  return (
    <form onSubmit={onSubmit}>
      <InputField setup={form.title} state={[title, setTitle]} />
      <InputField setup={form.text} state={[text, setText]} />
      <InputField
        setup={form.videoId}
        state={[videoId, setVideoId]}
        validation={validateString}
      />
      <InputFile imageSelect={onImageSelect} placeholder="Add thumbnail" />
      <button>Submit</button>
    </form>
  );
}
