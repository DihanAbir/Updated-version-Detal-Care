import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { alluserInfo } from "../../Actions/userAction";
import AddVisite from "../../Utils/AddVisite";
import DesisInfo from "../../Utils/DesisInfo";
import Prescription from "./Prescription";

function AllVisits() {
  const { disId } = useParams();

  const [visits, setVisits] = useState([]);
  const [disis, setDisis] = useState({});
  const dispatch = useDispatch();

  // desisi information er effoer
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/disease/${disId}`)
      .then((res) => res.json())
      .then((data) => {
        setDisis(data.data);
      });
  }, []);

  // days er effect eita
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/days/${disId}`)
      .then((res) => res.json())
      .then((data) => {
        setVisits(data.data);
      });

    dispatch(alluserInfo(disId));
  }, []);

  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <div>
      {/* <Link style={{ textDecoration: "none" }} to="/"> */}
      <div className="header d-flex justify-content-between">
        <Button
          onClick={goToPreviousPath}
          className="mt-3"
          variant="contained"
          color="secondary"
        >
          Back
        </Button>
        <div className="d-flex justify-content-between">
          <Link className="Link" to={`/Money/${disId}`}>
            <Button className="mr-4 mt-3" variant="outlined" color="secondary">
              Money Receipt
            </Button>
          </Link>
          <Button
            onClick={goToPreviousPath}
            className="mr-4 mt-3"
            variant="outlined"
            color="primary"
          >
            Prescription
          </Button>
        </div>
      </div>
      {/* </Link> */}
      <div className="prescrition border p-3">
        <h2>All Prescrition's: {disId}</h2>
        <DesisInfo disis={disis} />

        <AddVisite due={disis.due} disId={disId} />

        {/* title section */}
        <div className="border p-3 prescriptionTitle">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <b className="col-4">Date</b>
                <b className="col-8 px-4">Prescription</b>
              </div>
            </div>
            <div className="col-6 "></div>
          </div>
        </div>
        {/* title section */}

        {/* ----------------***********------------- */}
        {visits.length >= 0
          ? visits.map((visit, index) => (
              <Prescription key={index} visit={visit} />
            ))
          : "loading..."}

        {/* <PrescriptionSingle /> */}
        {/* ----------------***********------------- */}
      </div>
    </div>
  );
}

export default AllVisits;
