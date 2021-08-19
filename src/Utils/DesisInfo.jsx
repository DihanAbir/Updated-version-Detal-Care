import React from "react";

function DesisInfo({ disis }) {
  return (
    <div>
      <div className="userinfo">
        <p>
          {" "}
          <b>Title:</b> {disis.title}
        </p>
        <p>
          {" "}
          <b>Treatment Plan:</b> {disis.treatmentPlan}
        </p>
        {/* <p>
          {" "}
          <b>Prescription:</b> {disis.treatment}
        </p> */}
        <p>
          <b>Date:</b> {disis.date}
        </p>
        <small className="text-success">userid: {disis.userid}</small>
        <div className="row my-3">
          <div className="col-4 border">
            <h3>Total Bill: {disis.bill}</h3>
          </div>
          <div className="col-4 border">
            <h3>Total Payment: {disis.pay}</h3>
          </div>
          <div className="col-4 border">
            <h3>Total Due: {disis.due}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesisInfo;
