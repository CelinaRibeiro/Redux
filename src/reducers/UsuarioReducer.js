const initialState = {
    name: ''
};

const UsarioReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
            break;
    }

    return state;
};

export default UsarioReducer;