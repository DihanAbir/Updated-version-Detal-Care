import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
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
import { createUser } from "../Actions/userAction";

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

export default function AddUser({ setrerender }) {
  // all states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.addUser);
  const { newUser, loading, error } = orderDetails;

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   custome function
  const handlesave = async () => {
    const userPost = {
      name: name,
      phone: phone,
      age: age,
      address: address,
      gender: gender,
      bloodGroup: bloodGroup,
    };
    dispatch(createUser(userPost));
    setrerender(true);
    setOpen(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      {/* <div className="icons-add" > */}
      <Button
        className="my-2"
        onClick={handleClickOpen}
        variant="contained"
        color="secondary"
      >
        Add New User
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
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="number"
                placeholder="Enter phone"
              />
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter Patient"
              />
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                type="number"
                placeholder="Enter Patient's age"
              />
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder="Enter Patient's Address"
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
