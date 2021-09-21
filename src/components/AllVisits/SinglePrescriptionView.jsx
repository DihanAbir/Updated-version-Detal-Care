import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { prescriptionContext } from "../../App";
import { BiPlus } from "react-icons/bi";
import logo from "../../image/logo.jpeg";
import "./style.css";
import { useParams } from "react-router";

function SinglePrescriptionView() {
  const [prescriptionFinal, setPrescription, userFinal, setUser] =
    useContext(prescriptionContext);

  var storedColors = JSON.parse(localStorage.getItem("my_Info"));

  const myfunc = () => {
    window.print();
  };
  var usertoday = storedColors[0]?.date;
  var today2 = new Date();

  const today = new Date(usertoday);
  const daycus =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  // console.log(`(storedColors[0]?.date)[1]`, today);
  // console.log(`(storedColors[0]?.date)[1]`, daycus);

  return (
    <div className="container-fluid prescription">
      <div div className="p-1">
        {/* prescription */}

        <div className="headerPres row ">
          <div className="col-3">
            <div className="logo">
              <img
                style={{ padding: "34px!important" }}
                className="p-2 img-fluid"
                src={logo}
                alt=""
              />
            </div>
          </div>
          <div className="col-9">
            <div style={{ alignSelf: "center" }}>
              <h1 style={{ fontSize: " 65px", color: "green" }}>
                পেইন কিউর ডেন্টাল কেয়ার
              </h1>
              <h1
                style={{
                  fontSize: "68px",
                  fontFamily: "serif",
                  fontWeight: "600",
                  letterSpacing: "4px",
                  color: "#141454",
                }}
              >
                Pain Cure Dental Care
              </h1>
            </div>
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
              <p style={{ textTransform: "capitalize" }}>
                Name: {storedColors[0]?.name}
              </p>
            </div>
            <div className="col-3">
              <p style={{ textTransform: "capitalize" }}>
                Sex: {storedColors[0]?.gender}
              </p>
            </div>
            <div className="col-2">
              <p style={{ textTransform: "capitalize" }}>
                Age:{storedColors[0]?.age} Years
              </p>
            </div>
            <div className="col-2">
              <small>Date: {daycus}</small>
            </div>
          </div>
        </div>
        <div className="row" style={{ padding: "0px 16px" }}>
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
              <p>{prescriptionFinal[1]?.oe}</p>
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
                <span className="span">
                  Adv: <p> {prescriptionFinal[1]?.adv}</p>
                </span>{" "}
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
          <div
            className="col-8"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "0px!important",
            }}
          >
            <div>
              <h6 className="rx">RX:</h6>

              <p id="p_wrap">{prescriptionFinal[1]?.treatment}</p>
            </div>
            <div>
              <p className="koronio">দাঁত তোলার পর করনিও</p>
              <p>
                *তুলা ৩০ মিনিট পর ফেলতে হবে। * তুলা ফেলানুর পর পর ক্ষত স্থানে
                ঠান্ডা কিছু লাগাতে হবে। * ২৪ ঘন্টা নরম, মিষ্টি জাতিও কিছু খেয়ে
                হবে। *২৪ ঘন্টা পর থেকে কুসুম গরম পানিতে লবন মিশিয়ে দিনে ৫-১০ বার
                কুল্কুচি করতে হবে। * ঔষধ নিয়মিত খাবে।
              </p>
            </div>
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
      <footer
        style={{ bottom: "0px", position: "relative" }}
        className="container-fluid"
      >
        <div className="row ">
          <div style={{ border: "1px solid green" }} className="col-4 pt-3">
            <p>প্রতি ৬ মাস অন্তর অন্তর আপনার মুখ ও</p>
            <p>দাঁত দন্তরোগ বিশেষজ্ঞ দ্বারা পরীক্ষা করুন</p>
          </div>
          <div
            style={{ backgroundColor: "#1d981d", color: "white" }}
            className="col-8 pt-3"
          >
            <p>
              পরবতী সাক্ষাতঃ ............. দিন পর। সাক্ষাতের সময় ব্যবস্থাপত্র
              সজ্ঞে আনবেন।
            </p>
            <p>
              হটলাইনঃ ০১৭২০৪২৫৪৮৫, ০১৭৭২১০২২৩৩(সিরিয়ালের জন্য),
              ০১৭০৯২২২২৯৮(হোয়াইসআপ)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SinglePrescriptionView;
