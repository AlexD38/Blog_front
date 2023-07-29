import PostsList from "../components/PostsList/PostsList";
import "./index.css";
import TagList from "../components/TagList/TagList";
import LoginBtn from "../components/LoginBtn/LoginBtn";
import { useState, useRef } from "preact/hooks";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function HomePage() {
	const [isAdmin, setIsAdmin] = useState(false);
	const [loginBtnContent, setLoginBtnContent] = useState("Login");
	const [showTags, setShowTags] = useState(false);
	const inputRef = useRef(null);

	if (localStorage.getItem("isAdmin")) {
		setIsAdmin(true);
		setLoginBtnContent("Logout");
	}

	const handleLogout = () => {
		localStorage.removeItem("isAdmin");
		setIsAdmin(false);
		setLoginBtnContent("Login");
	};
	const handleShowTags = () => {
		showTags ? setShowTags(false) : setShowTags(true);
		console.log(showTags);
	};

	return (
		<>
			<LoginBtn
				isAdmin={isAdmin}
				onLogout={handleLogout}
				content={loginBtnContent}
			/>
			<div className="taglist-container">
				{showTags && <TagList isAdmin={isAdmin} />}
				{showTags ? (
					<div className="trangle-container">
						<AiOutlineCaretUp
							className="triangle"
							onClick={handleShowTags}
						/>
						<p className="show-tags">Hide tags</p>
					</div>
				) : (
					<div className="triangle-container">
						<AiOutlineCaretDown
							className="triangle"
							onClick={handleShowTags}
						/>
						<p className="show-tags">Show tags</p>
					</div>
				)}
			</div>
			<PostsList isAdmin={isAdmin} />
		</>
	);
}
export default HomePage;
