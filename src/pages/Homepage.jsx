import PostsList from "../components/PostsList/PostsList";
import "./index.css";
import LoginBtn from "../components/LoginBtn/LoginBtn";
import { useState, useRef, useContext } from "preact/hooks";
import { connect } from "react-redux";
import store from "../store";
import PostListByCat from "../components/PostsListByCat/PostListByCat";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import Context from "../context.js";

function HomePage(props) {
    const [isAdmin, setIsAdmin] = useState(false);
    const inputRef = useRef(null);
    const [searchText, setSearchText] = useState("");
    const [tagClicked, setTagClicked] = useState("");
    const userConnected = store.getState();
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("user");
    const context = useContext(Context);

    console.log(context);
    if (token) {
        setIsAdmin(true);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAdmin(false);
    };

    return (
        <>
            <header className="header">
                <h1 className="logo">
                    {isAdmin && <span>{userName}'s </span>}
                    <span>B</span>
                    <span>l</span>
                    <span>o</span>
                    <span>g</span>
                    <span>.</span>
                </h1>
                <LoginBtn isAdmin={isAdmin} onLogout={handleLogout} />
            </header>
            <div className="taglist-container">
                <CategoriesList isAdmin={isAdmin} />
            </div>
            <PostListByCat isAdmin={isAdmin} />
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        userName: state.userName,
    };
};
export default connect(mapStateToProps)(HomePage);
