import "./index.css";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "preact/hooks";
import { route } from "preact-router";

export default function ModifyBtn(props) {
	const [postId, setPostsId] = useState(props.postId);
	const editPost = () => {
		route(`/editpost/${postId}`);
	};
	return <AiOutlineEdit className="modify-icon" onClick={editPost} />;
}
