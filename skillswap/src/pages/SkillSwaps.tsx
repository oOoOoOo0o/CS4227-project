import React from "react";
import SkillSwapList from "../components/SkillSwapList.tsx";
import Navbar from "..//components/Navbar.tsx";

const SkillSwaps: React.FC = () => {
    return (
        <div className="App">
            <Navbar/>
            <SkillSwapList/>
        </div>
    );
};

export default SkillSwaps;