import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

export default function App() {
 return (
  <Router>
   <div>
    <Switch>
     <Route path="/about">
      <About />
     </Route>
     <Route path="/users">
      <Users />
     </Route>
     <Route path="/">
      <LandingPage />
     </Route>
    </Switch>
   </div>
  </Router>
 );
}

function About() {
 return <h2>About</h2>;
}

function Users() {
 return <h2>Users</h2>;
}
