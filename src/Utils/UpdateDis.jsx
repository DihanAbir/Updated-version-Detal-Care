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

export default function UpdateDis({ infor, disId }) {
  // console.log(`infor`, infor);
  //   const { name, phone, age, address, gender, bloodGroup } = infor;

  // all states
  const [title, setTitle] = useState(infor.title);
  const [treatment, setTreatment] = useState(infor.treatment);
  const [treatmentPlan, setTreatmentPlan] = useState(infor.treatmentPlan);
  const [bill, setBill] = useState(infor.bill);
  //other
  const [InV, setInV] = useState(infor.InV);
  const [BP, setBP] = useState(infor.BP);
  const [Diabetes, setDiabetes] = useState(infor.Diabetes);
  const [Temp, setTemp] = useState(infor.Temp);
  const [DeseaseHistory, setDeseaseHistory] = useState(infor.DeseaseHistory);
  const [MedicineHistory, setMedicineHistory] = useState(infor.MedicineHistory);

  const [payment, setPayment] = useState(infor.pay);

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
    // alert(disId);
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
      `https://dental-finalbackend.herokuapp.com/api/v1/disease/update/${disId}`,
      {
        titleupdated: title,
        bilupdated: bill,
        payupdated: payment,
        treatmentupdated: treatment,
        treatmentPlanupdated: treatmentPlan,

        UpdatedInV: InV,
        UpdatedBP: BP,
        UpdatedDiabetes: Diabetes,
        UpdatedTemp: Temp,
        UpdatedDeseaseHistory: DeseaseHistory,
        UpdatedMedicineHistory: MedicineHistory,
        // userid: userId,
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
              UPDATE
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
                Value={infor.title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Add Disease Title"
                type="text"
              />

              <textarea
                onChange={(e) => {
                  setTreatmentPlan(e.target.value);
                }}
                value={treatmentPlan}
                placeholder="Add  Treatment Plan"
                type="textarea"
              />
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                Value={infor.bill}
                onChange={(e) => {
                  setBill(e.target.value);
                }}
                placeholder="Add Total Bill"
                type="number"
              />
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                Value={infor.pay}
                onChange={(e) => {
                  setPayment(e.target.value);
                }}
                placeholder="Add Payment"
                type="number"
              />

              {/* others */}
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                Value={infor.InV}
                onChange={(e) => {
                  setInV(e.target.value);
                }}
                placeholder="Add InV"
                type="text"
              />
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                Value={infor.BP}
                onChange={(e) => {
                  setBP(e.target.value);
                }}
                placeholder="Add BP"
                type="text"
              />
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                Value={infor.Diabetes}
                onChange={(e) => {
                  setDiabetes(e.target.value);
                }}
                placeholder="Add Diabetes"
                type="text"
              />
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                Value={infor.Temp}
                onChange={(e) => {
                  setTemp(e.target.value);
                }}
                placeholder="Add Temp"
                type="text"
              />
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                Value={infor.DeseaseHistory}
                onChange={(e) => {
                  setDeseaseHistory(e.target.value);
                }}
                placeholder="Add DeseaseHistory"
                type="text"
              />
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                Value={infor.MedicineHistory}
                onChange={(e) => {
                  setMedicineHistory(e.target.value);
                }}
                placeholder="Add MedicineHistory"
                type="text"
              />
              <textarea
                onWheel={(event) => {
                  event.preventDefault();
                }}
                value={treatment}
                onChange={(e) => {
                  setTreatment(e.target.value);
                }}
                placeholder="Update Disease Prescription"
                type="text"
              />
            </form>
          </List>
        </div>
      </Dialog>
    </div>
  );
}
