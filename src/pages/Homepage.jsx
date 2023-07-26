import PostsList from "../components/PostsList/PostsList";
import "./index.css";
import TagList from "../components/TagList/TagList";
import LoginBtn from "../components/LoginBtn/LoginBtn";
import { useState } from "preact/hooks";

function HomePage() {
	const [isAdmin, setIsAdmin] = useState(false);
	const [loginBtnContent, setLoginBtnContent] = useState("Login");

	if (localStorage.getItem("isAdmin")) {
		setIsAdmin(true);
		setLoginBtnContent("Logout");
	}

	const handleLogout = () => {
		localStorage.removeItem("isAdmin");
		setIsAdmin(false);
		setLoginBtnContent("Login");
	};
	return (
		<>
			<input
				placeholder="Search for your tag here..."
				className="searchtag"
				type="search"></input>
			<LoginBtn
				isAdmin={isAdmin}
				onLogout={handleLogout}
				content={loginBtnContent}
			/>
			<TagList isAdmin={isAdmin} />
			<PostsList isAdmin={isAdmin} />
		</>
	);
}
export default HomePage;
