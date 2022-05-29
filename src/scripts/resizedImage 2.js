// npm
import readFile from "./resizeImage/readFile";
import resizeImage from "./resizeImage/resizeImage";

export default async function resizedImage(event, setter, width, height) {
  const file = event.target.files[0];
  if (file === null) return;
  const image = await readFile(file);
  const resizedImage = await resizeImage(image, width, height);
  setter(resizedImage);
}
