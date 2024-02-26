import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CurrVideo from "./components/CurrVideo/CurrVideo";
import Comments from "./components/Comments/Comments";
import SideVideos from "./components/SideVideos/SideVideos";
import { useState } from "react";
import videoData from "./data/video-details.json";

function App() {
  const [currVideo, setCurrVideo] = useState(videoData[0]);

  const [videoList, setVideoList] = useState(videoData);
  console.log("videoList", videoList);

  function handleVideoClick(id) {
    const newCurrVideo = videoList.find((video) => video.id === id);
    setCurrVideo(newCurrVideo);
  }

  return (
    <main className="App">
      {/* header component */}
      <Header />

      {/* hero component */}
      <Hero currVideo={currVideo} />

      <div className="main-info">
        <div className="main-info__curr-video">
          {/* main video info component */}
          <CurrVideo currVideo={currVideo} />

          {/* comments component */}
          <Comments currVideo={currVideo} />
        </div>
        <div className="main-info__side-videos">
          {/* video list component */}
          <SideVideos
            sideVideos={videoList}
            currVideo={currVideo}
            handleVideoClick={handleVideoClick}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
