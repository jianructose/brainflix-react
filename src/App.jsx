import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { useState } from "react";
import videoData from "./data/video-details.json";
import CurrVideo from "./components/CurrVideo/CurrVideo";
import Comments from "./components/Comments/Comments";
import SideVideos from "./components/SideVideos/SideVideos";

function App() {
  const [currVideo, setCurrVideo] = useState(videoData[0]);

  const [videoList, setVideoList] = useState(videoData);

  const filteredVideoList = videoList.filter(
    (video) => video.id !== currVideo.id
  );

  return (
    <main>
      {/* header component */}
      <Header />

      {/* hero component */}
      <Hero currVideo={currVideo} />
      {/* main video info component */}
      <CurrVideo currVideo={currVideo} />
      {/* comments component */}
      {/* <Comments currVideo={currVideo} /> */}
      {/* video list component */}
      {/* <SideVideos sideVideos={filteredVideoList} /> */}
    </main>
  );
}

export default App;
