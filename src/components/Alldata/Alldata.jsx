import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import User from "../User/User";
import AddUser from "../../Utils/AddUser";
import { UserList } from "../../Actions/userAction";
import LinearIndeterminate from "../preloader";

function Alldata({ searchvalue }) {
  const [rerender, setrerender] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);
  const { loading, error, user } = userData;

  useEffect(() => {
    dispatch(UserList());
  }, [dispatch, rerender]);

  const searchedValue = user.filter((val) => {
    let foo = val.phone;
    let bar = "" + foo;
    // alert(typeof val.phone);
    if (searchvalue === "") {
      return val;
    } else if (val.address.toLowerCase().includes(searchvalue.toLowerCase())) {
      return val;
    } else if (val._id.toLowerCase().includes(searchvalue.toLowerCase())) {
      return val;
    } else if (val.name.toLowerCase().includes(searchvalue.toLowerCase())) {
      return val;
    } else if (bar.includes(searchvalue.toLowerCase())) {
      return val;
    }
  });

  console.log(`searchvalue`, typeof searchvalue);

  return (
    <div>
      <div className="addDiv">
        <AddUser setrerender={setrerender} />
      </div>
      <br />
      {loading ? (
        <LinearIndeterminate />
      ) : (
        searchedValue.map((data, index) => <User key={index} data={data} />)
      )}
    </div>
  );
}

export default Alldata;
