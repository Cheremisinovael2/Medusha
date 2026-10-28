
import React, { useState } from "react";
import "../stylesheets/OrderModal.css";

function OrderModal({ close }) {
  const [phone, setPhone] = useState("+7 ");
  const [success, setSuccess] = useState(false);

  function sendOrder(e) {
    e.preventDefault();

    const numbers = phone.replace(/\D/g, "");

    if (numbers.length !== 11 || numbers[0] !== "7") {
      alert("Введите номер телефона полностью");
      return;
    }

    setSuccess(true);
  }

  return (
    <div className="order-modal-bg" onClick={close}>
      <div className="order-modal" onClick={(e) => e.stopPropagation()}>

        <button className="order-modal-close" onClick={close}>
          ×
        </button>

        {success ? (
          <div className="order-success">
            <h2>Спасибо за заказ! ♡</h2>
            <p>
              Мы свяжемся с вами в течение часа,
              <br />
              чтобы уточнить детали доставки
            </p>
          </div>
        ) : (
          <>
            <p className="order-modal-text">
              Оставьте свой номер телефона, чтобы мы могли
              <br />
              обсудить с вами детали заказа
            </p>

            <form onSubmit={sendOrder} className="order-modal-form">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (000)-000-00-00"
                required
              />

              <button type="submit">
                Отправить
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}

export default OrderModal;
