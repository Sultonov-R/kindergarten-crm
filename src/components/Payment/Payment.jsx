import React, { useState } from "react";
import "./Payment.css"; 
import images from "../../images";

const Payment = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>To'lov jadvali</h3>
              <button className="close-btn" onClick={closeModal}>
                <img width={24} src={images.x_icon} alt="false" />
              </button>
            </div>
            <div className="modal-body">
              <p>
                <span>Ism:</span> Shokirjon
              </p>
              <p>
                <span>Familiya:</span> Sultonov
              </p>
              <p>
                <span>Sharfi:</span> Tursinjon o'g'li
              </p>
              <p>
                <span>To'lov:</span> Naqd
              </p>
              <p>
                <span>Summa:</span> 500 000 so'm
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;
