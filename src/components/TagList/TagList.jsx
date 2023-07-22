import { useState, useEffect } from "Preact/hooks";
import data from "../../../data/data.json";
import "./index.css";

function TagList() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        setTags(data[0].tags);
    }, []);

    console.log(tags);

    return (
        <ul className="tag-container">
            {tags.map((string) => (
                <li className="tag">{string}</li>
            ))}
        </ul>
    );
}

export default TagList;
