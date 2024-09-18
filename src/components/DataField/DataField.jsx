import React from "react";
import "./DateField.css";
import images from "../../images";

const DateField = () => {
  return (
    <div className="date-input-container">
      <label className="date-input-label">Boshlangan sana</label>
      <div className="date-input-wrapper">
        <input
          type="text"
          className="date-input-field"
          placeholder="15.05.2000"
        />
        <img
          src={images.calendar}
          alt="calendar icon"
          className="calendar-icon"
        />
      </div>
    </div>
  );
};

export default DateField;
