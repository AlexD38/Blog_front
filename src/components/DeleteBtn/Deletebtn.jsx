import { useState } from "preact/hooks";
import "./index.css";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

export default function DeleteBtn(props) {
	const [postId, setPostsId] = useState(props.postId);
	const deletePost = async () => {
		try {
			const response = await axios.delete(
				`http://localhost:4000/posts/${postId}`
			);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return <AiOutlineDelete className="delete-icon" onClick={deletePost} />;
}
