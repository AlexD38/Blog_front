import { useState } from "preact/hooks";
import "./index.css";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

export default function DeleteBtn(props) {
    const [postId, setPostsId] = useState(props.postId);
    const token = localStorage.getItem("token");

    const deletePost = async () => {
        try {
            await axios.delete(`http://localhost:4000/posts/${postId}`, {
                headers: {
                    token,
                },
            });
            location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return <AiOutlineDelete className="delete-icon" onClick={deletePost} />;
}
