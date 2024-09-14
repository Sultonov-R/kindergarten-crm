import React, { useState } from "react";
import "./StudentTable.css";
import images from "../../images";

const StudentTable = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="user-action-row"
      style={{
        backgroundColor: isChecked ? "#FFFFFF" : "transparent",
        boxShadow: isChecked ? "2px 2px 4px 0px #0000001A" : "",
      }}
    >
      <div className="checkbox-user-index">
        <input
          checked={isChecked}
          onChange={handleCheckboxChange}
          width={12}
          type="checkbox"
          className="user-checkbox"
        />
        <span className="user-index">2</span>
      </div>
      <div className="user-image-name">
        <img src={images.user} alt="Avatar" className="user-avatar" />
        <span className="user-name">Nodirova Shodiya Tursinjon qizi</span>
      </div>
      <span className="user-birthdate">15.05.2021</span>
      <span className="user-gender">Qiz bola</span>
      <span className="user-group">15-guruh</span>
      <button className="status-button inactive">
        <img height={24} width={24} src={images.falseIcon} alt="" />
      </button>
      <button
        style={{ boxShadow: isChecked ? "2px 2px 2px 0px #0000001A" : "" }}
        className="action-button"
      >
        To'lov
      </button>
      <div className="edit-delete-buttons">
        <button
          style={{
            border: isChecked ? "1px solid #F1F1F1" : "",
            borderRadius: isChecked ? "100px" : "",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isChecked ? "#F9F9F9" : "",
            boxShadow: isChecked ? "2px 2px 2px 0px #0000001A" : "",
          }}
          className="edit-button"
        >
          <img height={24} width={24} src={images.pen_icon} alt="" />
        </button>
        <button className="delete-button">
          <img height={24} width={24} src={images.deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
