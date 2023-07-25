import "./index.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useRef } from "preact/hooks";

export default function AddTagsForm() {
    const inputRef = useRef(null);

    const handleButtonCLick = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
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
