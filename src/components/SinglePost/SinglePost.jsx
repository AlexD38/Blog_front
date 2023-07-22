import { useEffect, useState } from "preact/hooks";
import "./index.css";
import data from "../../../data/data.json";
export default function SinglePost() {
    const [singlePost, setSinglePost] = useState([]);
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [body, setBody] = useState("");
    useEffect(() => {
        setSinglePost(data[0].posts[0]);
    }, []);
    console.log(singlePost);
    setTitle(singlePost.title);
    setBody(singlePost.body);
    setSlug(singlePost.slug);
    return (
        <>
            <div className="single-post-container">
                <div>
                    <h1 className="title">{title}</h1>
                    <p className="slug">{slug}</p>
                    <div className="body-container">
                        <p className="body">{body}</p>
                    </div>
                </div>
            </div>
            <a className="back-home-btn" href="/">
                <button>Retour à l'accueil</button>
            </a>
        </>
    );
}
