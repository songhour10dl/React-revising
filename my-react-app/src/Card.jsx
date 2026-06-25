import ProfilePic from "./assets/2.png";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={ProfilePic} alt="Profile picture" />
      <h2 className="card-title">Songhour</h2>
      <p className="card-text">i love to eat and sleep</p>
    </div>
  );
}

export default Card;
