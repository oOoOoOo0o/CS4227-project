import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import App from "./App.tsx"
import {Provider} from "react-redux";
import store from "./redux/store.tsx";
import Navbar from "./components/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <Navbar/>
            <App/>
        </Provider>
    </StrictMode>,
)
