import "./Comments.scss";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import { formatDistanceToNow } from "date-fns";

function Comments(props) {
  // length of comments
  return (
    // comments section
    <section className="comments">
      {/* comments count */}
      <h4 className="comments__count">
        {props.currVideo.comments.length} Comment
        {props.currVideo.comments.length > 1 ? "s" : ""}
      </h4>

      <form className="form">
        {/* form avatar */}
        <img src={userAvatar} alt="user avatar" className="form__avatar" />

        <div className="form__input-container">
          <div className="form__input-top">
            {/* form label */}
            <label htmlFor="comment" className="form__label">
              JOIN THE CONVERSATION
            </label>
            {/* form input */}
            <textarea
              className="form__input"
              placeholder="Add a new comment"
            ></textarea>
          </div>

          {/* form button */}
          <button className="form__button">COMMENT</button>
        </div>
      </form>

      {/* a divider */}
      <div className="divider"></div>

      {/* display comments list */}

      {props.currVideo.comments.map((comment) => {
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
