import React from "react";
import "./SelectField.css";
import images from "../../images";

const SelectField = () => {
  return (
    <div className="dropdown-input-container">
      <label className="dropdown-input-label">Nomi</label>
      <div className="dropdown-input-wrapper">
        <select className="dropdown-input-field">
          <option value="Yulduzcha">Yulduzcha</option>
        </select>
        <img
          src={images.bottom}
          alt="dropdown arrow"
          className="dropdown-icon"
        />
      </div>
    </div>
  );
};

export default SelectField;
