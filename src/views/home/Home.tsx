import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import Recommend from "./index/Recommend";
import Rank from "./index/Rank";
import { TabMenu } from "../../config/TabMenu";
import SearchHeader from "../../components/SearchHeader";

const Home: React.FC = props => {
    return (
        <div className="page">
            <SearchHeader />
            <Header tabs={TabMenu} />
            <Switch>
                <Route path="/home/recommend">
                    <Recommend />
                </Route>
                <Route path="/home/rank">
                    <Rank />
                </Route>
                <Route path="*">
                    <Recommend />
                </Route>
            </Switch>
        </div>
    )
}

export default Home