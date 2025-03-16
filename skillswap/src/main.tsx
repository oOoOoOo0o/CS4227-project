import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {Provider} from "react-redux";
import store from "./redux/store.tsx";
import Navbar from "./components/Navbar.tsx";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import SkillSwaps from "./pages/SkillSwaps.tsx";
import Home from "./pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/CS4227-project" element={<Navigate to="/CS4227-project/home"/>}/>
                    <Route path="/CS4227-project/home" element={<Home/>}/>
                    <Route path="/CS4227-project/swaps" element={<SkillSwaps/>}/>
                </Routes>
            </Router>
        </Provider>
    </StrictMode>,
);
