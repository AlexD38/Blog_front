import { useState } from "preact/hooks";
import "./index.css";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";
import Fuse from "fuse.js";

export default function CategoriesList(props) {
    const [cats, setCats] = useState([]);
    const [catIsClicked, setCatIsClicked] = useState(null);

    const handleClick = (e) => {
        setCatIsClicked(e.target.getAttribute("id"));
        props.onClick(catIsClicked);
    };

    useEffect(() => {
        async function fetchCats() {
            try {
                const response = await axios.get(`http://localhost:4000/categories`);
                setCats((catList) => response.data);
                return;
            } catch (error) {
                console.log(error);
            }
        }
        fetchCats();
    }, [cats]);

    return (
        <aside className="cats-main-wrapper">
            <h3>Categories : </h3>
            {cats && (
                <ul>
                    {cats.map((cat) => (
                        <li onClick={handleClick} key={cat.id} id={cat.id}>
                            {cat.name}
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
}
