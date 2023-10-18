import { useState } from "preact/hooks";
import "./index.css";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";
import Fuse from "fuse.js";
import PostsListByCat from "../PostsListByCat/PostListByCat.jsx";

export default function CategoriesList(props) {
    const [cats, setCats] = useState([]);
    // console.log(props);
    // const [showPosts, setShowPosts] = useState(false);
    // const [catClicked, setCatClicked] = useState(null);

    useEffect(() => {
        async function fetchCats() {
            try {
                const response = await axios.get(`http://localhost:4000/categories`);
                setCats((catList) => response.data);
                return cats;
            } catch (error) {
                console.log(error);
            }
        }
        fetchCats();
    }, [cats]);
    const handleClick = (e) => {
        if (e.target.getAttribute("id")) {
            props.categoryClicked(e.target.getAttribute("id"));
        } else {
            props.categoryClicked("All");
        }
    };
    return (
        <aside className="cats-main-wrapper">
            <h3>Categories : </h3>
            {cats && (
                <ul>
                    {" "}
                    <li onClick={handleClick}>All</li>
                    {cats.map((cat) => (
                        <li key={cat.id} id={cat.id} onClick={handleClick}>
                            {cat.name}
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
}
