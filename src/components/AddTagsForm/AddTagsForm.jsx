import "./index.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useRef, useState } from "preact/hooks";
import axios from "axios";

export default function AddTagsForm(props) {
    const inputRef = useRef(null);
    const selectRef = useRef(null);
    const postId = props.id;
    const [tagList, setTagList] = useState([]);

    const handleButtonClick = async (e) => {
        e.preventDefault();
        try {
            const data = {
                // name: inputRef.current.value,
                tagName: inputRef.current.value,
            };
            const response = await axios.post(`http://localhost:4000/posts/${postId}/tags`, {
                data,
            });
            if (response.status === 200) {
                inputRef.current.value = "";
                // alert(response.data.success);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleButtonClickFromExistingTag = async (e) => {
        e.preventDefault();
        const options = e.target.parentNode.firstChild.options;
        const optionsArray = Array.from(options);
        const tagFound = optionsArray.find((option) => option.innerHTML === selectRef.current.value);
        const tagId = tagFound.id;

        try {
            const data = {
                tagId,
            };
            const response = await axios.post(`http://localhost:4000/posts/${postId}/existingtags`, {
                data,
            });
            // console.log(response);
            if (response.status === 200) {
                inputRef.current.value = "";
                // alert(response.data.success);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get("http://localhost:4000/tags");
                setTagList(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTags();
    }, []);

    return (
        <form className="add-tag-form">
            <button className="add-tag" onClick={handleButtonClick}>
                <AiOutlinePlus />
                Add a new tag
            </button>
            <input placeholder="Add a new tag here..." type="text" ref={inputRef} />
            {tagList && (
                <form>
                    <select name="tags" ref={selectRef}>
                        <option>Select an existing tag</option>
                        {tagList.map((tag) => (
                            <option key={tag.name} id={tag.id} value={tag.name}>
                                {tag.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleButtonClickFromExistingTag}>Add this tag</button>
                </form>
            )}
        </form>
    );
}
