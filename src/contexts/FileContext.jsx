// npm
import { createContext, useState } from "react";

export const FileContext = createContext();

export default function FileContextProvider({ children }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [image, setImage] = useState(null);
  const [subThumbnail, setSubThumbnail] = useState(null);
  return (
    <FileContext.Provider
      value={{
        thumbnail,
        setThumbnail,
        image,
        setImage,
        subThumbnail,
        setSubThumbnail,
      }}
    >
      {children}
    </FileContext.Provider>
  );
}
