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
    fetch(`http://localhost:5000/api/v1/disease/${Userres}`)
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
    fetch(`http://localhost:5000/api/v1/days/${Userres}`)
      .then((res) => res.json())
      .then((data) => {
        setDays(data.data);
      });
  }, [days]);

  const myfunc = () => {
    window.print();
  };

  return (
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
        <small>Payment</small>
      </div>

      {days.length > 0 ? (
        days.map((day, index) => (
          <div
            key={index}
            className="border mt-5 p-2 d-flex justify-content-between"
          >
            <p>{day.date}</p>
            <p>payment: {day.pay}</p>
          </div>
        ))
      ) : (
        <LinearIndeterminate />
      )}
    </div>
  );
}

export default Money;
