import PostsList from "../components/PostsList/PostsList";
import "./index.css";
import TagList from "../components/TagList/TagList";
import LoginBtn from "../components/LoginBtn/LoginBtn";
function HomePage() {
    return (
        <>
            <input placeholder="Search for your tage here..." className="searchtag" type="search"></input>
            <LoginBtn />
            <TagList />
            <PostsList />
        </>
    );
}
export default HomePage;
