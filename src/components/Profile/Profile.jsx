import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { datas } from "../../Data/User";
import FullScreenDialog from "./Modal";
import ProfileSection from "./ProfileSection";
import SinglePrescription from "./SinglePrescription";

function Profile() {
  const { id } = useParams();

  const singledata = datas.find((data) => data.id === parseInt(id));
  const { name, image, address, phone, prescription } = singledata;
  useEffect(() => {}, [prescription]);
  return (
    <div className="">
      <Link className="Link" style={{ textDecoration: "none" }} to="/">
        <Button className="mt-3" variant="contained" color="secondary">
          Back key={}
        </Button>
      </Link>
      <div className="profile-main px-5">
        <ProfileSection id={id} singledata={singledata} />
      </div>
      <hr />

      <div className="addnewBtn">
        <FullScreenDialog prescription={prescription} />
      </div>

      {prescription.length ? (
        prescription.map((pre) => (
          <SinglePrescription pre={pre} singledata={singledata} />
        ))
      ) : (
        <h1>There is No Prescription! </h1>
      )}
    </div>
  );
}

export default Profile;
