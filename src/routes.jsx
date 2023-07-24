import { Router } from "preact-router";
import HomePage from "../src/pages/Homepage.jsx";
import SinglePost from "../src/components/SinglePost/SinglePost.jsx";

const Routes = () => (
	<Router>
		<HomePage exact path="/" />
		<SinglePost exact path="/post" />
	</Router>
);

export default Routes;
