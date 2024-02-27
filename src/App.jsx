import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:id" element={<HomePage />} />
        {/* upload page */}
        <Route path="/upload" element={<h1>Upload</h1>} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

// function App() {
//   const [currVideo, setCurrVideo] = useState(videoData[0]);

//   const [videoList, setVideoList] = useState(videoData);
//   console.log("videoList", videoList);

//   function handleVideoClick(id) {
//     const newCurrVideo = videoList.find((video) => video.id === id);
//     setCurrVideo(newCurrVideo);
//   }

//   return (
//     <main className="App">
//       {/* header component */}
//       <Header />

//       {/* hero component */}
//       <Hero currVideo={currVideo} />

//       <div className="main-info">
//         <div className="main-info__curr-video">
//           {/* main video info component */}
//           <CurrVideo currVideo={currVideo} />

//           {/* comments component */}
//           <Comments currVideo={currVideo} />
//         </div>
//         <div className="main-info__side-videos">
//           {/* video list component */}
//           <SideVideos
//             sideVideos={videoList}
//             currVideo={currVideo}
//             handleVideoClick={handleVideoClick}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

export default App;
