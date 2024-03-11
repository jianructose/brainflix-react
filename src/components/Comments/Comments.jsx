import "./Comments.scss";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import likeIcon from "../../assets/icons/likes.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import { formatDistanceToNow, set } from "date-fns";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Comments({ currVideo }) {
  const url = `http://localhost:8080`;

  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const formRef = useRef(); // form reference to reset the form after submit

  // async function to fetch comments
  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`${url}/videos/${currVideo.id}`);

      // set the initial comments list as the response data
      setComments(data.comments);
    } catch (error) {
      console.log("There was an error fetching comments", error);
    }
  };

  // useEffect to fetch comments every time the currVideo comments list changes
  useEffect(() => {
    fetchComments();
  }, []);

  // handle comment submit
  // ❓❓?? no idea why this addComment not rendering the new comment immediately??
  const addComment = async (e) => {
    e.preventDefault();
    // add comment to the backend server, and then update the state with the new comment

    const { comment } = formRef.current;
    // console.log(comment.value);

    const newComment = {
      comment: comment.value,
    };

    const addNewComment = async () => {
      try {
        const response = await axios.post(
          `${url}/videos/${currVideo.id}/comments`,
          newComment
        );
        console.log(response.data);
        setComments([response.data, ...comments]); // add new comment to the front of the comments list
        formRef.current.reset();
      } catch (error) {
        console.log("There was an error posting the comment \n", error);
      }
    };

    addNewComment();

    // reset the form
  };

  // fetch comments everytime the comments list changes
  useEffect(() => {
    fetchComments();
  }, [currVideo.comments]);

  // asyc function to delete a comment
  const deleteComment = async (commentId) => {
    const deleteComment = async () => {
      try {
        const response = await axios.delete(
          `${url}/videos/${currVideo.id}/comments/${commentId}`
        ); // response is the updated video details

        const { comments } = response.data;
        setComments(comments);
      } catch (error) {
        console.log("There was an error deleting the comment", error);
      }
    };
    deleteComment();
  };

  const renderedComments = currVideo.comments
    .filter((comment) => comment.id !== null) // filter out comments with null id
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
                <img
                  src={likeIcon}
                  alt="like icon"
                  className="comments__like"
                />
                <p className="comments__like-count">{comment.likes}</p>
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={() => deleteComment(comment.id)}
                  className="comments__delete"
                />
              </div>
            </div>
            {/* add like and delete button with icon */}
          </li>
          <div className="divider"></div>
        </ul>
      );
    });

  return (
    // comments section
    <section className="comments">
      {/* comments count */}
      <h4 className="comments__count">
        {currVideo.comments.length} Comment
        {currVideo.comments.length > 1 ? "s" : ""}
      </h4>
      <form className="form" onSubmit={addComment} ref={formRef}>
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

      {renderedComments}
    </section>
  );
}

export default Comments;
