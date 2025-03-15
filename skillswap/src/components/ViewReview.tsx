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
        <div>
            <h3>Your Review</h3>
            <RatingComponent rating={swap.rating} setRating={() => {}}/>
            {swap.ratingDescription}
            <button type="button" onClick={onClose}>Close</button>
            <button type="button" onClick={deleteReview}>Delete Review</button>
        </div>
    );
};

export default ViewReview;