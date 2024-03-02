import video_thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

function Upload() {
  return (
    <>
      <div className="divider"></div>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__divider"></div>
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
          <form className="upload__form">
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
          </form>
          <div className="upload__divider"></div>
          <div className="upload__button-container">
            <button className="upload__button-publish">PUBLISH</button>
            <button className="upload__button-cancel">CANCEL</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Upload;
