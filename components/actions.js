export const test = () => {
	return {
		type: 'TEST',
		payload: 'dicks',
	};
};

export const addTracked = (newItem) => {
	return {
		type: 'ADD_TRACKED',
		payload: newItem,
	};
};

export const setInitialList = (list) => {
	return {
		type: 'SET_INITIAL_LIST',
		payload: list,
	};
};

export const setTitle = (title) => {
	return {
		type: 'SET_TITLE',
		payload: title,
	};
};

export const decrementCount = (title, trackedList) => {
	const updatedList = trackedList.map((item) => {
		if(item.title === title && item.count !== 0) {
			item.count--;
			return item;
		}
		return item;
	});
	return {
		type: 'DECREMENT_COUNT',
		payload: updatedList,
	}
}

export const incrementCount = (title, trackedList) => {
	const updatedList = trackedList.map((item) => {
		if(item.title === title) {
			item.count++;
			return item;
		}
		return item;
	});
	return {
		type: 'INCREMENT_COUNT',
		payload: updatedList,
	};
};