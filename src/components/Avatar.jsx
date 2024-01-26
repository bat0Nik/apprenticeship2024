import squidward from "../images/BottomCharacter/Squidward.png";
import welcomeSpongebob from "../images/BottomCharacter/welcomeSpongebob.gif";
import badAnswereSpongebob from "../images/BottomCharacter/badAnswereImage.png";
import goodAnswereSpongebob from "../images/BottomCharacter/goodAnsfereImage.gif";

const Avatar = ({ message, menu, badAnswer, goodAnswer, display }) => {
  let source;

  if (menu) {
    source = welcomeSpongebob;
  } else if (badAnswer) {
    source = badAnswereSpongebob;
  } else if (goodAnswer) {
    source = goodAnswereSpongebob;
  } else {
    source = squidward;
  }

  return (
    <div className="avatar" style={{ display: display ? "flex" : "none" }}>
      {message && (
        <div className="avatar-message">
          <p>{message}</p>
        </div>
      )}

      <img src={source} alt="character" />
    </div>
  );
};

export default Avatar;
