// Action Types
export const ADD_ITEM_TO_REGISTRY = 'ADD_ITEM_TO_REGISTRY';

// Action Creators
export const createNewItemAction = (item) => ({
	type: ADD_ITEM_TO_REGISTRY,
	item
});
