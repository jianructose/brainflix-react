import "./Comments.scss";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import likeIcon from "../../assets/icons/likes.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import { formatDistanceToNow, set } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Comments({ currVideo }) {
  const url = `https://unit-3-project-api-0a5620414506.herokuapp.com`;
  // Define the API key
  const apiKey = "87db0f55-c275-4878-a7ad-6eb00d9a5c17";

  const [comments, setComments] = useState([]);
  const [commentPosted, setCommentPosted] = useState(false);
  const navigate = useNavigate();

  // async function to fetch comments
  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `${url}/videos/${currVideo.id}?api_key=${apiKey}`
      );

      // set the initial comments list as the response data
      setComments(data.comments);
    } catch (error) {
      console.log("There was an error fetching comments", error);
    }
  };

  // handle comment submit
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const comment = {
      name: "Mohan Muruge",
      comment: e.target.comment.value,
    };

    try {
      await axios.post(
        `${url}/videos/${currVideo.id}/comments?api_key=${apiKey}`,
        comment
      );
      console.log("Comment has been posted successfully");
      setCommentPosted(true);
    } catch (error) {
      console.log("There was an error posting the comment", error);
    }

    // refresh the comment list

    e.target.comment.value = "";
  };

  // asyc function to delete a comment
  const deleteComment = async (commentId) => {
    try {
      await axios.delete(
        `${url}/videos/${currVideo.id}/comments/${commentId}?api_key=${apiKey}`
      );
      // console.log(`Comment from ${commentId} has been deleted successfully`);

      // refetch comments
      await fetchComments();
      navigate(`/videos/${currVideo.id}`); // refresh the page

      // console.log("comments after delete", comments);

      // setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.log("There was an error deleting the comment", error);
    }
  };

  // useEffect to fetch comments every time the currVideo comments list changes
  useEffect(() => {
    fetchComments();
  }, []);

  // useEffect to refetch comments after a comment has been posted
  // useEffect(() => {
  //   if (commentPosted) {
  //     fetchComments();
  //     navigate(`/videos/${currVideo.id}`);
  //     setCommentPosted(false);
  //   }
  // }, [commentPosted]);

  return (
    // comments section
    <section className="comments">
      {/* comments count */}
      <h4 className="comments__count">
        {currVideo.comments.length} Comment
        {currVideo.comments.length > 1 ? "s" : ""}
      </h4>

      <form className="form" onSubmit={handleCommentSubmit}>
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
              name="comment"
              type="text"
              id="comment"
            ></textarea>

            {/* form button */}
            <button
              className="form__button"
              type="submit"
              id="submit"
              name="submit"
            >
              COMMENT
            </button>
          </div>
        </div>
      </form>

      {/* a divider */}
      <div className="divider"></div>

      {/* display comments list */}

      {currVideo.comments
        .filter((comment) => comment.id !== null)
        .map((comment) => {
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
                  <div className="comments__buttons">
                    <img src={likeIcon} alt="like icon" />
                    <p className="comments__like-count">{comment.likes}</p>
                    <img
                      src={deleteIcon}
                      alt="delete icon"
                      onClick={() => deleteComment(comment.id)}
                    />
                  </div>
                </div>
                {/* add like and delete button with icon */}
              </li>
              <div className="divider"></div>
            </ul>
          );
        })}
    </section>
  );
}

export default Comments;
