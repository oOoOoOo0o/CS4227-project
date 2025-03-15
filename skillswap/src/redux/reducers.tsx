import {SkillSwap} from "../types/SkillSwap.tsx";

interface SkillSwapState {
    skillSwaps: SkillSwap[];
}

const initialState: SkillSwapState = {
    skillSwaps: [],
};

const skillSwapReducer = (state = initialState, action: any): SkillSwapState => {
    switch (action.type) {
        case "SET_SWAPS":
            return {...state, skillSwaps: action.payload};
        case "UPDATE_SWAP_STATUS":
            return {
                ...state,
                skillSwaps: state.skillSwaps.map((swap) => swap.id === action.payload.swapId ? {
                        ...swap,
                        status: action.payload.status
                    } : swap
                )
            };
        case 'REMOVE_SWAP':
            return {
                ...state,
                skillSwaps: state.skillSwaps.filter((swap) => swap.id !== action.payload),
            };
        default:
            return state;
    }
};

export default skillSwapReducer;