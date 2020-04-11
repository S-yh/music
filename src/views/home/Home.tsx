import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "../../components/Header";
import Recommend from "./index/Recommend";
import Rank from "./index/Rank";
import { TabMenu } from "../../config/TabMenu";

const Home: React.FC = props => {
    return (
        <div className="page">
            <Header tabs={TabMenu} />
            <Router>
                <div className="main-container">
                    <Switch>
                        <Route path="/home/recommend">
                            <Recommend />
                        </Route>
                        <Route path="/home/rank">
                            <Rank />
                        </Route>
                        <Route path="*">
                            <Redirect to="/home/recommend" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Home