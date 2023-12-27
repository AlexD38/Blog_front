import { useState } from "preact/hooks";
import "./index.css";
import axios from "axios";
import { useEffect } from "react";

export default function CategoriesList(props) {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        async function fetchCats() {
            try {
                const response = await axios.get(`http://localhost:4000/categories`);
                setCats(response.data);
                return cats;
            } catch (error) {
                console.log(error);
            }
        }
        fetchCats();
    }, []);
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
                            {cat.category_name} - {cat.posts_count}
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
}
