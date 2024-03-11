import axios from "axios";
import video_thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Upload() {
  const navigate = useNavigate();
  const formRef = useRef();

  // require the user to fill in the form before submitting
  const formValidation = () => {
    const form = formRef.current;
    const title = form.videoTitle.value;
    const description = form.videoDescription.value;

    if (title === "" || description === "") {
      alert("Please fill in the form before submitting");
      return false;
    }
    return true;
  };

  const handlePublish = (e) => {
    e.preventDefault();

    if (!formValidation()) return;

    const newVideo = {
      title: e.target.videoTitle.value,
      description: e.target.videoDescription.value,
    };

    const response = axios.post("http://localhost:8080/videos", newVideo);

    alert(
      "Congrats! Your video has been uploaded successfully ✌️,and you will be redirected to the home page."
    );
    navigate("/");
  };

  return (
    <>
      <div className="divider"></div>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__divider"></div>
        <form className="upload__form" onSubmit={handlePublish} ref={formRef}>
          <div className="upload__container">
            {/* video thumbnail */}
            <div className="upload__top">
              <label className="upload__label">VIDEO THUMBNAIL</label>
              <img
                src={video_thumbnail}
                alt="video_thumbnail"
                className="upload__thumbnail"
              />
            </div>
            <div className="upload__form-container">
              <label htmlFor="" className="upload__label">
                TITLE YOUR VIDEO
              </label>

              <input
                type="text"
                className="upload__input-title"
                name="videoTitle"
                placeholder="Add a title to your video"
              ></input>

              <label htmlFor="" className="upload__label">
                ADD A VIDEO DESCRIPTION
              </label>

              <textarea
                name="videoDescription"
                id=""
                cols="30"
                rows="10"
                className="upload__input-description"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
            <div className="upload__divider"></div>
          </div>
          <div className="upload__button-container">
            <button className="upload__button-publish" type="submit">
              PUBLISH
            </button>
            <button
              className="upload__button-cancel"
              type="button"
              onClick={() => navigate("/")}
            >
              CANCEL
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Upload;
