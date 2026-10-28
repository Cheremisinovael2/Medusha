
import React, { useState } from "react";
import "../stylesheets/GiftModal.css";

function GiftModal({ close, addGift }) {
  const [first, setFirst] = useState("Мёд цветочный");
  const [second, setSecond] = useState("Мёд золотарниковый");

  const honey = [
    "Мёд золотарниковый",
    "Мёд цветочный",
    "Мёд разнотравье"
  ];

  function saveGift() {
    addGift(first, second);
    close();
  }

  return (
    <div className="modal-background" onClick={close}>
      <div className="gift-modal" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={close}>
          ×
        </button>

        <h2>Соберите подарочный набор</h2>
        <p>Выберите 2 вида мёда для подарочного набора</p>

        <div className="gift-options">

          <div className="gift-option">
            <img src="/images/honey1.png" alt="Первая баночка" />

            {honey.map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="first"
                  checked={first === item}
                  onChange={() => setFirst(item)}
                />
                <span>{item}</span>
                <span>250р</span>
              </label>
            ))}
          </div>

          <div className="gift-option">
            <img src="/images/honey2.png" alt="Вторая баночка" />

            {honey.map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="second"
                  checked={second === item}
                  onChange={() => setSecond(item)}
                />
                <span>{item}</span>
                <span>250р</span>
              </label>
            ))}
          </div>

        </div>

        <div className="gift-total">
          <span>Итого</span>
          <span>500 руб.</span>
        </div>

        <button className="gift-save" onClick={saveGift}>
          Добавить в заказ
        </button>

      </div>
    </div>
  );
}

export default GiftModal;
