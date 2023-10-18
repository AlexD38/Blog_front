import { useState, useEffect, useRef } from "preact/hooks";
import axios from "axios";
import DeleteBtn from "../DeleteBtn/Deletebtn";
import ModifyBtn from "../ModifyBtn/ModifyBtn.jsx";
import "../PostsList/index.css";
import { AiOutlinePlus } from "react-icons/ai";
import { route } from "preact-router";
import Fuse from "fuse.js";
import CategoriesList from "../categoriesList/CategoriesList";

function PostsListByCat(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get(`http://localhost:4000/categories/${props.category}/posts`);
                setPosts((PostsList) => response.data);
                // console.log(props.catId);
                return;
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, [posts]);

    return (
        <>
            <ul className="post-container">
                <>
                    {posts.map((post) => (
                        <li key={post.id} className="card">
                            <h1>{post.title}</h1>
                            <h3 className="slug">{post.slug}</h3>
                            <a href={"/detailedpost/" + post.id}>
                                <button className="readmore">Read More...</button>
                            </a>
                        </li>
                    ))}
                </>
            </ul>
        </>
    );
}
export default PostsListByCat;
