import "./Comments.scss";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";

function Comments({ currVideo }) {
  const url = `https://project-2-api.herokuapp.com`;
  // Define the API key
  const apiKey = "87db0f55-c275-4878-a7ad-6eb00d9a5c17";

  const [comments, setComments] = useState([]);

  // async function to fetch comments
  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${url}/videos/${currVideo.id}?api_key=${apiKey}`
      ); // https://project-2-api.herokuapp.com/videos/:videoId/comments

      // set the initial comments list as the response data
      setComments(response.data.comments);
    } catch (error) {
      console.log("There was an error fetching comments", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    // comments section
    <section className="comments">
      {/* comments count */}
      <h4 className="comments__count">
        {currVideo.comments.length} Comment
        {currVideo.comments.length > 1 ? "s" : ""}
      </h4>

      <form className="form">
        {/* form avatar */}
        <img src={userAvatar} alt="user avatar" className="form__avatar" />

        <div className="form__input-container">
          {/* form label */}
          <label htmlFor="comment" className="form__label">
            JOIN THE CONVERSATION
          </label>
          <div className="form__input-top">
            {/* form input */}
            <textarea
              className="form__input"
              placeholder="Add a new comment"
            ></textarea>

            {/* form button */}
            <button className="form__button">COMMENT</button>
          </div>
        </div>
      </form>

      {/* a divider */}
      <div className="divider"></div>

      {/* display comments list */}

      {currVideo.comments.map((comment) => {
        return (
          <ul className="comments__list" key={comment.id}>
            <li className="comments__item">
              <img className="comments__avatar" />
              <div className="comments__info">
                <div className="comments__top">
                  <h5 className="comments__name">{comment.name}</h5>
                  <p className="comments__date">
                    {/* format timestamp */}
                    {formatDistanceToNow(new Date(comment.timestamp), {
                      addSuffix: true,
                    })}{" "}
                  </p>
                </div>
                {/* comment text*/}
                <p className="comments__text">{comment.comment}</p>
              </div>
            </li>
            <div className="divider"></div>
          </ul>
        );
      })}
    </section>
  );
}

export default Comments;
