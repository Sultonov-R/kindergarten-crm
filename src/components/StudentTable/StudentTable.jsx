import React, { useState } from "react";
import "./StudentTable.css";
import images from "../../images";

const StudentTable = ({
  student,
  index,
  showDetails = true, // prop to control detailed view
  isCompactView = false, // prop to control compact view like in the first image
  isEditable = true, // prop to control edit/delete buttons
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <table
      style={{
        border: isChecked ? "none" : "1px solid var(--color-light-gray-2)",
      }}
      className={`student-table ${isCompactView ? "compact" : ""}`}
    >
      <tbody>
        <tr
          className="user-action-row"
          style={{
            backgroundColor: isChecked ? "#FFFFFF" : "transparent",
            boxShadow: isChecked ? "2px 2px 4px 0px #0000001A" : "",
          }}
        >
          <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              checked={isChecked}
              onChange={handleCheckboxChange}
              width={12}
              type="checkbox"
              className="user-checkbox"
            />
            <span className="user-index">{index + 1}</span>
          </td>
          <td className="user-image-name">
            <img
              src={student.avatar || images.user}
              alt="Avatar"
              className="user-avatar"
            />
            <span
              style={{ color: "var(--color-primary-3)" }}
              className="user-name"
            >
              {student.name}
            </span>
          </td>

          {/* Conditionally render details if showDetails is true */}
          {showDetails && (
            <>
              <td className="user-birthdate">{student.birthdate}</td>
              <td
                className={`user-gender ${
                  student.gender === "Qiz bola" ? "red-text" : "blue-text"
                }`}
              >
                {student.gender}
              </td>
              <td className="user-group">{student.group}</td>
            </>
          )}

          {/* Conditionally render payment status */}
          {!isCompactView && (
            <td>
              <button className="status-button inactive">
                <img
                  height={24}
                  width={24}
                  src={
                    student.paymentStatus ? images.trueIcon : images.falseIcon
                  }
                  alt={student.paymentStatus ? "Paid" : "Not Paid"}
                />
              </button>
            </td>
          )}

          {/* Conditionally render payment button */}
          <td>
            <button className="action-button">To'lov</button>
          </td>

          {/* Conditionally render edit/delete buttons if isEditable is true */}
          {isEditable && (
            <td className="edit-delete-buttons">
              <button className="edit-button">
                <img height={24} width={24} src={images.pen_icon} alt="edit" />
              </button>
              <button className="delete-button">
                <img
                  height={24}
                  width={24}
                  src={images.deleteIcon}
                  alt="delete"
                />
              </button>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default StudentTable;
