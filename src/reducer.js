const initialState = { registryItems: [] };
import { ADD_ITEM_TO_REGISTRY } from './actions'; 

export default (state = initialState, action) => {
    switch (action.type) {
    	case ADD_ITEM_TO_REGISTRY:
    		return Object.assign({}, state, { registryItems: [...state.registryItems, action.item] });
    	default:
    		return state;
    }
};
