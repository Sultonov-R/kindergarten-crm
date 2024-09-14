import React from "react";
import "./Student.css";
import Button from "../../../components/Button/Button";
import StudentTable from "../../../components/StudentTable/StudentTable";

function Student() {
  return (
    <div className="studentss-wrapper">
      <div className="table-header">
        <h3>O'quvchilar jadvali</h3>
        <Button />
      </div>
      <div className="table-body">
        <StudentTable />
      </div>
    </div>
  );
}

export default Student;
