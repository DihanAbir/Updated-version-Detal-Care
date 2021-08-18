import React from "react";
import AcUnitOutlined from "@material-ui/icons/AcUnitOutlined";
import "./Build.css";
import { Link } from "react-router-dom";

function BuildBoard() {
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
            <h4>Total Doctos </h4>
            <h1>04 </h1>
            <AcUnitOutlined />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mainBuildCol second">
            <h4>Total Patient </h4>
            <h1>120 </h1>
            <AcUnitOutlined />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mainBuildCol third">
            <h4>Total Users </h4>
            <h1>378 </h1>
            <AcUnitOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildBoard;
