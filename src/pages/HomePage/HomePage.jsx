import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import CurrVideo from "../../components/CurrVideo/CurrVideo";
import Comments from "../../components/Comments/Comments";
import SideVideos from "../../components/SideVideos/SideVideos";
import { useState, useEffect } from "react";
// import videoData from "../../data/video-details.json";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const url = `http://localhost:8080`;

  const [currVideo, setCurrVideo] = useState(null);

  const [videoList, setVideoList] = useState(null);

  const { id } = useParams(); // to get the video id from the url

  // async function to fetch videoData
  const fetchVideoData = async () => {
    try {
      const response = await axios.get(`${url}/videos`);

      const videoData = response.data;
      // set the initial video list as the response data
      setVideoList(videoData);
    } catch (error) {
      console.log("Sorry, there was an error fetching videoData", error);
    }
  };

  // async function to fetch video details by video id
  const fetchVideoDetails = async (id) => {
    try {
      const response = await axios.get(`${url}/videos/${id}`);
      const videoDetails = response.data;
      // assign the video details to currVideo
      setCurrVideo(videoDetails);
    } catch (error) {
      console.log("Sorry, there was an error fetching video details", error);
    }
  };

  // useEffect to fetch videoData once the component mounts
  useEffect(() => {
    fetchVideoData();
  }, []);

  // make id equals to the first video id if it's not provided
  useEffect(() => {
    if (!id && videoList) {
      // id as the first video id
      fetchVideoDetails(videoList[0].id);
    } else if (id && videoList) {
      fetchVideoDetails(id);
    } else {
      console.log(
        "Sorry, there was an error or a wrinkle fetching video details"
      );
    }
  }, [videoList, id]);

  return (
    <main className="App">
      {/* hero component, need to wait for currVideo to be fetched */}
      {currVideo ? <Hero currVideo={currVideo} /> : <p>Loading...</p>}

      {/* header component */}
      <div className="main-info">
        <div className="main-info__curr-video">
          {/* main video info component */}
          {currVideo ? <CurrVideo currVideo={currVideo} /> : <p>Loading...</p>}

          {/* comments component */}
          {currVideo ? <Comments currVideo={currVideo} /> : <p>Loading...</p>}
        </div>
        <div className="main-info__side-videos">
          {/* video list component */}
          {currVideo ? (
            <SideVideos sideVideos={videoList} currVideo={currVideo} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
