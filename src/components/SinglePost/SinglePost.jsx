import { useEffect, useState } from "preact/hooks";
import "./index.css";
import axios from "axios";
import { marked } from "marked";

export default function SinglePost(props) {
	const [singlePost, setSinglePost] = useState([]);
	const [title, setTitle] = useState("");
	const [slug, setSlug] = useState("");
	const [body, setBody] = useState("");
	const parsedBody = marked.parse(" " + body + " ");
	const [tags, setTags] = useState("");

	useEffect(() => {
		async function fetchSinglePost() {
			try {
				const response = await axios.get(
					`http://localhost:4000/posts/${props.id}`
				);
				setSinglePost(response.data[0]);
				const tagResponse = await axios.get(
					`http://localhost:4000/posts/${props.id}/tags`
				);
				// console.log(tagResponse.data);
				setTags(tagResponse.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchSinglePost();
	}, []);
	// console.log(tags);

	setTitle(singlePost.title);
	setBody(singlePost.body);
	setSlug(singlePost.slug);
	return (
		<>
			<div className="single-post-container">
				<div>
					<h1 className="title">{title}</h1>
					<p className="single-post-slug">{slug}</p>
					<div className="body-container markdown-body">
						<p
							dangerouslySetInnerHTML={{
								__html: parsedBody,
							}}
							className="body"></p>
					</div>
					<hr></hr>
					{tags &&
						tags.map((tag) => (
							<div className="tags">#{tag.name}</div>
						))}
				</div>
			</div>
			<a className="back-home-btn" href="/">
				<button>Retour à l'accueil</button>
			</a>
		</>
	);
}
