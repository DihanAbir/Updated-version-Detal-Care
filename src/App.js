import "./App.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import MiniDrawer from "./components/Sidebar/Sidebar";
import UserProfile from "./components/Profile/UserProfile";
import SinglePrescriptionPreview from "./components/Profile/SinglePrescriptionPreview";
import AllVisits from "./components/AllVisits/AllVisits";
import Money from "./components/MoneyScreen/Money";
import SinglePrescriptionView from "./components/AllVisits/SinglePrescriptionView";

export const prescriptionContext = createContext();
export default function App() {
  const [prescriptionFinal, setPrescription] = useState([]);
  const [userFinal, setUser] = useState([]);

  return (
    <div>
      <prescriptionContext.Provider
        value={[prescriptionFinal, setPrescription, userFinal, setUser]}
      >
        <Router>
          <div>
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              {/* <Route exact path="/profile/:id">
              <Profile />
            </Route> */}
              <Route exact path="/userProfile/:userId">
                <UserProfile />
              </Route>
              <Route exact path="/allVisits/:disId">
                <AllVisits />
              </Route>
              <Route exact path="/SinglePrescriptionView">
                <SinglePrescriptionView />
              </Route>
              <Route exact path="/">
                <MiniDrawer />
              </Route>
              <Route exact path="/Money/:Userres">
                <Money />
              </Route>
              <Route exact path="/singPresPreview/:Presid">
                <SinglePrescriptionPreview />
              </Route>
            </Switch>
          </div>
        </Router>
      </prescriptionContext.Provider>
    </div>
  );
}
