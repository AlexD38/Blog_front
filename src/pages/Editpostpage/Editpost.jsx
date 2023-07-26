import "./index.css";
import axios from "axios";
import { route } from "preact-router";

import { useEffect, useRef, useState } from "preact/hooks";
import AddTagsForm from "../../components/AddTagsForm/AddTagsForm";

export default function Editpost() {
	const titleRef = useRef(null);
	const slugref = useRef(null);
	const bodyRef = useRef(null);
	const [postId, setPostsId] = useState(location.href.split("/")[4]);
	const [post, setPost] = useState("");
	const [tags, setTags] = useState("");

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await axios.get(
					`http://localhost:4000/posts/${postId}`
				);
				setPost(response.data[0]);
				const tagResponse = await axios.get(
					`http://localhost:4000/posts/${postId}/tags`
				);
				setTags(tagResponse.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, [tags]);

	const sendCorrectedPost = async () => {
		const data = {
			title: titleRef.current.value,
			slug: slugref.current.value,
			body: bodyRef.current.value,
		};
		try {
			const response = await axios.patch(
				`http://localhost:4000/posts/${postId}`,
				data
			);
			alert(response.data.success);
			route("/");
		} catch (error) {
			console.log(error);
			// alert(error.response.data.error);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			titleRef.current.value.length === 0 ||
			slugref.current.value.length === 0 ||
			bodyRef.current.value.length === 0
		) {
			alert("Please fill in the form to login");
			title.current.focus();
			return;
		}

		// Call the function to send credentials to the server
		await sendCorrectedPost();
	};

	return (
		<div id={post.id}>
			<form className="add-post-form" action="" onSubmit={handleSubmit}>
				<label className="title-label" htmlFor="title">
					<input
						ref={titleRef}
						required
						className="title-input"
						id="title"
						type="text"
						defaultValue={post.title}
					/>
				</label>
				<label className="slug-label" htmlFor="slug">
					<input
						ref={slugref}
						defaultValue={post.slug}
						required
						className="slug-input"
						id="slug"
						type="text"
					/>
				</label>
				<label className="body-label" htmlFor="body">
					<textarea
						ref={bodyRef}
						required
						className="body-input"
						id="body"
						type="text"
						defaultValue={post.body}
					/>
				</label>

				<div className=" btn-container">
					<button className="submit-button" type="submit">
						Send it online !
					</button>
					<button
						className=" cancel-button"
						onClick={() => route("/")}>
						Cancel
					</button>
				</div>
			</form>
			<AddTagsForm id={post.id} />
			{tags &&
				tags.map((tag) => (
					<button className="tags">#{tag.name}</button>
				))}{" "}
		</div>
	);
}
