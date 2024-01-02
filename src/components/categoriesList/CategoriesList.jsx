import { useState } from "preact/hooks";
import "./index.css";
import axios from "axios";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import store from "../../store";
import { setCats } from "../../actions";

function CategoriesList() {
    const [categoriesFetched, setCategoriesFetched] = useState([]);
    const dispatch = useDispatch();
    const [categoryClicked, setCategoryClicked] = useState(null);
    // console.log(store.getState());

    useEffect(() => {
        async function fetchCats() {
            try {
                const response = await axios.get(`http://localhost:4000/categories`);
                // console.log(response.data);
                setCategoriesFetched(response.data);
                return;
            } catch (error) {
                console.log(error);
            }
        }
        fetchCats();
    }, []);
    const handleClick = (e) => {
        // console.log(cats);
        if (!e.target.getAttribute("id")) {
            dispatch(setCats(e.target.getAttribute(null)));
        }
        if (e.target.getAttribute("id")) {
            // setCategoryClicked(e.target.getAttribute("id"));
            dispatch(setCats(e.target.getAttribute("id")));
            // console.log("catclicked", e.target.getAttribute("id"));
        }
    };

    return (
        <>
            <aside className="cats-main-wrapper">
                <h3>Categories : </h3>
                {categoriesFetched && (
                    <ul>
                        {" "}
                        <li onClick={handleClick}>All</li>
                        {categoriesFetched.map((cat) => (
                            <li onClick={handleClick} className="category" key={cat.id} id={cat.id}>
                                {cat.name}
                            </li>
                        ))}
                    </ul>
                )}
            </aside>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        categoryClicked: state.categoryClicked,
    };
};
const mapDispatchToProps = {
    setCats,
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
