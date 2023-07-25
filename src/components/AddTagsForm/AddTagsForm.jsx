import "./index.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useRef } from "preact/hooks";
import axios from "axios";

export default function AddTagsForm() {
    const inputRef = useRef(null);

    const handleButtonCLick = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name: inputRef.current.value,
            };
            const response = await axios.post(`http://localhost:4000/tags`, { data });
            if (response.status === 200) {
                inputRef.current.value = "";
                alert("Your tag has been added successfully");
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
                <input placeholder="Add tag here..." type="text" ref={inputRef}></input>
            </form>
        </>
    );
}
