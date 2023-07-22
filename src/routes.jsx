import { Router, Route } from "preact-router";
import HomePage from "../../Blog/src/pages/Homepage";
import SinglePost from "../../Blog/src/components/SinglePost/SinglePost";

const Routes = () => (
    <Router>
        <HomePage exact path="/" />
        <SinglePost exact path="/post" />
    </Router>
);

export default Routes;
