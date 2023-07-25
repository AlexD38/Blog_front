import { useState, useEffect } from "preact/hooks";
import axios from "axios";
import "./index.css";

function TagList(props) {
    const [tags, setTags] = useState([]);
    const [isAdmin, setIsAdmin] = useState(props.isAdmin);

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
                const response = await axios.delete(`http://localhost:4000/tags/${e.target.id}`);
                alert(response.data.success);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <ul className="tag-container">
            {tags.map((tag) => (
                <li key={tag.id} id={tag.id} className="tag" onClick={deleteTag}>
                    {isAdmin && <button className="delete-tag-btn">X</button>}
                    {tag.name}
                </li>
            ))}
        </ul>
    );
}

export default TagList;
