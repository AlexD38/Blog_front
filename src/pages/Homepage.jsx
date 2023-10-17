import PostsList from "../components/PostsList/PostsList";
import "./index.css";
import LoginBtn from "../components/LoginBtn/LoginBtn";
import { useState, useRef } from "preact/hooks";
import CategoriesList from "../components/categoriesList/CategoriesList";

function HomePage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loginBtnContent, setLoginBtnContent] = useState("Login");
    const inputRef = useRef(null);
    const [searchText, setSearchText] = useState("");
    const [tagClicked, setTagClicked] = useState("");

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
                    <span>B</span>
                    <span>l</span>
                    <span>o</span>
                    <span>g</span>
                    <span>.</span>
                </h1>
                <LoginBtn isAdmin={isAdmin} onLogout={handleLogout} content={loginBtnContent} />
            </header>
            {/* <div className="taglist-container"></div> */}
            <PostsList isAdmin={isAdmin} inputRef={inputRef} searchText={searchText} tagClicked={tagClicked} />
        </>
    );
}
export default HomePage;
