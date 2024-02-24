import videoData from "../../data/videos.json";
import "./Hero.scss";

function Hero(props) {
  return (
    <div className="hero">
      <video
        className="hero__video"
        poster={props.currVideo.image}
        controls
      ></video>
      <source src={props.currVideo.video} type="video/mp4" />
    </div>
  );
}

export default Hero;
