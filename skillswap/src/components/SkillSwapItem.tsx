import React, {useState} from "react";
import {SkillSwap} from "../types/SkillSwap";
import ReviewForm from "./ReviewForm";
import Modal from "./Modal.tsx";
import ViewReview from "./ViewReview.tsx";
import "./SkillSwapItem.css";
import userProfilePic from "../assets/user-solid.png";

interface SkillSwapItemProps {
    swap: SkillSwap;
    onAccept?: (swapId: number) => void;
    onCancel?: (swapId: number) => void;
    onComplete?: (swapId: number) => void;
    isOngoing?: boolean;
}

const SkillSwapItem: React.FC<SkillSwapItemProps> = ({swap, onAccept, onCancel, onComplete}) => {
    const [isSubmitReviewModalOpen, setIsSubmitReviewModalOpen] = useState(false);
    const [isViewReviewModalOpen, setIsViewReviewModalOpen] = useState(false);

    const openSubmitReviewModal = () => {
        setIsSubmitReviewModalOpen(true);
    };

    const closeSubmitReviewModal = () => {
        setIsSubmitReviewModalOpen(false);
    };

    const openViewReviewModal = () => {
        setIsViewReviewModalOpen(true);
    };

    const closeViewReviewModal = () => {
        setIsViewReviewModalOpen(false);
    };

    const handleSubmitReview = (rating: number, review: string) => {
        swap.rating = rating;
        swap.ratingDescription = review;
        console.log("Submitted review");
    };

    const handleDeleteReview = () => {
        handleSubmitReview(-1, "");
        closeViewReviewModal();
        console.log("Deleted review");
    }

    const getStatusIcon = () => {
        switch (swap.status) {
            case "requested":
                return "fa-bell";
            case "pending":
                return "fa-paper-plane";
            case "ongoing":
                return "fa-handshake-o";
            case "completed":
                return "fa-circle-check";
            default:
                return "fa-circle-question";
        }
    };

    return (
        <div className="swap-item">
            <div className="swap-item-heading">
                <i className={`fa fa-xl ${getStatusIcon()}`} aria-hidden="true"></i>
                <div className="swap-title">
                    <h3>{swap.skillGiven} for {swap.skillReceived}</h3>
                </div>
                <div className="swap-details">
                    <p>{swap.date}</p>
                    <p className="username">{swap.userName}</p>
                    <img className="user-pfp" src={userProfilePic} alt={`${swap.userName}'s picture`}/>
                </div>
            </div>

            <div className="button-container">
                {/* Pending Swaps */}
                {swap.status === "requested" && onAccept && (
                    <button className="button-accept" onClick={() => onAccept(swap.id)}>Accept Request</button>
                )}

                {(swap.status === "pending" || swap.status === "requested") && onCancel && (
                    <button className="button-cancel" onClick={() => onCancel(swap.id)}>Cancel Swap</button>
                )}

                {/* Ongoing Swaps */}
                {swap.status === "ongoing" && onComplete && (
                    <button className="button-accept" onClick={() => onComplete(swap.id)}>Complete Swap</button>
                )}

                {/* Completed Swaps */}
                {swap.status === "completed" && swap.rating === -1 && (
                    <button onClick={openSubmitReviewModal}>Leave a Review</button>
                )}
                {swap.status === "completed" && swap.rating !== -1 && (
                    <button onClick={openViewReviewModal}>View Review</button>
                )}
            </div>

            <Modal show={isSubmitReviewModalOpen} onClose={closeSubmitReviewModal}>
                <ReviewForm swapId={swap.id} onClose={closeSubmitReviewModal} onSubmitReview={handleSubmitReview}/>
            </Modal>

            <Modal show={isViewReviewModalOpen} onClose={closeViewReviewModal}>
                <ViewReview swap={swap} onClose={closeViewReviewModal} deleteReview={() => handleDeleteReview()}/>
            </Modal>
        </div>
    );
};

export default SkillSwapItem;