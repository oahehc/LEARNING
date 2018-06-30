const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
        case 'DECREMENT':
            return state + action.number;
        default:
            return state;
    }
}

export default counterReducer;