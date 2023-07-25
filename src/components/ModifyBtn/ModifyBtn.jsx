import "./index.css";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "preact/hooks";

export default function DeleteBtn(props) {
	const [postId, setPostsId] = useState(props.postId);
	const editPost = () => {
		console.log(`post num : ${postId} clicked !`);
	};
	return <AiOutlineEdit className="modify-icon" onClick={editPost} />;
}
