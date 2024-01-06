import ContextProvider from "./contextProvider.js";
import Routes from "./routes.jsx";

export default function App() {
    return (
        <ContextProvider>
            <Routes />
        </ContextProvider>
    );
}
