import React, { useState } from "react";
import "./DataTable.css";
import images from "../../images";

const DataTable = ({ students, columns }) => {
  const [isChecked, setIsChecked] = useState({});

  const handleCheckboxChange = (id) => {
    setIsChecked((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));
  };

  return (
    <table className="student-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr
            key={student.id}
            style={{
              backgroundColor: isChecked[student.id]
                ? "#FFFFFF"
                : "var(--color-light-gray-1)",
            }}
          >
            <td>
              <input
                type="checkbox"
                checked={isChecked[student.id] || false}
                onChange={() => handleCheckboxChange(student.id)}
              />
            </td>
            <td>
              <div className="student-info">
                <img src={images.user} alt="user image" />
                {student.name}
              </div>
            </td>
            <td className="birthday">{student.birthDate}</td>
            <td
              className="gender"
              style={{
                color: student.gender === "O'g'il bola" ? "green" : "red",
              }}
            >
              {student.gender}
            </td>
            <td className="groups">{student.group}</td>
            <td
              className="actions"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {student.attendance ? (
                <span className="attendance-yes">
                  <img width={24} src={images.true_icon} alt="" />
                </span>
              ) : (
                <span className="attendance-no">
                  <img width={24} src={images.falseIcon} alt="" />
                </span>
              )}
            </td>
            <td>
              <button
                style={{
                  backgroundColor: isChecked[student.id]
                    ? "var(--color-light-gray-1)"
                    : "transparent",
                  boxShadow: isChecked[student.id]
                    ? "2px 2px 2px 0px #0000001A"
                    : "none",
                }}
                className="payment-btn"
              >
                To'lov
              </button>
            </td>
            <td className="delete-edit">
              <button
                style={{
                  border: isChecked[student.id]
                    ? "1px solid var(--color-light-gray-2)"
                    : "1px solid transparent",
                  backgroundColor: isChecked[student.id]
                    ? "var(--color-light-gray-1)"
                    : "transparent",
                  borderRadius: "100px",
                  padding: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: isChecked[student.id]
                    ? "2px 2px 2px 0px #0000001A"
                    : "none",
                }}
                className="edit-btn"
              >
                <img height={24} width={24} src={images.pen_icon} alt="edit" />
              </button>
              <button className="delete-btn">
                <img
                  width={24}
                  height={24}
                  src={images.deleteIcon}
                  alt="delete icon"
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
