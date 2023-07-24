import "./index.css";
import { AiFillEdit, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { route } from "preact-router";

export default function Adminpage() {
	const logout = () => {
		route("/");
	};
	return (
		<>
			<button className="logout" onClick={logout}>
				Logout
			</button>

			<div className="main-container">
				<div className="post-managment-container">
					<button onClick={() => route("/addpost")} className="btn">
						<AiOutlinePlus className="icon" />
						Add Post
					</button>
					<button className="btn">
						<AiFillEdit className="icon" />
						Modify Post
					</button>
					<button className="btn">
						{" "}
						<AiOutlineDelete className="icon" />
						Delete post
					</button>
				</div>
				<div className="tag-managment-container">
					<button className="btn">
						{" "}
						<AiOutlinePlus className="icon" />
						Add Tag
					</button>
					<button className="btn">
						<AiFillEdit className="icon" />
						Modify Tag
					</button>
					<button className="btn">
						<AiOutlineDelete className="icon" />
						Delete Tag
					</button>
				</div>
			</div>
		</>
	);
}
