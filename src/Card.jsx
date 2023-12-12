import "./App.css";

const Card = ({
  img,
  title,
  pref,
  id,
  active,
  setActive,
}) => {
  return (
    <article
      style={{ backgroundImage: `url(${img})` }}
      onClick={() => setActive(id)}
      className={active === id ? "active" : ""}
    >
      <button>{id}</button>
      <div className="desc">
        <h3>{title}</h3>
        <p>{pref}</p>
      </div>
    </article>
  );
};
export default Card;
