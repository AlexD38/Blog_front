import "./index.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useRef, useState } from "preact/hooks";
import axios from "axios";

export default function AddTagsForm(props) {
	const inputRef = useRef(null);
	const postId = props.id;
	const [tagList, setTagList] = useState([]);

	const handleButtonClick = async (e) => {
		e.preventDefault();
		try {
			const data = {
				name: inputRef.current.value,
				tagName: inputRef.current.value,
			};
			const response = await axios.post(
				`http://localhost:4000/posts/${postId}/tags`,
				{
					data,
				}
			);
			if (response.status === 200) {
				inputRef.current.value = "";
				// alert(response.data.success);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchTags = async () => {
		try {
			const response = await axios.get("http://localhost:4000/tags");
			setTagList(response.data);
			console.log(tagList);
		} catch (error) {
			console.log(error);
		}
	};
	fetchTags();

	return (
		<form className="add-tag-form">
			<button className="add-tag" onClick={handleButtonClick}>
				<AiOutlinePlus />
				Add Tag
			</button>
			<input
				placeholder="Add a new tag here..."
				type="text"
				ref={inputRef}
			/>
			{tagList && (
				<select name="tags">
					{tagList.map((tag) => (
						<option key={tag.name} value={tag.name}>
							{tag.name}
						</option>
					))}
				</select>
			)}
		</form>
	);
}
