const filtersReducerDefaultState = {
    checked: false,
    search:'',
};
 export function filtersReducer  (state = filtersReducerDefaultState, action) {
    switch (action.type) {
        case 'CHECKED':
            return {
                ...state,
                checked: action.payload
            };
        case 'TABLE_SEARCH':
            return{
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
}
