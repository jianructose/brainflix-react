import "./Hero.scss";

// Define the API key
const apiKey = "87db0f55-c275-4878-a7ad-6eb00d9a5c17";

function Hero({ currVideo }) {
  const videoSrc = `${currVideo.video}?api_key=${apiKey}`;

  return (
    <div className="hero">
      <video
        className="hero__video"
        poster={currVideo.image}
        controls
        muted
        loop
      >
        <source src={videoSrc} type="video/mp4" />{" "}
      </video>
    </div>
  );
}

export default Hero;
