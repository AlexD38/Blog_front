import { useState, useEffect, useRef } from "preact/hooks";
import axios from "axios";
import "./index.css";
import Fuse from "fuse.js";

function TagList(props) {
	const [tags, setTags] = useState([]);
	const [filteredTags, setfilteredTags] = useState([]);
	const [isAdmin, setIsAdmin] = useState(props.isAdmin);
	const inputRef = useRef(null);
	const fuseOptions = {
		keys: ["name"],
		threshold: 0.2,
		isCaseSensitive: false,
	};
	const fuse = new Fuse(tags, fuseOptions);

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
	}, [tags]);
	const deleteTag = async (e) => {
		console.log(`tags number ${e.target.id}`);
		if (isAdmin) {
			try {
				const response = await axios.delete(
					`http://localhost:4000/tags/${e.target.id}`
				);
				// alert(response.data.success);
			} catch (error) {
				console.log(error);
			}
		}
	};
	function searchWithFuse() {
		const filteredTags = fuse.search(inputRef.current.value);
		setfilteredTags(filteredTags);
		console.log(filteredTags);
	}

	return (
		<ul className="tag-container">
			<input
				ref={inputRef}
				type="text"
				onChange={searchWithFuse}
				className="input-search-tags">
				hey
			</input>
			{filteredTags.length > 0 ? (
				<>
					{filteredTags.map((tag) => (
						<li key={tag.id} id={tag.id} className="tag">
							{props.isAdmin && (
								<button
									id={tag.id}
									className="delete-tag-btn"
									onClick={deleteTag}>
									X
								</button>
							)}
							{tag.item.name}
						</li>
					))}
				</>
			) : (
				<>
					{tags.map((tag) => (
						<li key={tag.id} id={tag.id} className="tag">
							{props.isAdmin && (
								<button
									id={tag.id}
									className="delete-tag-btn"
									onClick={deleteTag}>
									X
								</button>
							)}
							{tag.name}
						</li>
					))}
				</>
			)}
		</ul>
	);
}

export default TagList;
