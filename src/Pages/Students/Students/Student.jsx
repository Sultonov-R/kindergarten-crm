import React from "react";
import DataTable from "../../../components/DataTable/DataTable";
import "./Student.css";

const StudentPage = () => {
  const students = [
    {
      id: 1,
      name: "Sultonov Shokirjon Tursinjon o'g'li",
      birthDate: "15.05.2021",
      gender: "O'g'il bola",
      group: "15-gurux",
      attendance: true,
    },
    {
      id: 2,
      name: "Nodirova Shodiya Tursinjon qizi",
      birthDate: "15.05.2021",
      gender: "Qiz bola",
      group: "15-gurux",
      attendance: false,
    },
  ];
  const teachers = [
    {
      id: 1,
      name: "Sultonov Shokirjon Tursinjon o'g'li",
      birthDate: "15.05.2021",
      gender: "O'g'il bola",
      group: "+998965865745",
      attendance: true,
    },
    {
      id: 2,
      name: "Nodirova Shodiya Tursinjon qizi",
      birthDate: "15.05.2021",
      gender: "Qiz bola",
      contact: "+998914747485",
      attendance: false,
    },
  ];

  return (
    <div className="studentss-wrapper">
      <h1>Student Page</h1>
      <DataTable
        students={teachers}
        columns={[
          "#",
          "O'qituvchilar F.I.O",
          "Tug'ilgan sana",
          "Jinsi",
          "Kontakt",
          "Imkoniyatlar",
        ]}
      />
    </div>
  );
};

export default StudentPage;
