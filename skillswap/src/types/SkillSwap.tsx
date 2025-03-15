export type SwapStatus = "requested" | "pending" | "ongoing" | "completed";

export interface SkillSwap {
    id: number;
    skillGiven: string;
    skillReceived: string;
    userName: string;
    date: string;
    status: SwapStatus;
    rating: number;
    ratingDescription: string,
}