import "./CurrVideo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function CurrVideo(props) {
  return (
    <section className="curr-video">
      <h1 className="curr-video__title">{props.currVideo.title}</h1>
      <div className="curr-video__info">
        <p className="curr-video__channel">{props.currVideo.channel}</p>
        <p className="curr-video__date">{props.currVideo.timestamp}</p>
      </div>
      <div class-name="curr-video__stats">
        <div className="curr-video__views">
          <img
            src={viewsIcon}
            alt="Views icon"
            className="curr-video__views-icon"
          />
          <p className="curr-video__views-count">{props.currVideo.views}</p>
        </div>
        <div className="curr-video__likes">
          <img
            src={likesIcon}
            alt="Likes icon"
            className="curr-video__likes-icon"
          />
          <p className="curr-video__likes-count">{props.currVideo.likes}</p>
        </div>
      </div>
    </section>
  );
}

export default CurrVideo;
