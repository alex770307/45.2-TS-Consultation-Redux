import Action from "./types/Action";
import SandwichState from "./types/SandwichState";


const initialstate: SandwichState = {
    value: 'Бутербродный конфигуратор:'
}

export default function sandwichReduser(
    state: SandwichState = initialstate,
    action: Action
): SandwichState {
    switch (action.type) {
        case 'sandwich/addIngredient':
            return { ...state, value: `${state.value} ${action.payload}` };
        case 'sandwich/clear':
            return { ...state, value: 'Бутербродный конфигуратор:' };
        default:
            return state;
    }
}