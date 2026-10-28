
import React, { useState } from "react";
import HoneyCard from "./HoneyCard.jsx";
import GiftModal from "./GiftModal.jsx";
import OrderModal from "./OrderModal.jsx";
import "../stylesheets/HoneyCatalog.css";

function HoneyCatalog() {
  const [showModal, setShowModal] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [cart, setCart] = useState({});
  const [gifts, setGifts] = useState([]);
  

  const honey = [
    { id: 1, title: "Мёд разнотравье", price: 250, image: "/images/honey1.png" },
    { id: 2, title: "Мёд золотарниковый", price: 250, image: "/images/honey2.png" },
    { id: 3, title: "Мёд цветочный", price: 250, image: "/images/honey3.png" },
    { id: 4, title: "Перга", price: 400, image: "/images/honey4.png" },
    { id: 5, title: "Прополис", price: 550, image: "/images/honey5.png" },
    { id: 6, title: "Мёд в сотах (рамка)", price: 2500, image: "/images/honey6.png" }
  ];

  function add(id) {
    setCart(old => ({
      ...old,
      [id]: (old[id] || 0) + 1
    }));
  }

  function remove(id) {
    setCart(old => ({
      ...old,
      [id]: Math.max(0, (old[id] || 0) - 1)
    }));
  }

  function addGift(first, second) {
    setGifts(old => [...old, { first, second }]);
  }

  let total = 0;

  honey.forEach(item => {
    total += item.price * (cart[item.id] || 0);
  });

  total += gifts.length * 500;

  return (
    <div className="catalog-page">

      <div className="honey-catalog">
        {honey.map(item => (
          <HoneyCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            count={cart[item.id] || 0}
            add={() => add(item.id)}
            remove={() => remove(item.id)}
          />
        ))}
      </div>

      <div className="gift-card">
        <div className="gift-info">
          <h2>Подарочный набор</h2>
          <p>От 500р</p>

          <button onClick={() => setShowModal(true)}>
            Выбрать
          </button>
        </div>

        <img src="/images/gift.png" alt="Подарочный набор" />
      </div>

      <div className="order">

        {honey.map(item => (
          cart[item.id] > 0 && (
            <div className="order-row" key={item.id}>
              <span>{item.title}</span>
              <span>{cart[item.id]}</span>
              <span>{item.price * cart[item.id]} руб.</span>
            </div>
          )
        ))}

        {gifts.map((gift, index) => (
          <div className="order-row" key={"gift-" + index}>
            <span>
              Подарочный набор
              <small>{gift.first} + {gift.second}</small>
            </span>
            <span>1</span>
            <span>500 руб.</span>
          </div>
        ))}

        <div className="order-total">
          <span>Итого</span>
          <span>{total} руб.</span>
        </div>

        <button
          className="order-button"
          onClick={() => setShowOrder(true)}
        >
          Заказать
        </button>

      </div>

      {showModal && (
        <GiftModal
          close={() => setShowModal(false)}
          addGift={addGift}
        />
      )}

      {showOrder && (
    <OrderModal close={() => setShowOrder(false)} />
      )}

    </div>
  );
}

export default HoneyCatalog;
