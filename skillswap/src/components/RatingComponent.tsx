import React from "react";

interface RatingComponentProps {
    rating: number;
    setRating: (rating: number) => void;
}

const RatingComponent: React.FC<RatingComponentProps> = ({rating, setRating}) => {
    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    return (
        <div>
            <h4>Rating: </h4>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => handleRatingChange(star)}
                      style={{cursor: "pointer", color: rating >= star ? "gold": "gray"}}
                >★</span>))}
        </div>
    );
};

export default RatingComponent;