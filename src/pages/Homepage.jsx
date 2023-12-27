import PostsList from "../components/PostsList/PostsList";
import "./index.css";
import LoginBtn from "../components/LoginBtn/LoginBtn";
import { useState, useRef } from "preact/hooks";
import CategoriesList from "../components/categoriesList/CategoriesList";
import PostsListByCat from "../components/PostsListByCat/PostListByCat";
import { connect } from "react-redux";
import store from "../store";

function HomePage(props) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loginBtnContent, setLoginBtnContent] = useState("Login");
    const inputRef = useRef(null);
    const [searchText, setSearchText] = useState("");
    const [tagClicked, setTagClicked] = useState("");
    const [category, setCategory] = useState("All");
    const userConnected = store.getState();
    // console.log(userConnected.userName);

    if (localStorage.getItem("isAdmin")) {
        setIsAdmin(true);
        setLoginBtnContent("Logout");
    }

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        setIsAdmin(false);
        setLoginBtnContent("Login");
    };

    return (
        <>
            <header className="header">
                <h1 className="logo">
                    <span>{userConnected.userName}'s </span>
                    <span>B</span>
                    <span>l</span>
                    <span>o</span>
                    <span>g</span>
                    <span>.</span>
                </h1>
                <LoginBtn isAdmin={isAdmin} onLogout={handleLogout} content={loginBtnContent} />
            </header>
            <div className="taglist-container">
                <CategoriesList categoryClicked={setCategory} />
            </div>
            {category != "All" ? <PostsListByCat category={category} isAdmin={isAdmin} /> : <PostsList isAdmin={isAdmin} inputRef={inputRef} searchText={searchText} tagClicked={tagClicked} />}
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        userName: state.userName,
    };
};
export default connect(mapStateToProps)(HomePage);
