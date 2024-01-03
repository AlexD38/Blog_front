import PostsList from "../components/PostsList/PostsList";
import "./index.css";
import LoginBtn from "../components/LoginBtn/LoginBtn";
import { useState, useRef } from "preact/hooks";
import { connect } from "react-redux";
import store from "../store";
import PostListByCat from "../components/PostsListByCat/PostListByCat";
import CategoriesList from "../components/CategoriesList/CategoriesList";

function HomePage(props) {
    const [isAdmin, setIsAdmin] = useState(false);
    const inputRef = useRef(null);
    const [searchText, setSearchText] = useState("");
    const [tagClicked, setTagClicked] = useState("");
    const userConnected = store.getState();
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("user");

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
            {/* <PostsList isAdmin={isAdmin} inputRef={inputRef} searchText={searchText} tagClicked={tagClicked} /> */}
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        userName: state.userName,
    };
};
export default connect(mapStateToProps)(HomePage);
