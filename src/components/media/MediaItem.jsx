// files
import MediaIcons from "../MediaIcons";
import CloseModal from "../CloseModal";

export default function MediaItem({ item }) {
  // properties
  const { year, age, time, text, cast, genre, modalImg, image, title } = item;

  return (
    <section id="media">
      <CloseModal />
      <div className="top">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <img src={require(`../../assets/images/${modalImg}`)} alt={title} />
        )}

        <MediaIcons item={item} />

        <div className="bg-overlay"></div>
      </div>
      <div className="bottom">
        <div className="content">
          <div className="bio">
            <div className="information">
              <span className="year">{year}</span>
              <span className="age">{age}</span>
              <span className="time">{time}</span>
              {/* <span className="seasons">9 Seasons</span> */}
            </div>
            <div className="description">
              <p>{text}</p>
            </div>
          </div>
          <div className="details">
            <div className="detail">
              <span>Cast:</span>
              <span>{cast}</span>
            </div>
            <div className="detail">
              <span>Genres:</span>
              <span>{genre}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
