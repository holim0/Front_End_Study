import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Navbar from "./Components/navbar.component";
import ExercisesList from "./Components/exercises-list.component";
import EditExercise from "./Components/edit-exercise.component";
import CreateExercise from "./Components/create-exercise.component";
import CreateUser from "./Components/create-user.component";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={ExercisesList}></Route>
                <Route path="/edit/:id" exact component={EditExercise}></Route>
                <Route path="/create" exact component={CreateExercise}></Route>
                <Route path="/user" exact component={CreateUser}></Route>
                <Redirect path="*" to="/"></Redirect>
            </Switch>
        </Router>
    );
}

export default App;
