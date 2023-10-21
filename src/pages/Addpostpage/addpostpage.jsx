import "./index.css";
import axios from "axios";
import { route } from "preact-router";

import { useRef } from "preact/hooks";
import { useState } from "react";

export default function addpost() {
    const [categories, setCategories] = useState("");
    const [showCats, setShowCats] = useState(false);
    const titleRef = useRef(null);
    const slugref = useRef(null);
    const bodyRef = useRef(null);
    const catRef = useRef(null);

    const sendNewPost = async () => {
        const data = {
            title: titleRef.current.value,
            slug: slugref.current.value,
            body: bodyRef.current.value,
            categoryId: catRef.current.value,
        };
        try {
            const response = await axios.post(`http://localhost:4000/posts`, data);
            alert(response.data.success);
            route("/");
        } catch (error) {
            console.log(error);
            // alert(error.response.data.error);
        }
    };
    const fetchCategories = async () => {
        try {
            const cats = await axios.get(`http://localhost:4000/categories`);
            // console.log(cats.data);
            setCategories(cats.data);
        } catch (error) {
            console.log(error);
        }
    };
    const showCatSelect = () => {
        fetchCategories();
        setShowCats(true);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (titleRef.current.value.length === 0 || slugref.current.value.length === 0 || bodyRef.current.value.length === 0 || catRef.current.value.length === 0) {
            alert("Please fill in the form to login");
            title.current.focus();
            return;
        }

        // Call the function to send credentials to the server
        await sendNewPost();
    };
    return (
        <>
            <form className="add-post-form" action="" onSubmit={handleSubmit}>
                <label className="title-label" htmlFor="title">
                    <input ref={titleRef} required className="title-input" id="title" type="text" placeholder="Title" />
                </label>
                <label className="slug-label" htmlFor="slug">
                    <input ref={slugref} placeholder="Slug" required className="slug-input" id="slug" type="text" />
                </label>
                <label className="body-label" htmlFor="body">
                    <textarea ref={bodyRef} required className="body-input" id="body" type="text" />
                </label>
                <label className="cat-label" htmlFor="category">
                    {showCats && (
                        <select ref={catRef} required className="cat-input" id="body">
                            {categories.map((cat) => (
                                <option value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    )}
                </label>

                <div className=" btn-container">
                    <button className="submit-button" type="submit">
                        Send it online !
                    </button>
                    <button className=" cancel-button" onClick={() => route("/")}>
                        Cancel
                    </button>
                </div>
            </form>
            <button onClick={showCatSelect}>Add a category</button>
        </>
    );
}
