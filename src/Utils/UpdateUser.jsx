import React, { useEffect, useState } from "react";
import axios from "axios";
import { SiAddthis } from "react-icons/si";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import { GrUpdate } from "react-icons/gr";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateUser({ infor, userId }) {
  const { name, phone, age, address, gender, bloodGroup } = infor;
  // console.log(`object`, infor);

  // all states
  const [updatedname, setName] = useState(infor.name);
  const [updatedphone, setPhone] = useState(phone);
  const [updatedage, setAge] = useState(age);
  const [updatedaddress, setAddress] = useState(address);
  const [updatedgender, setGender] = useState(gender);
  const [updatedbloodGroup, setBloodGroup] = useState(bloodGroup);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   custome function
  const handlesave = async () => {
    // fetch(, {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(),
    // });

    setOpen(false);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `https://dental-finalbackend.herokuapp.com/api/v1/user/${userId}`,
      {
        name: updatedname,
        phone: updatedphone,
        age: updatedage,
        address: updatedaddress,
        gender: updatedgender,
        bloodGroup: updatedbloodGroup,
      },
      config
    );

    window.location.reload();
  };

  return (
    <div>
      {/* <div className="icons-add" > */}
      <Button
        className="my-2"
        onClick={handleClickOpen}
        variant="contained"
        color="secondary"
      >
        <GrUpdate />
      </Button>
      {/* </div> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Close
            </Typography>
            <Button autoFocus color="inherit" onClick={handlesave}>
              Add
            </Button>
          </Toolbar>
        </AppBar>
        <div className="container">
          <List>
            <form action="">
              <input
                onWheel={(e) => e.preventDefault()}
                value={updatedphone}
                placeholder="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="number"
              />
              <input
                value={updatedname}
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                // placeholder="Enter Patient"
              />
              <input
                Value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                type="number"
                onWheel={(e) => e.preventDefault()}
                placeholder="age"
              />
              <input
                Value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder={address}
                type="text"
              />
              {/* <input
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                placeholder="Enter Patient's Gender"
                type="text"
              /> */}
              <select
                onChange={(e) => {
                  setGender(e.target.value);
                  // alert(e.target.value);
                }}
                name="gender"
              >
                <option value="none" selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">other</option>
              </select>

              <select
                onChange={(e) => {
                  setBloodGroup(e.target.value);
                  alert(e.target.value);
                }}
                name="bloodgroup"
              >
                <option value="none" selected>
                  BloodGroup
                </option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </form>
          </List>
        </div>
      </Dialog>
    </div>
  );
}
