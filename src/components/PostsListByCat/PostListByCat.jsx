import { useState, useEffect } from "preact/hooks";
import axios from "axios";
import { connect, useSelector } from "react-redux";
import store from "../../store";

import "../PostsList/index.css";
import PostsList from "../PostsList/PostsList";

function PostsListByCat() {
    const [posts, setPosts] = useState([]);
    const [catClicked, setCatClicked] = useState(store.getState().categoryClicked);
    // console.log(store.getState().categoryClicked);
    const storeData = useSelector((state) => state.categoryClicked);

    useEffect(() => {
        setCatClicked(storeData);
    }, [storeData]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get(`http://localhost:4000/categories/${catClicked}/posts`);
                setPosts((PostsList) => response.data);
                // console.log(response.data);
                return;
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, [storeData, catClicked]);

    return (
        <>
            {" "}
            {!catClicked && <PostsList />}
            {catClicked && (
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
            )}
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        userName: state.categoryClicked,
    };
};

export default connect(mapStateToProps)(PostsListByCat);
