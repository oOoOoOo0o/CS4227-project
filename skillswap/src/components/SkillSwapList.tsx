import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSkillSwaps, updateSkillSwapStatus, removeSkillSwap} from "../redux/actions.tsx";
import SkillSwapItem from "./SkillSwapItem";
import {getSkillSwaps, cancelSwap, markSwapComplete, acceptSwap} from "../services/api";
import "./SkillSwapList.css"
import {RootState} from "../types/ReduxState.tsx";

const SkillSwapList: React.FC = () => {
    const dispatch = useDispatch();
    const skillSwaps = useSelector((state: RootState) => state.skillSwaps.skillSwaps);

    // Fetching skill swaps from the backend
    useEffect(() => {
        getSkillSwaps().then((data) => {
            dispatch(setSkillSwaps(data));
        });
    }, []);

    const requestedSwaps = skillSwaps.filter((swap) => swap.status === "requested");
    const pendingSwaps = skillSwaps.filter((swap) => swap.status === "pending");
    const ongoingSwaps = skillSwaps.filter((swap) => swap.status === "ongoing");
    const completedSwaps = skillSwaps.filter((swap) => swap.status === "completed");

    const handleAcceptRequest = (swapId: number) => {
        dispatch(updateSkillSwapStatus(swapId, "ongoing"));
        acceptSwap(swapId).catch((error) => {
            console.error("Error accepting swap:", error);
        });
    };

    const handleCancelSwap = (swapId: number) => {
        dispatch(removeSkillSwap(swapId));
        cancelSwap(swapId).catch((error) => {
            console.error("Error cancelling swap:", error);
        });
    };

    const handleMarkComplete = (swapId: number) => {
        dispatch(updateSkillSwapStatus(swapId, "completed"));
        markSwapComplete(swapId).catch((error) => {
            console.error("Error marking swap complete:", error);
        });
    };

    return (
        <div className="swap-list">
            <h2 className="list-title">Incoming Skill Swap Requests</h2>
            {requestedSwaps.length > 0 ? (
                requestedSwaps.map((swap) => (
                    <SkillSwapItem key={swap.id} swap={swap} onCancel={handleCancelSwap}
                                   onAccept={handleAcceptRequest}/>
                ))
            ) : (
                <div className="list-empty-text">
                    <p>No incoming requests at the moment!</p>
                </div>
            )}
            <hr className="line"/>

            <h2 className="list-title">Outgoing Skill Swap Requests</h2>
            {pendingSwaps.length > 0 ? (
                pendingSwaps.map((swap) => (
                    <SkillSwapItem key={swap.id} swap={swap} onCancel={handleCancelSwap}/>
                ))
            ) : (
                <div className="list-empty-text">
                    <p>No outgoing requests at the moment!</p>
                </div>
            )}
            <hr className="line"/>

            <h2 className="list-title">Ongoing Skill Swaps</h2>
            {ongoingSwaps.length > 0 ? (
                ongoingSwaps.map((swap) => (
                    <SkillSwapItem key={swap.id} swap={swap} onComplete={handleMarkComplete} isOngoing/>
                ))
            ) : (
                <div className="list-empty-text">
                    <p>No ongoing swaps at the moment!</p>
                </div>
            )}
            <hr className="line"/>

            <h2 className="list-title">Completed Skill Swaps</h2>
            {completedSwaps.length > 0 ? (
                completedSwaps.map((swap) => (
                    <SkillSwapItem key={swap.id} swap={swap}/>
                ))
            ) : (
                <div className="list-empty-text">
                    <p>No completed swaps yet!</p>
                </div>
            )}
        </div>
    );
};

export default SkillSwapList;