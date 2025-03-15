import React, {useState} from "react";
import {submitReview} from "../services/api";
import RatingComponent from "./RatingComponent.tsx";
import {ReviewData} from "../types/ReviewData.tsx";
import "./Modal.css"

interface ReviewFormProps {
    swapId: number;
    onSubmitReview: (rating: number, ratingDescription: string) => void;
    onClose: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({swapId, onSubmitReview, onClose}) => {
    const [rating, setRating] = useState<number>(0);
    const [description, setDescription] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const reviewData: ReviewData = {rating, description};

        if (rating < 1 || rating > 5) {
            alert("Please enter a number of stars to give this review.");
            return;
        }

        try {
            submitReview(swapId, reviewData);
            alert("Review submitted successfully!");
            onSubmitReview(rating, description);
            onClose();
        } catch (error) {
            alert("Failed to submit review, please try again later.");
        }
    };

    return (
        <form className="modal-content" onSubmit={handleSubmit}>
            <h3>Leave a Review</h3>
            <div className="stars">
                <RatingComponent rating={rating} setRating={setRating}/>
            </div>
            <div className="desc">
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write a review!"
                />
            </div>
            <div className="buttons">
                <button type="submit">Submit Review</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </div>
        </form>
    );
};

export default ReviewForm;