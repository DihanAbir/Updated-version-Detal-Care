import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import axios from "axios";
import { useHistory } from "react-router-dom";

import pro from "../../accet/profile/pro.jpg";
import userPro from "../../accet/profile/female.png";
import FullScreenDialog from "./Modal";
import AddButton from "../../Utils/AddButton";
import UpdateUser from "../../Utils/UpdateUser";
import { useDispatch, useSelector } from "react-redux";
import { UserDetails } from "../../Actions/userAction";
import LinearIndeterminate from "../preloader";
import "./profile.css";

function UserProfile() {
  const { userId } = useParams();

  const [disease, setDisease] = useState([]);
  const [title, setTitle] = useState("");

  const handlesave = async (e) => {
    // fetch(, {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(),
    // });
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post(
      `http://localhost:5000/api/v1/disease/add/${userId}`,
      {
        title: { title },
        bill: 22121,
        due: 654654,
        pay: 5546456,
        treatment: "perasitamal 2 bela",
        treatmentPlan: "who knowss.",
        userid: { userId },
      },
      config
    );
    // console.log(`data`, data);
  };

  const deleteDiseaseHandler = (id) => {
    fetch(`http://localhost:5000/api/v1/disease/delete/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/disease/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setDisease(data.data);
      });
  }, []);

  return (
    <div className="px-4" style={{ position: "relative" }}>
      <div className="addnewBtn"></div>
      <Link className="Link" style={{ textDecoration: "none" }} to="/">
        <Button className="mt-3" variant="contained" color="secondary">
          Back
        </Button>
      </Link>
      <hr />

      {/* main section  */}
      <div className="row">
        <div className="col-3">
          <div className="profle border p-3 text-center">
            <Profile userId={userId} />
          </div>
        </div>
        <div className="col-9">
          <div className="prescrition border p-3">
            <p>all Prescrition's </p>
            <div className="filterHerf border text-center">
              <button className="btn btn-light mr-5">Prescrition</button>
              <button className="btn btn-light mr-5">Prescrition</button>
              <button className="btn btn-light mr-5">Prescrition</button>
            </div>
            <hr />
            <p className="text-center">All Disease's </p>

            <div className="row">
              {disease.length === 0 ? <h2> No Disease 🤗</h2> : null}
              {disease.length >= 0
                ? disease.map((dis, index) => (
                    <div key={index} className="border col-md-4">
                      <div className="row">
                        <div className="col-md-10">
                          <Link className="Link" to={`/allVisits/${dis._id}`}>
                            <small>{dis._id}</small>
                            <p>
                              Name: "{" "}
                              <span className="text-danger">{dis.title}</span> "
                            </p>
                            <b>TreatMent Plan: </b>
                            <small>{dis.treatmentPlan}</small>
                            <p>
                              Bill: "{" "}
                              <span className="text-success">{dis.bill}</span> "
                            </p>
                          </Link>
                        </div>
                        <div className="updateDelete col-md-2">
                          <button onClick={() => deleteDiseaseHandler(dis._id)}>
                            <AiOutlineDelete />
                          </button>
                          <button>
                            <GrUpdate />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                : "loading..."}

              <div className="col-md-4">
                <div className="addDiv">
                  {/* <FullScreenDialog /> */}
                  <AddButton userId={userId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

// Profile component
function Profile({ userId }) {
  const [profile, setProfile] = useState({});
  const history = useHistory();

  const dispatch = useDispatch();
  const userD = useSelector((state) => state.userDetails);
  const { loading, error, user } = userD;
  console.log(`user`, user);

  useEffect(() => {
    // fetch(`http://localhost:5000/api/v1/user/profile/${userId}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data.data);
    //     setProfile(data.data);
    //   });

    dispatch(UserDetails(userId));
  }, [dispatch, userId]);

  const deleteProfileHandler = () => {
    fetch(`http://localhost:5000/api/v1/user/${userId}`, {
      method: "DELETE",
    }).then(() => alert("Delete successful"));
    history.push("/");
  };

  return (
    <div className="">
      <p className="border" onClick={() => dispatch(UserDetails(userId))}>
        Refresh
      </p>
      {loading ? (
        <LinearIndeterminate />
      ) : (
        <div>
          <p>profile</p>
          <p>{userId}</p>
          <div className="img">
            <img
              style={{ width: "70%" }}
              className="img-fluid"
              src={
                user?.gender === "male" || user?.gender === "Male"
                  ? pro
                  : userPro
              }
              alt={user?.gender}
            />
            <div className="proDetails">
              <h5>Name:{user?.name}</h5>
              <small>
                <b>Patient ID:</b> 06
              </small>
              <br />
              <small>
                <b>{user?.address}</b>
              </small>
            </div>
            <hr />
            <div className="address">
              <small className="d-flex justify-content-between">
                <b>Phone</b>
                <p>{user?.phone}</p>
              </small>
              <small className="d-flex justify-content-between">
                <b>Gender</b>
                <p>{user?.gender}</p>
              </small>
              <small className="d-flex justify-content-between">
                <b>Age</b>
                <p>{user?.age} Years</p>
              </small>
              <small className="d-flex justify-content-between">
                <b>Blood</b>
                <p>{user?.bloodGroup}</p>
              </small>
              <div className="updateDelete updtaeUSer">
                <button onClick={deleteProfileHandler}>
                  <AiOutlineDelete />
                </button>
                <button>
                  <UpdateUser userId={userId} infor={profile} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
