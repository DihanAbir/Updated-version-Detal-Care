import React from "react";

function DesisInfo({ disis }) {
  return (
    <div>
      <div className="userinfo">
        <p>Title: {disis.title}</p>
        <p>TreatmentPlan: {disis.treatmentPlan}</p>
        <p>Treatment: {disis.treatment}</p>
        <p>Date: {disis.date}</p>
        <small>userid: {disis.userid}</small>
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
