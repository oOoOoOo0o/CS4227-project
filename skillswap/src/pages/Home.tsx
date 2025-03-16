import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {ImportContacts} from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Navbar from "../components/Navbar.tsx";
import {Link} from "react-router-dom";
import "./Home.css"

const Home: React.FC = () => {
    return (
        <div className="page-content">
            <Navbar/>
            <ul className="list-content">
                <li className="page-listitem disabled"><AccountCircleIcon sx={{ fontSize: 100 }}/>Profile</li>
                <Link className="page-button" to="/CS4227-project/swaps" style={{textDecoration: 'none', color: 'black'}}>
                    <li><ImportContacts sx={{ fontSize: 100 }}/>Your Skill Swaps</li>
                </Link>
                <li className="page-listitem disabled"><NotificationsIcon sx={{ fontSize: 100 }}/>Notifications</li>
                <li className="page-listitem disabled"><SettingsIcon sx={{ fontSize: 100 }}/>Settings</li>
            </ul>
        </div>
    );
};

export default Home;