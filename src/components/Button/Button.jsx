import React from "react";
import "./Button.css";
import images from "../../images";

function Button({ onFilterClick, showAdd = true }) {
  return (
    <div className="btn-class">
      <div className="table-header-actions">
        {showAdd && (
          <button className="add-button" type="primary">
            <img width={24} src={images.add_icon} alt="add" />
            <span>Qo'shish</span>
          </button>
        )}
        <button className="sharing">
          <img width={24} src={images.sharing} alt="sharing" />
        </button>
        <button className="filtering" onClick={onFilterClick}>
          <img width={24} src={images.filter} alt="Filter" />
        </button>
      </div>
    </div>
  );
}

export default Button;
