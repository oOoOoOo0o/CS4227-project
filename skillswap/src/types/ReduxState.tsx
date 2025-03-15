import {SkillSwap} from "./SkillSwap.tsx";

export interface SkillSwapState {
    skillSwaps: SkillSwap[];
}

export interface RootState {
    skillSwaps: SkillSwapState;
}