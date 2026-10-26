import React from "react";
import HoneyCard from "./HoneyCard.jsx";
import "../stylesheets/HoneyCatalog.css";

function HoneyCatalog() {
  const honey = [
    {
      id: 1,
      title: "Мёд разнотравье",
      price: 250,
      image: "images/honey1.png"
    },
    {
      id: 2,
      title: "Мёд золотарниковый",
      price: 250,
      image: "/images/honey2.png"
    },
    {
      id: 3,
      title: "Мёд цветочный",
      price: 250,
      image: "/images/honey3.png"
    },
    {
      id: 4,
      title: "Перга",
      price: 400,
      image: "/images/honey4.png"
    },
    {
      id: 5,
      title: "Прополис",
      price: 550,
      image: "/images/honey5.png"
    },
    {
      id: 6,
      title: "Мёд в сотах (рамка)",
      price: 2500,
      image: "/images/honey6.png"
    }
  ];

  return (
    <div className="honey-catalog">
      {honey.map((item) => (
        <HoneyCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default HoneyCatalog;
