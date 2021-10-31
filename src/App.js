import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import AddUser from "./Components/AddUser/AddUser";
import { createContext, useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <>
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Navbar />
                    <Switch>
                        <PrivateRoute exact path="/">
                            <Homepage />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/addUser">
                            <AddUser />
                        </PrivateRoute>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </>
    );
}

export default App;
