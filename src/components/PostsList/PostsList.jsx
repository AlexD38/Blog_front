import { useState, useEffect, useRef, useContext } from "preact/hooks";
import axios from "axios";
import DeleteBtn from "../DeleteBtn/Deletebtn";
import ModifyBtn from "../ModifyBtn/ModifyBtn.jsx";
import "../PostsList/index.css";
import "./index.css";
import { AiOutlinePlus } from "react-icons/ai";

import { route } from "preact-router";
import Fuse from "fuse.js";
import store from "../../store";
import { connect, useDispatch, useSelector } from "react-redux";
import Context from "../../context.js";
import moment from "moment";

function PostsList(props) {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const inputRef = useRef(null);
    const [category, setCategory] = useState("All");
    const inputTagRef = useRef(props.tagClicked);
    const storeData = useSelector((state) => state.categoryClicked);
    const dispatch = useDispatch();
    const context = useContext(Context);

    const fuseOptions = {
        keys: ["title"],
        threshold: 0.2,
        isCaseSensitive: false,
    };
    const fuse = new Fuse(posts, fuseOptions);
    function searchWithFuse() {
        const filteredPostsAfterSearch = fuse.search(inputRef.current.value);
        setFilteredPosts(filteredPostsAfterSearch);
    }

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get(`http://localhost:4000/posts`);
                context.setPosts((prevPosts) => [...prevPosts, ...response.data]);
                console.log(posts);
                setPosts((PostsList) => response.data);
                return;
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, []);

    const addPost = () => {
        route("/addpost");
    };
    setPosts(context.posts);

    return (
        <>
            {" "}
            <input ref={inputRef} onChange={searchWithFuse} className="input-search-posts" type="search" placeholder="Search for your posts here..." />
            {props.isAdmin && (
                <ul className="post-container">
                    {" "}
                    <li className="add-card" onClick={addPost}>
                        <AiOutlinePlus className="add-icon" />
                        WRITE A NEW POST
                    </li>
                </ul>
            )}
            <ul className="post-container">
                {filteredPosts.length > 0 ? (
                    <>
                        {filteredPosts.map((post) => (
                            <li data-aos="fade-up" key={post.item.id} className="card">
                                <h1>{post.item.title}</h1>
                                <h3 className="slug">{post.item.slug}</h3>
                                <a href={"/detailedpost/" + post.item.id}>
                                    <button className="readmore">Read More...</button>
                                </a>
                                {props.isAdmin && (
                                    <>
                                        <DeleteBtn postId={post.id} />
                                        <ModifyBtn postId={post.id} />
                                    </>
                                )}
                            </li>
                        ))}
                    </>
                ) : (
                    <>
                        {posts.map((post) => (
                            <li data-aos="fade-up" key={post.id} className="card">
                                <h1>{post.title}</h1>
                                <h3 className="slug">{post.slug}</h3>
                                <a href={"/detailedpost/" + post.id}>
                                    <button className="readmore">Read More...</button>
                                </a>
                                <div className="date">
                                    <span>{moment(post.created_at).format("dddd D MMMM YYYY")}</span>
                                    <span> - {moment(`${post.updated_at}`, "YYYYMMDD").fromNow()}</span>
                                </div>
                                {props.isAdmin && (
                                    <>
                                        <DeleteBtn postId={post.id} />
                                        <ModifyBtn postId={post.id} />
                                    </>
                                )}
                            </li>
                        ))}
                    </>
                )}
            </ul>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        categoryClicked: state.categoryClicked,
    };
};
export default connect(mapStateToProps)(PostsList);
