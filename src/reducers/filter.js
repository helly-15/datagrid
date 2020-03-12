const filtersReducerDefaultState = {
    checked: false,
    search:'',
    color: [],
    virtualize : true
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
        case 'COLOR_SELECT':
            return{
                ...state,
                color: action.payload
            };
        case 'VIRTUALIZATION':
            return {
                ...state,
                virtualize: action.payload
            };
        default:
            return state;
    }
}
