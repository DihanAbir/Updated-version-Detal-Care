import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

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

export default function UpdateVis({ visit, disId }) {
  // all states
  const [title, setTitle] = useState(visit.prescription);
  const [pay, setPay] = useState(visit.pay);

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
    setOpen(false);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const datas = await axios.put(
      `https://dental-finalbackend.herokuapp.com/api/v1/days/${disId}`,
      {
        prescription: title,
        pay: pay,
      },
      config
    );

    // : (alert("You pay more then due"), setOpen(false));
    // setPayment(payment + pay);
    // const { data } = datas;
    // console.log(`data`, data);
    window.location.reload();
  };

  return (
    <div>
      {/* <div className="icons-add">
        {/* <Button variant="outlined" color="primary"> */}
      {/* <SiAddthis /> */}
      {/* </Button> */}
      {/* </div> */}
      <Button
        onClick={handleClickOpen}
        className="mt-3 "
        variant="outlined"
        color="primary"
      >
        Edit
      </Button>
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
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className="container">
          <List>
            <form action="">
              <textarea
                value={title}
                style={{ width: "100%" }}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Write Today's Treatment"
                type="text"
              />
              <input
                value={pay}
                onWheel={(event) => {
                  event.preventDefault();
                }}
                style={{ width: "100%" }}
                onChange={(e) => {
                  // alert(typeof e.target.value);
                  setPay(parseInt(e.target.value));
                }}
                placeholder="Total Pay"
                type="text"
              />
              {/* <input
                style={{ width: "100%" }}
                onChange={(e) => {
                  setDue(e.target.value);
                }}
                placeholder="Total Due"
                type="text"
              /> */}
            </form>
          </List>
        </div>
      </Dialog>
    </div>
  );
}
