import "./index.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useRef } from "preact/hooks";
import axios from "axios";

export default function AddTagsForm(props) {
	const inputRef = useRef(null);
	const postId = props.id;

	const handleButtonCLick = async (e) => {
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

	return (
		<>
			<form className="add-tag-form">
				<button className="add-tag" onClick={handleButtonCLick}>
					<AiOutlinePlus />
					Add Tag
				</button>
				<input
					placeholder="Add tag here..."
					type="text"
					ref={inputRef}></input>
			</form>
		</>
	);
}
