import { Router } from "preact-router";
import HomePage from "../src/pages/Homepage.jsx";
import SinglePost from "../src/components/SinglePost/SinglePost.jsx";
import Adminpage from "./pages/Adminpage/Adminpage.jsx";
import Addpost from "./pages/Addpostpage/addpostpage.jsx";
import Editpost from "./pages/Editpostpage/Editpost.jsx";

const Routes = () => (
	<Router>
		<HomePage exact path="/" />
		<SinglePost exact path="/detailedpost/:id" />
		<Adminpage exact path="/admin" />
		<Addpost exact path="/addpost" />
		<Editpost exact path="/editpost/:id" />
	</Router>
);

export default Routes;
