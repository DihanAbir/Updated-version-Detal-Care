import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { prescriptionContext } from "../../App";
import { BiPlus } from "react-icons/bi";
import logo from "../../image/logo.jpeg";
import "./style.css";

function SinglePrescriptionView() {
  const [prescriptionFinal, setPrescription, userFinal, setUser] =
    useContext(prescriptionContext);
  const myfunc = () => {
    window.print();
  };
  console.log(`prescriptionFinal[1]`, prescriptionFinal[1]);
  return (
    <div className="container-fluid prescription">
      <div div className="p-1">
        {/* prescription */}

        <div className="headerPres row ">
          <div className="col-3">
            <div className="logo">
              <img className="p-2 img-fluid" src={logo} alt="" />
            </div>
          </div>
          <div className="col-9">
            <h1 style={{ fontSize: "38px", color: "green" }}>
              পেইন কিউর ডেন্টাল কেয়ার
            </h1>
            <h1 style={{ color: "#141454" }}>Pain Cure Dental Care</h1>
          </div>
          <div style={{ fontWeight: "600", margin: "0 auto" }}>
            <p style={{ color: "green" }}>
              722/4, West Shewrapara, Mirpur, Dhaka-1206, In front of East West
              Int, School and College{" "}
            </p>
            <p style={{ color: "green" }}>
              E-mail: paincuredentalcare@gmail.com, Facebook:
              https://www.facebook.com/paincuredentalcare
            </p>
          </div>
        </div>
        <hr />
        <div className="detailsDoc ">
          <div className="row ">
            <div className="col-5">
              <h4>Dr. Fahmida Shahana Promi</h4>
              <p>B.D.S(RU)</p>
              <p>
                P.G.T(Consercatice Dentistry and Endodontics) Dhaka Dental
                College
              </p>
              <p>P.G.T(Perodontology) Dhaka Dental College</p>
              <p>P.G.T(Oral and Maxiliofacial Surgeon) Dhaka Dental College</p>
              <h4>Dental Surgeon</h4>
              <p>BMDC Reg No: 9251</p>
              <p>Visiting Hour: Sat to Thu: 5:30 PM to 9:30 PM </p>
            </div>
            <div className="col-7">
              <div className="row">
                <div className="col-5 text-center p-3">
                  <h4>Chember Open: </h4>
                  <p>10:00 AM to 1:00PM</p>
                  <p>5:00 PM to 10:00PM</p>
                  <p>Friday Closed</p>
                </div>
                <div className="col-7">
                  <h4>Dentist Md. Masud Ahmed (Masum)</h4>
                  <p>B.Sc in Dentistry: (DU) in Study</p>
                  <p>DDT. Dental (CBIMT)</p>
                  <p>
                    FT(Sir Salimillah Madical College & mitford Hospital,Dhaka
                  </p>
                  <p>Cell: 01720-425485</p>
                </div>
              </div>
              <p>
                Patient ID:{" "}
                <span className="border">{prescriptionFinal[1]?.userid}</span>
              </p>
              <p>
                Patient Phone:{" "}
                <span className="border">0{userFinal[0]?.phone}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="personalInfo">
          <div className="row">
            <div className="col-5">
              <p>Name: {userFinal[0]?.name}</p>
            </div>
            <div className="col-3">
              <p>Sex: {userFinal[0]?.gender}</p>
            </div>
            <div className="col-2">
              <p>Age:{userFinal[0]?.age} Years</p>
            </div>
            <div className="col-2">
              <small>Date: {userFinal[0]?.date}</small>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            style={{ borderRight: "1px solid green", padding: "0px!important" }}
            className="presBodyside col-4"
          >
            <div>
              <h6>C/C</h6>
              <p> {prescriptionFinal[1]?.title}</p>
            </div>
            <div>
              <h6>O/E</h6>
              <p></p>
              <br />
            </div>
            <div>
              <div className="d-flex justify-content-around row  border">
                <p className="green">X-ray</p>

                <p className="green">, OPG: </p>
              </div>
            </div>

            <div className="adv">
              <p>
                {" "}
                <span className="span">Adv:</span>{" "}
              </p>
              <br />
            </div>
            <div className="TreatPlan">
              <p id="p_wrap" style={{ minHeight: "70px" }}>
                {" "}
                <spa className="span">Treatment Plan:</spa>{" "}
                {prescriptionFinal[1]?.treatmentPlan}
              </p>
            </div>
            <div>
              <p>
                {" "}
                <span className="span"> InV:</span>
                {prescriptionFinal[1]?.InV}
              </p>
            </div>
            <div>
              <p>
                {" "}
                <span className="span">BP:</span> {prescriptionFinal[1]?.BP}
              </p>
            </div>
            <div>
              <p>
                {" "}
                <span className="span">Diabetes:</span>{" "}
                {prescriptionFinal[1]?.Diabetes}
              </p>
            </div>
            <div>
              <p>
                {" "}
                <span className="span">Temp:</span> {prescriptionFinal[1]?.Temp}
              </p>
            </div>
            <div>
              <p>
                {" "}
                <span className="span">Pre Desease History:</span>{" "}
                {prescriptionFinal[1]?.DeseaseHistory}
              </p>
            </div>
            <div>
              <p>
                {" "}
                <span className="span"> Pre Medicine History:</span>
                {prescriptionFinal[1]?.MedicineHistory}
              </p>
            </div>
          </div>
          <div className="col-8" style={{ padding: "0px!important" }}>
            <br />
            <h6 className="rx">RX:</h6>

            <p id="p_wrap">{prescriptionFinal[1]?.treatment}</p>
          </div>
        </div>
        {/* <hr />
        <p>SinglePrescriptionViewSinglePrescriptionView</p>
        <p>Prescription: {}</p>
        <p>TreatmentPlan: {prescriptionFinal[1]?.treatmentPlan}</p>
        <p>Patient id: {prescriptionFinal[1]?.userid}</p>
        <p>Patient name: </p>
        <p>Patient address: {userFinal[0]?.address}</p>
        <p>Patient bloodGroup: {userFinal[0]?.bloodGroup}</p>
        <p>Patient date: {userFinal[0]?.date}</p>
        <p>Patient age: {userFinal[0]?.age}</p>
        <p>Patient phone: </p>
        <p>Patient gender: </p> */}
        {/* <Button
          onClick={myfunc}
          className="m-1 printbtn"
          variant="contained"
          color="primary"
        >
          Print
        </Button> */}
      </div>
    </div>
  );
}

export default SinglePrescriptionView;
