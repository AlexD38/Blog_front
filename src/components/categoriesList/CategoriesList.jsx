import { useState } from "preact/hooks";
// import "./index.css";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

export default function CategoriesList() {
    const [cats, setCats] = useState({});
    const getCatList = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/categories`);
            setCats(response);
        } catch (error) {
            console.error(error);
        }
        getCatList();
    };
    console.log("response : ", cats);

    return <h1>Catégory List</h1>;
}
