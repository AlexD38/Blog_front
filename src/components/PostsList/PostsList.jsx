import { useState } from "Preact/hooks";
import data from "../../../data/data.json";
import { useEffect } from "Preact/hooks";
import "./index.css";
function PostsList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(data[0].posts);
    }, []);
    console.log(posts);

    return (
        <>
            <ul className="post-container">
                {posts.map((post) => (
                    <a href="/post">
                        <li key={post.title} className="card">
                            <h1>{post.title}</h1>
                            <h3 className="slug">{post.slug}</h3>
                            <a href="/post">
                                <button className="readmore">Read More...</button>
                            </a>
                        </li>
                    </a>
                ))}
            </ul>
        </>
    );
}
export default PostsList;
