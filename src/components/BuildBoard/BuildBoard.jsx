import React from "react";
import AcUnitOutlined from "@material-ui/icons/AcUnitOutlined";
import "./Build.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BuildBoard() {
  const [totaluser, settotalUser] = useState(0);
  const [totalPatient, settotalPatient] = useState(0);
  useEffect(() => {
    fetch(`https://dental-finalbackend.herokuapp.com/api/v1/user/`)
      .then((res) => res.json())
      .then((data) => {
        settotalUser(data.data.length);
      });
    fetch(`https://dental-finalbackend.herokuapp.com/api/v1/disease`)
      .then((res) => res.json())
      .then((data) => {
        settotalPatient(data.data.length);
      });
  }, []);
  return (
    <div>
      <div className="title pt-4 d-flex">
        <Link className="Link" to="/UserProfile">
          <AcUnitOutlined />
        </Link>
        {/* <h4 className="pl-3">Dashboard</h4> */}
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <div className="mainBuildCol first">
            <h4>Total Doctors </h4>
            <h1>03 </h1>
            <AcUnitOutlined />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mainBuildCol second">
            <h4>Total User </h4>
            <h1>{totaluser} </h1>
            <AcUnitOutlined />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mainBuildCol third">
            <h4>Total Diseases/Patient </h4>
            <h1>{totalPatient} </h1>
            <AcUnitOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildBoard;
