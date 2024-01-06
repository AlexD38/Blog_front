import { useState } from "preact/hooks";
import Context from "./context";

const ContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [cats, setCats] = useState([]);
    const [categoryClicked, setCategoryClicked] = useState(null);

    return <Context.Provider value={{ posts, setPosts, cats, setCats, categoryClicked, setCategoryClicked }}>{children}</Context.Provider>;
};

export default ContextProvider;
