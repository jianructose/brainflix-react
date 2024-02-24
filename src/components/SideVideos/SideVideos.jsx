import "./SideVideos.scss";

function SideVideos(props) {
  console.log("sideVideos", props.sideVideos);

  return (
    <section className="side-videos">
      <h4 className="side-videos__title">NEXT VIDEOS</h4>

      <ul className="side-videos__list">
        {/* map through the sideVideos prop and render a list item for each video */}
        {props.sideVideos
          .filter((video) => video.id !== props.currVideo.id)
          .map((video) => {
            return (
              // add an onClick event to list item to call handleVideoClick function
              <li
                className="side-videos__item"
                key={video.id}
                onClick={() => {
                  props.handleVideoClick(video.id);
                }}
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
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default SideVideos;
