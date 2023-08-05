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
	const [searchText, setSearchText] = useState("");
	const [tagClicked, setTagClicked] = useState("");

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
	const handleTagClick = (tag) => {
		setTagClicked(tag);
	};
	// console.log(tagClicked);

	return (
		<>
			<header className="header">
				<h1 className="logo">
					<span>B</span>
					<span>l</span>
					<span>o</span>
					<span>g</span>
					<span>.</span>
				</h1>
				<LoginBtn
					isAdmin={isAdmin}
					onLogout={handleLogout}
					content={loginBtnContent}
				/>
			</header>
			<div className="taglist-container">
				{showTags && (
					<TagList isAdmin={isAdmin} clicked={handleTagClick} />
				)}
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
			<PostsList
				isAdmin={isAdmin}
				inputRef={inputRef}
				searchText={searchText}
				tagClicked={tagClicked}
			/>
		</>
	);
}
export default HomePage;
