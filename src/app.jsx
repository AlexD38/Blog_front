import Routes from "./routes.jsx";
import { Provider } from "react-redux";
import store from "./store";

export function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}
