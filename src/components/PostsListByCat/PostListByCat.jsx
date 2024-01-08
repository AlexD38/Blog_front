import { useState, useEffect, useContext } from "preact/hooks";
import { connect, useSelector } from "react-redux";
import "../PostsList/index.css";
import PostsList from "../PostsList/PostsList";
import Context from "../../context.js";
import "./style.css";

function PostsListByCat(props) {
    const context = useContext(Context);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [posts, setPosts] = useState(context.posts);
    const [catClicked, setCatClicked] = useState(context.categoryClicked);

    setCatClicked(context.categoryClicked);
    setPosts(context.posts);
    useEffect(() => {
        setCatClicked(context.categoryClicked);
        setPosts(context.posts);
        const filteredPosts = posts.filter((post) => post.category_id == +catClicked);
        setFilteredPosts(filteredPosts);
    }, [catClicked, posts]);

    // console.log("catClicked : ", catClicked);
    console.log("filtered posts : ", posts);
    return (
        <>
            {" "}
            {!catClicked && <PostsList isAdmin={props.isAdmin} />}
            {catClicked && (
                <ul className="post-container">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <li data-aos="fade-up" key={post.id} className="card">
                                <h1>{post.title}</h1>
                                <h3 className="slug">{post.slug}</h3>
                                <a href={"/detailedpost/" + post.id}>
                                    <button className="readmore">Read More...</button>
                                </a>
                            </li>
                        ))
                    ) : (
                        <li data-aos="fade-up" className="no-post-message">
                            <br />
                            ... OUPS ! <br />
                            <br />
                            There's no post in this category yet... Login and add one !
                        </li>
                    )}
                </ul>
            )}
        </>
    );
}

export default connect()(PostsListByCat);
