import skalmar from "../images/Squidward.png";
import welcomeSpongebob from "../images/welcomeSpongebob.gif";
import badAnswereSpongebob from "../images/badAnswereImage.png";

const Avatar = ({ message, menu, badAnswer }) => {
  return (
    <div className="avatar">
      {message && (
        <div className="avatar-message">
          <p>{message}</p>
        </div>
      )}

      {menu ? (
        <img src={welcomeSpongebob} alt="" />
      ) : (
        <img
          src={badAnswer ? badAnswereSpongebob : skalmar}
          alt=""
          className={badAnswer ? "" : "m-bottom"}
        />
      )}
    </div>
  );
};

export default Avatar;
