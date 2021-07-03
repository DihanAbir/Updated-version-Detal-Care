import React from "react";
import { useParams } from "react-router-dom";
import { datas } from "../../Data/User";

function SinglePrescriptionPreview() {
  const { Presid } = useParams();
  const singlePresPreview = datas.find((data) =>
    data.prescription.map((sinprePrev) => sinprePrev.P_id === Presid)
  );

  const {} = singlePresPreview;
  console.log(singlePresPreview);
  return (
    <div>
      <p>preview {Presid}</p>
      {/* <div className="container mt-5">
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
      </div> */}
    </div>
  );
}

export default SinglePrescriptionPreview;
