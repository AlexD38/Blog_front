import { useState } from "preact/hooks";
import "./index.css";
import axios from "axios";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import store from "../../store";
import { setCats } from "../../actions";

function CategoriesList(props) {
    const [cats, setCats] = useState([]);
    const categories = store.getState();
    console.log(categories);

    useEffect(() => {
        async function fetchCats() {
            try {
                const response = await axios.get(`http://localhost:4000/categories`);
                console.log(response.data);
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
                        <li className="category" key={cat.id} id={cat.id} onClick={handleClick}>
                            {cat.category_name} {cat.posts_data[0].title != null ? <span className="badge">{cat.posts_data.length}</span> : <span className="badge">{cat.posts_data.length - 1}</span>}
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    };
};
const mapDispatchToProps = {
    setCats,
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
