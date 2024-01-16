import skalmar from "../images/Skalmar_Obłynos.png";

const Avatar = ({ message }) => {
  return (
    <div className="avatar">
      {message && (
        <div className="avatar-message">
          <p>{message}</p>
        </div>
      )}
      <img src={skalmar} alt="" />
    </div>
  );
};

export default Avatar;
