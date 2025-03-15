import {SkillSwap} from "../types/SkillSwap.tsx";
import {ReviewData} from "../types/ReviewData.tsx";

// Using mock data for now
let mockSkillSwaps: SkillSwap[] = [
    {
        id: 0,
        skillGiven: "Nail Artist",
        skillReceived: "Running Coaching",
        userName: "carthy27",
        date: "",
        status: "requested",
        rating: -1,
        ratingDescription: "",
    },
    {
        id: 1,
        skillGiven: "Painting",
        skillReceived: "Mechanic",
        userName: "Alice4",
        date: "",
        status: "pending",
        rating: -1,
        ratingDescription: "",
    },
    {
        id: 2,
        skillGiven: "Spanish Lesson",
        skillReceived: "Piano Lesson",
        userName: "Jason_",
        date: "",
        status: "ongoing",
        rating: -1,
        ratingDescription: "",
    },
    {
        id: 3,
        skillGiven: "Gardener",
        skillReceived: "Photography Tutorial",
        userName: "user001243",
        date: "2025/02/15",
        status: "completed",
        rating: -1,
        ratingDescription: "",
    },
];

export const getSkillSwaps = async (): Promise<SkillSwap[]> => {
    return new Promise((resolve) => {
        // simulating 500ms delay
        setTimeout(() => {
            resolve(mockSkillSwaps);
        }, 500);
    });
};

export const acceptSwap = async (swapId: number): Promise<void> => {
    const swapIndex = mockSkillSwaps.findIndex((swap) => swap.id === swapId);
    if (swapIndex !== -1) {
        mockSkillSwaps[swapIndex].status = "ongoing";
        console.log(`Swap ${swapId} ongoing.`);
    }
};

export const cancelSwap = async (swapId: number): Promise<void> => {
    mockSkillSwaps = mockSkillSwaps.filter((swap) => swap.id !== swapId);
    console.log(`Swap ${swapId} cancelled.`);
}

export const markSwapComplete = async (swapId: number): Promise<void> => {
    const swapIndex = mockSkillSwaps.findIndex((swap) => swap.id === swapId);
    if (swapIndex !== -1) {
        mockSkillSwaps[swapIndex].status = "completed";

        let today: Date = new Date();
        let dd: string = String(today.getDate()).padStart(2, '0');
        let mm: string = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy: number = today.getFullYear();

        mockSkillSwaps[swapIndex].date = mm + '/' + dd + '/' + yyyy;
        console.log(`Swap ${swapId} completed.`);
    }
}

export const submitReview = async (swapId: number, reviewData: ReviewData): Promise<void> => {
    const swapIndex = mockSkillSwaps.findIndex((swap) => swap.id === swapId);
    if (swapIndex !== -1) {
        mockSkillSwaps[swapIndex].rating = reviewData.rating;
        mockSkillSwaps[swapIndex].ratingDescription = reviewData.description;
        console.log(`Swap ${swapId} reviewed.`);
    }
};