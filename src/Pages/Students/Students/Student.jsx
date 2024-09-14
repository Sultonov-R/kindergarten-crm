import React from "react";
import "./Student.css";
import Button from "../../../components/Button/Button";
import StudentTable from "../../../components/StudentTable/StudentTable";
import Pagination from "../../../components/Pagination/Pagination";
import images from "../../../images";

const studentData = {
  avatar: images.user, 
  name: "Sultonov Shokirjon Tursinjon o'g'li",
  birthdate: "15.05.2021",
  gender: "O'g'il bola",
  group: "15-guruh",
  paymentStatus: false, 
};

function Student() {
  return (
    <div className="studentss-wrapper">
      <div className="table-header">
        <h3>O'quvchilar jadvali</h3>
        <Button />
      </div>
      <div className="table-body">
        <StudentTable
          student={studentData}
          index={1}
          showDetails={true}
          isCompactView={false}
          isEditable={true}
        />

        <StudentTable
          student={studentData}
          index={2}
          showDetails={true}
          isCompactView={false}
          isEditable={true}
        />
      </div>
      <footer className="footer">
        <Pagination />
      </footer>
    </div>
  );
}

export default Student;
