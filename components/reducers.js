const defaultState = {
	tracked: [],
	addModal: false
};

export const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'ADD_TRACKED': 
			const newTracked = [...state.tracked, {title: action.payload, count: 0}];
			return {
				...state,
				tracked: newTracked,
			};
		case 'SET_TITLE':
			return {
				...state,
				title: action.payload,
			};
		case 'SET_INITIAL_LIST':
			return {
				...state,
				tracked: action.payload
			};
		case 'INCREMENT_COUNT':
			return {
				...state,
				tracked: action.payload
			};
		case 'DECREMENT_COUNT':
			return {
				...state,
				tracked: action.payload
			}
		default:
			return state;
			break;
	}
}