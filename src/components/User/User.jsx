import React from "react";
import { Link } from "react-router-dom";

function User({ data }) {
  const { name, image, address, phone, _id } = data;
  // console.log(data);
  return (
    <Link className="Link" to={"/userProfile/" + _id}>
      <div className="user-single-grid row">
        <div className="col-4">
          {" "}
          <h5 className="text-capitalize">{name}</h5>{" "}
        </div>
        <div className="col-3">{address}</div>
        <div className="col-3">
          <h5>{phone}</h5>
        </div>
        <div className="col-2">
          <div className="row">
            <div className="col-6">
              <p>{_id}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default User;
