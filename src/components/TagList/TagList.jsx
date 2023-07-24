import { useState, useEffect } from "preact/hooks";
import axios from "axios";
import "./index.css";

function TagList() {
	const [tags, setTags] = useState([]);

	useEffect(() => {
		async function fetchTags() {
			try {
				const response = await axios.get("http://localhost:4000/tags");
				setTags(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchTags();
	}, []);

	return (
		<ul className="tag-container">
			{tags.map((tag) => (
				<li key={tag.id} className="tag">
					{tag.name}
				</li>
			))}
		</ul>
	);
}

export default TagList;
