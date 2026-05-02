import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MainBody from "./components/MainBody";
import DisplayPage from "./components/DisplayPage";
import UserLog from "./components/UserLog";
import Cart from "./components/Cart";
import Address from "./components/Address";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/DisplayPage/:category/:id">
            <Header />
            <DisplayPage />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/Sign-In">
            <UserLog />
          </Route>
          <Route path="/address">
            <Header />
            <Address />
          </Route>
          <Route path="/">
            <Header />
            <Banner />
            <MainBody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
