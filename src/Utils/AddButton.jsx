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

export default function FullScreenDialog({ userId }) {
  // all states
  const [title, setTitle] = useState("");
  const [treatment, setTreatment] = useState("");
  const [treatmentPlan, setTreatmentPlan] = useState("");
  const [bill, setBill] = useState(0);
  const [due, setDue] = useState(0);
  const [payment, setPayment] = useState(0);
  const [InV, setInV] = useState("");
  const [BP, setBP] = useState("");
  const [Diabetes, setDiabetes] = useState("");
  const [Temp, setTemp] = useState("");
  const [DeseaseHistory, setDeseaseHistory] = useState("");
  const [MedicineHistory, setMedicineHistory] = useState("");
  const [OnExam, setOnExam] = useState("");
  const [adv, setAdv] = useState("");

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    window.location.reload();
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

    const { data } = await axios.post(
      `https://dental-finalbackend.herokuapp.com/api/v1/disease/add/${userId}`,
      // `http://localhost:5000/api/v1/disease/add/${userId}`,
      {
        title: title,
        bill: bill,
        due: due,
        pay: payment,
        treatment: treatment,
        OE: setOnExam,
        adv: adv,
        treatmentPlan: treatmentPlan,
        userid: userId,
        InV: InV,
        BP: BP,
        Diabetes: Diabetes,
        Temp: Temp,
        DeseaseHistory: DeseaseHistory,
        MedicineHistory: MedicineHistory,
      },
      config
    );
    console.log(`data`, data);
    window.location.reload();
  };

  return (
    <div>
      <p className="m-4 icons-add">
        <SiAddthis onClick={handleClickOpen} />
      </p>
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
              <label for="first_name">C/C</label>
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="C/C"
                type="text"
              />
              <label for="first_name">O/E</label>
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setOnExam(e.target.value);
                }}
                placeholder="O/E"
                type="text"
              />
              <label for="first_name">Treatment Plan</label>
              <textarea
                onChange={(e) => {
                  setTreatmentPlan(e.target.value);
                }}
                placeholder="Add  Treatment Plan"
                type="textarea"
              />
              <label for="first_name">Adv</label>
              <textarea
                onChange={(e) => {
                  setAdv(e.target.value);
                }}
                placeholder="Add  Adv"
                type="textarea"
              />
              <label for="first_name">Total Bil</label>
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setBill(e.target.value);
                }}
                placeholder="Add Total Bill"
                type="number"
              />
              {/* <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setPayment(e.target.value);
                }}
                placeholder="Add Payment"
                type="number"
              /> */}
              {/* additional */}
              <label for="first_name">InV</label>
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setInV(e.target.value);
                }}
                placeholder="Add InV"
                type="text"
              />
              <label for="first_name">BP</label>
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setBP(e.target.value);
                }}
                placeholder="Add BP"
                type="text"
              />
              <label for="first_name">Diabetes</label>
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setDiabetes(e.target.value);
                }}
                placeholder="Add Diabetes"
                type="text"
              />
              <label for="first_name">Temp</label>
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setTemp(e.target.value);
                }}
                placeholder="Add Temp"
                type="text"
              />
              <label for="first_name">Desease History</label>
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setDeseaseHistory(e.target.value);
                }}
                placeholder="Add Desease History"
                type="text"
              />
              <label for="first_name">Medicine Historyl</label>
              <input
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setMedicineHistory(e.target.value);
                }}
                placeholder="Add Medicine History"
                type="text"
              />
              <label for="first_name">Disease Prescription</label>
              <textarea
                onWheel={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setTreatment(e.target.value);
                }}
                placeholder="Add Disease Prescription"
                type="text"
              />
            </form>
          </List>
        </div>
      </Dialog>
    </div>
  );
}
