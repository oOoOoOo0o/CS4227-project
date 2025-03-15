import React from "react";
import RatingComponent from "./RatingComponent.tsx";
import {SkillSwap} from "../types/SkillSwap.tsx";

interface ReviewFormProps {
    swap: SkillSwap;
    onClose: () => void;
    deleteReview: () => void;
}

const ViewReview: React.FC<ReviewFormProps> = ({swap, onClose, deleteReview}) => {
    return (
        <div className="modal-content">
            <h3>Your Review</h3>
            <div className="stars">
                <RatingComponent rating={swap.rating} setRating={() => {
                }}/>
            </div>
            <div className="desc">
                {swap.ratingDescription}
            </div>
            <div className="buttons">
                <button type="button" onClick={onClose}>Close</button>
                <button type="button" onClick={deleteReview}>Delete Review</button>
            </div>
        </div>
    );
};

export default ViewReview;