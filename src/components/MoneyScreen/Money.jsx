import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { prescriptionContext } from "../../App";
import LinearIndeterminate from "../preloader";
import logo from "../../image/logo.jpeg";

function Money() {
  const [prescriptionFinal, setPrescription, userFinal, setUser] =
    useContext(prescriptionContext);

  const [disease, setDisease] = useState({});
  const [days, setDays] = useState([]);
  const [user, setUserMoney] = useState({});

  const { Userres } = useParams();
  var storedUser = JSON.parse(localStorage.getItem("my_Info"));

  useEffect(() => {
    fetch(`https://dental-finalbackend.herokuapp.com/api/v1/disease/${Userres}`)
      .then((res) => res.json())
      .then((data) => {
        setDisease(data.data);
      });
  }, []);
  //   user
  useEffect(() => {
    fetch(
      `https://dental-finalbackend.herokuapp.com/api/v1/user/${disease.userid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserMoney(data.data);
      });
  }, [disease]);
  useEffect(() => {
    fetch(`https://dental-finalbackend.herokuapp.com/api/v1/days/${Userres}`)
      .then((res) => res.json())
      .then((data) => {
        setDays(data.data);
      });
  }, [days]);

  const myfunc = () => {
    window.print();
  };
  console.log(`user`, user);
  return (
    <div
      style={{ height: "100%", position: "relative" }}
      className="moneyRecipt "
    >
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
                722/4, West Shewrapara, Mirpur, Dhaka-1206, In front of East
                West Int, School and College{" "}
              </p>
              <p style={{ color: "green" }}>
                E-mail: paincuredentalcare@gmail.com, Facebook:
                https://www.facebook.com/paincuredentalcare
              </p>
            </div>
          </div>
          <hr />
          <div className="detailsDoc ">
            <div className="row px-3">
              {/* <div className="col-5">
                <h4>Dr. Fahmida Shahana Promi</h4>
                <p>B.D.S(RU)</p>
                <p>
                  P.G.T(Consercatice Dentistry and Endodontics) Dhaka Dental
                  College
                </p>
                <p>P.G.T(Perodontology) Dhaka Dental College</p>
                <p>
                  P.G.T(Oral and Maxiliofacial Surgeon) Dhaka Dental College
                </p>
                <h4>Dental Surgeon</h4>
                <p>BMDC Reg No: 9251</p>
                <p>Visiting Hour: Sat to Thu: 5:30 PM to 9:30 PM </p>
              </div> */}
              <div style={{ border: "1px solid green" }} className="col-6">
                <p>
                  Patient ID:{" "}
                  <span className="border">{prescriptionFinal[1]?.userid}</span>
                </p>
                <p>
                  Patient Phone:{" "}
                  <span className="border">0{storedUser[0]?.phone}</span>
                </p>
              </div>
              <div style={{ border: "1px solid green" }} className="col-6">
                <div className="px-4 disease d-flex justify-content-between">
                  <div>
                    <p>Bill: {disease?.bill}</p>
                    <p>Payment: {disease?.pay}</p>
                  </div>
                  <div>
                    <p>Due: {disease?.due}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="personalInfo">
            <div className="row">
              <div className="col-5">
                <p style={{ textTransform: "capitalize" }}>
                  Name: {storedUser[0]?.name}
                </p>
              </div>
              <div className="col-3">
                <p style={{ textTransform: "capitalize" }}>
                  Sex: {storedUser[0]?.gender}
                </p>
              </div>
              <div className="col-2">
                <p style={{ textTransform: "capitalize" }}>
                  Age:{storedUser[0]?.age} Years
                </p>
              </div>
              <div className="col-2">
                <small>Date: {storedUser[0]?.date}</small>
              </div>
            </div>
          </div>

          {/* <h4 className="py-5 text-center">Title: {disease?.title}</h4> */}

          {/* <hr />
          <div className="py-3 text-center">
            <u>
              {" "}
              <h1>Payment</h1>
            </u>
          </div> */}

          {days.length > 0 ? (
            days.map((day, index) => (
              <div style={{ borderRadius: "4px" }} className="mt-5 p-2 border">
                <div key={index} className="d-flex justify-content-between">
                  <p>{day.date}</p>
                  <b>Payment: {day.pay} Taka</b>
                </div>
                <p>
                  {" "}
                  <b>Treatment: </b> {day.prescription}
                </p>
              </div>
            ))
          ) : (
            <LinearIndeterminate />
          )}
        </div>
      </div>
      <div className="container">
        {/* <Button
          onClick={myfunc}
          className="mt-4 "
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
        <div className="row p-3">
          <div style={{ border: "1px solid green" }} className="col-4 pt-3">
            <p>প্রতি ৬ মাস অন্তর অন্তর আপনার মুখ ও</p>
            <p>দাঁত দন্তরোগ বিশেষজ্ঞ দ্বারা পরীক্ষা করুন</p>
          </div>
          <div
            style={{ backgroundColor: "#1d981d", color: "white" }}
            className="col-8 pt-3"
          >
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

export default Money;
