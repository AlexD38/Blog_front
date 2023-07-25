import { useState } from "preact/hooks";
import { useEffect } from "preact/hooks";
import axios from "axios";
import DeleteBtn from "../DeleteBtn/Deletebtn";
import ModifyBtn from "../ModifyBtn/ModifyBtn.jsx";
import "./index.css";
import { AiOutlinePlus } from "react-icons/ai";

function PostsList(props) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			try {
				const response = await axios.get(`http://localhost:4000/posts`);
				setPosts((PostsList) => response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchPosts();
	}, [posts]);

	return (
		<>
			{props.isAdmin && (
				<ul className="post-container">
					{" "}
					<li className="add-card">
						<AiOutlinePlus className="add-icon" />
						WRITE A NEW POST
					</li>
				</ul>
			)}
			<ul className="post-container">
				{posts.map((post) => (
					<li key={post.id} className="card">
						<h1>{post.title}</h1>
						<h3 className="slug">{post.slug}</h3>
						<a href={"/detailedpost/" + post.id}>
							<button className="readmore">Read More...</button>
						</a>
						{props.isAdmin && (
							<>
								<DeleteBtn postId={post.id} />
								<ModifyBtn postId={post.id} />
							</>
						)}
					</li>
				))}
			</ul>
		</>
	);
}
export default PostsList;
