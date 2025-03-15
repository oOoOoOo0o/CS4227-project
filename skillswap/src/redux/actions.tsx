import {SkillSwap} from "../types/SkillSwap.tsx";

export const setSkillSwaps = (swaps: SkillSwap[]) => ({
    type: "SET_SWAPS",
    payload: swaps,
});

export const updateSkillSwapStatus = (swapId: number, status: string) => ({
    type: "UPDATE_SWAP_STATUS",
    payload: {swapId, status},
});

export const removeSkillSwap = (swapId: number) => ({
    type: 'REMOVE_SWAP',
    payload: swapId,
});