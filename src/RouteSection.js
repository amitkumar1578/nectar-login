import React from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

let Nectar = window.sessionStorage.getItem('NectarLogin');
let NectarLogin = false;
if (!Nectar) {
    NectarLogin = false;
} else {
    NectarLogin = true;
}
const RouteSection = () => {
    if (NectarLogin) {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                </Switch>
            </Router>
        );
    }
    else {
        return (
            <Router>
                <Switch>

                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route
                        render={otherProps => (
                            <Redirect
                                to={{
                                    pathname: "/login",

                                }}
                            />
                        )}
                    />
                </Switch>
            </Router>
        );
    }

}

export default RouteSection
