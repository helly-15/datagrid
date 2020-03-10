const filtersReducerDefaultState = {
    sortBy: '',
};
 export function filtersReducer  (state = filtersReducerDefaultState, action) {
    switch (action.type) {
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortType
            };
        case 'CLEAR':
            return {
                ...state,
                text: action.defaultFilter.text,
                sortBy: action.defaultFilter.sortBy,
                startYear: action.defaultFilter.startYear,
                endYear: action.defaultFilter.endYear
            };
        default:
            return state;
    }
}
