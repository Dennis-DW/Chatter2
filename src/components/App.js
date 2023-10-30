import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Chats from "./Chats.js";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div style={{ fontFamily:"monospace" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
