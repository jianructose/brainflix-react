import "./SideVideos.scss";
import { Link, useNavigate } from "react-router-dom";

function SideVideos({ currVideo, sideVideos }) {
  // console.log("sideVideos", props.sideVideos);

  return (
    <section className="side-videos">
      <h4 className="side-videos__title">NEXT VIDEOS</h4>

      <ul className="side-videos__list">
        {/* map through the sideVideos prop and render a list item for each video */}

        {sideVideos
          .filter((video) => video.id !== currVideo.id)
          .map((video) => {
            return (
              <Link
                className="side-videos__link"
                key={video.id}
                to={`/videos/${video.id}`}
              >
                <img
                  src={video.image}
                  alt="video thumbnail"
                  className="side-videos__thumbnail"
                />
                <div className="side-videos__info">
                  <h5 className="side-videos__info-title">{video.title}</h5>
                  <p className="side-videos__info-channel"> {video.channel}</p>
                </div>
              </Link>
            );
          })}
      </ul>
    </section>
  );
}

export default SideVideos;
