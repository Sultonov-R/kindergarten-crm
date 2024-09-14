import React from "react";
import "./Home.css";
import PaymentModal from "../../components/PaymentModal/PaymentModal";
import Raws from "../../components/Raws/Raws";
import StudentTable from "../../components/StudentTable/StudentTable";

function Home() {
  return (
    <div className="home-wrapper">
      {/* <PaymentModal /> */}
      {/* <Raws /> */}
      <StudentTable />
    </div>
  );
}

export default Home;
