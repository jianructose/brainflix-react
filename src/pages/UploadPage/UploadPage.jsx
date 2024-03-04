import video_thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useNavigate } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();

  const handlePublish = (e) => {
    e.preventDefault();
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
        <form className="upload__form" onSubmit={handlePublish}>
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
            <button className="upload__button-cancel" type="button">
              CANCEL
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Upload;
