import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinearIndeterminate from "../preloader";

function Money() {
  const [disease, setDisease] = useState({});
  const [days, setDays] = useState([]);
  const [user, setUser] = useState({});

  const { Userres } = useParams();

  useEffect(() => {
    fetch(`https://dental-finalbackend.herokuapp.com/api/v1/disease/${Userres}`)
      .then((res) => res.json())
      .then((data) => {
        setDisease(data.data);
      });
  }, []);
  //   user
  useEffect(() => {
    fetch(`/api/v1/user/${disease.userid}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
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

  return (
    <div className="moneyRecipt ">
      <div className="container">
        <Button
          onClick={myfunc}
          className="mt-4 "
          variant="contained"
          color="primary"
        >
          Print
        </Button>
        <div className="user">
          <div className="row border p-3">
            <div className="col-4">
              <p>Name: {user?.name}</p>
            </div>
            <div className="col-4">
              <p>Name: {user?.address}</p>
            </div>
            <div className="col-4">
              <p>Name: {user?.age}</p>
            </div>
            <div className="col-4">
              <p>Name: {user?.bloodGroup}</p>
            </div>
            <div className="col-4">
              <p>Name: {user?.gender}</p>
            </div>
            <div className="col-4">
              <p>Name: {user?.phone}</p>
            </div>
          </div>
        </div>
        <div className="py-3 text-center">
          <small>Disease</small>
        </div>
        <hr />
        <h4 className="py-5 text-center">Title: {disease?.title}</h4>
        <div className="disease d-flex justify-content-between">
          <p>Bill: {disease?.bill}</p>
          <p>Payment: {disease?.pay}</p>
          <p>Due: {disease?.due}</p>
          <p>Date: {disease?.date}</p>
        </div>

        <hr />
        <div className="py-3 text-center">
          <u>
            {" "}
            <h1>Payment</h1>
          </u>
        </div>

        {days.length > 0 ? (
          days.map((day, index) => (
            <div className="mt-5 p-2 border">
              <div key={index} className="d-flex justify-content-between">
                <p>{day.date}</p>
                <b>payment: {day.pay} Taka</b>
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
  );
}

export default Money;
