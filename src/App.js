import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import AddUser from "./Components/AddUser/AddUser";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="login">
                        <Login />
                    </Route>
                    <Route path="addUser">
                        <AddUser />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
