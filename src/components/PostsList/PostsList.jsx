import { useState } from "preact/hooks";
import { useEffect } from "preact/hooks";
import axios from "axios";
import "./index.css";
function PostsList() {
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
	}, []);

	return (
		<>
			<ul className="post-container">
				{posts.map((post) => (
					<a href="/post">
						<li key={post.id} className="card">
							<h1>{post.title}</h1>
							<h3 className="slug">{post.slug}</h3>
							<a href={"/detailedpost/" + post.id}>
								<button className="readmore">
									Read More...
								</button>
							</a>
						</li>
					</a>
				))}
			</ul>
		</>
	);
}
export default PostsList;
