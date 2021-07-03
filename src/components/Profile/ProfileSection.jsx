import { Button } from "@material-ui/core";
import React from "react";

function ProfileSection({ singledata, id }) {
  const { name, image, address, phone } = singledata;

  return (
    <div className="container text-center p-5">
      <div className="border profilesection">
        <Button variant="contained" color="primary">
          Paid
        </Button>
        <div className="img">
          <img style={{ height: "40vh", padding: "40px" }} src={image} alt="" />
        </div>

        <div>
          <div className="px-4 border" style={{ height: "70%" }}>
            <h1>Abrar Nahian Labib{id}</h1>
            <h5 className="text-danger">{name}</h5>
            <h4>Address: {address}</h4>
            <div className="border d-flex justify-content-between">
              <p>Gender: Male</p>
              <p>Phone: {phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
