
import { useState } from "react";
import "../stylesheets/HoneyCard.css";

function HoneyCard({ image, title, price }) {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function remove() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="honey-card">
      <img className="honey-card__image" src={image} alt={title} />

      <h3 className="honey-card__title">{title}</h3>

      <div className="honey-card__bottom">
        {count === 0 ? (
          <>
            <span className="honey-card__price">От {price}р</span>

            <button className="honey-card__button" onClick={add}>
              +
            </button>
          </>
        ) : (
          <div className="honey-card__counter">
            <button className="honey-card__button" onClick={remove}>
              −
            </button>

            <span className="honey-card__count">{count}</span>

            <button className="honey-card__button" onClick={add}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HoneyCard;
