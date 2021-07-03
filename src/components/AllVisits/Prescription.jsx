import React from "react";

// PrescriptionSingle
function Prescription({ key, visit }) {
  const deleteDayHandler = (id) => {
    fetch(`http://localhost:5000/api/v1/days/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };

  return (
    <div className="border p-2 prescriptionCollection">
      <div className="row">
        <div className="col-7 mt-2" style={{ alignItems: "center" }}>
          <div className="row">
            <div className="col-4">{visit.date}</div>
            <div className="col-8 pl-5">{visit.prescription}</div>
          </div>
        </div>
        <div
          className="col-5 d-flex justify-content-around"
          style={{ alignItems: "center" }}
        >
          <button className="btn btn-print mr-1">Pay: {visit.pay}</button>
          <button className="btn btn-view mr-1">View</button>
          <button className="btn btn-edit mr-1">Edit</button>
          <button
            className="btn btn-delete mr-1"
            onClick={() => deleteDayHandler(visit._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Prescription;
