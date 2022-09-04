export const initialState = {
    something: ""
};

const reducer = (state, action) => {
    console.log(action.type, " --- ", action.payload);

    switch (action.type) {
        case "SET_SOMETHING":
            return {
                ...state,
                something: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;