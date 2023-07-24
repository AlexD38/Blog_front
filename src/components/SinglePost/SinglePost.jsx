import { useEffect, useState } from "preact/hooks";
import "./index.css";
import axios from "axios";

export default function SinglePost(props) {
	const [singlePost, setSinglePost] = useState([]);
	const [title, setTitle] = useState("");
	const [slug, setSlug] = useState("");
	const [body, setBody] = useState("");
	useEffect(() => {
		async function fetchSinglePost() {
			try {
				const response = await axios.get(
					`http://localhost:4000/posts/${props.id}`
				);
				setSinglePost(response.data[0]);
			} catch (error) {
				console.log(error);
			}
		}
		fetchSinglePost();
	}, []);

	setTitle(singlePost.title);
	setBody(singlePost.body);
	setSlug(singlePost.slug);
	return (
		<>
			<div className="single-post-container">
				<div>
					<h1 className="title">{title}</h1>
					<p className="slug">{slug}</p>
					<div className="body-container">
						<p className="body">{body}</p>
					</div>
				</div>
			</div>
			<a className="back-home-btn" href="/">
				<button>Retour à l'accueil</button>
			</a>
		</>
	);
}
