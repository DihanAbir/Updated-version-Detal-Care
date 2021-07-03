import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";

function SinglePrescription({ pre, singledata }) {
  const {
    title,
    description,
    doctor_name,
    advise,
    treatmen,

    P_id,
  } = pre;
  const { id, name, image, address, phone, gender } = singledata;

  const myfunc = () => {
    window.print();
  };

  return (
    <div className="container mt-5">
      <div className="personalInfo">
        <div className="id">
          <small>ID: {P_id}</small>
          <spam className="phone">Phone: {phone}</spam>
        </div>
        <div className="personal d-flex justify-content-between">
          <div className="userName">
            <p className="name">Name: {name}</p>
            <p className="gender">Gender: {gender}</p>
          </div>
          <Link className="Link" to={"/singPresPreview/" + P_id}>
            <Button
              // onClick={myfunc}
              className="mt-4 "
              variant="contained"
              color="primary"
            >
              Preview
            </Button>
          </Link>
        </div>
      </div>
      <div className="row treatmentdetails border">
        <div className="col-3 p-4 d-flex flex-column justify-content-between">
          <div>
            <h1>C/C</h1>
            <div>
              <b> leftlow-6</b>
            </div>
            <hr />
            <br></br>
            <h1>O/E</h1>
            <div>
              <b> leftlow-6</b>
            </div>
          </div>
          <div>
            <p className="advise">Advise:{advise}</p>
            <p className="treatmen">{treatmen}</p>
          </div>
        </div>
        <div className="col-9">
          <p className="d_name">Doctor Name: {doctor_name}</p>
          <p className="description">medicine:</p>
          <p className="description">RX: {description}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePrescription;
