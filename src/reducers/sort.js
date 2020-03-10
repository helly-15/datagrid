let defaultTableState = {
    sort: true,
    search: '',
    shift: [],
};

export function sortReducer (state = defaultTableState, action)  {
    switch (action.type) {
        case 'TABLE_SORT':
            return {...state, sort: action.payload};
        case 'TABLE_SHIFT':
            return {...state, shift: action.payload};
        case 'TABLE_SEARCH':
            return {...state, search: action.payload};
        default:
            return state;
    }
}


