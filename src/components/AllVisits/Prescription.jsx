import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { prescriptionContext } from "../../App";
import UpdateVis from "../../Utils/UpdateVis";

// PrescriptionSingle
function Prescription({ key, visit, disinfo }) {
  const [prescriptionFinal, setPrescription, userFinal, setUser] =
    useContext(prescriptionContext);

  const deleteDayHandler = (id) => {
    fetch(`https://dental-finalbackend.herokuapp.com/api/v1/days/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };
  // console.log(`disinfo`, disinfo);

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
          <Link to="/SinglePrescriptionView">
            <button
              onClick={() => {
                setPrescription([visit, disinfo]);
              }}
              className="btn btn-view mr-1"
            >
              View
            </button>
          </Link>
          <div className="my-auto mb-1">
            <UpdateVis visit={visit} disId={visit._id} />
          </div>
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
