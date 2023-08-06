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
				console.log(response.data.success);
			} catch (error) {
				console.log(error);
			}
		}
	};
	function searchWithFuse() {
		const filteredTagsAfterSearch = fuse.search(inputRef.current.value);
		setfilteredTags(filteredTagsAfterSearch);
		console.log(filteredTagsAfterSearch);
	}
	const handleClick = (e) => {
		props.clicked(e.target.id);
		console.log(props);
		// console.log(e.target.textContent);
	};
	return (
		<div className="tag-wrapper">
			<input
				ref={inputRef}
				type="text"
				onChange={searchWithFuse}
				className="input-search-tags"
				placeholder="Search for your tags here..."></input>
			<ul className="tag-container">
				{filteredTags.length > 0 ? (
					<>
						{filteredTags.map((tag) => (
							<li
								key={tag.id}
								id={tag.id}
								className="tag"
								onClick={handleClick}>
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
							<li
								key={tag.id}
								id={tag.id}
								className="tag"
								onClick={handleClick}>
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
		</div>
	);
}

export default TagList;
