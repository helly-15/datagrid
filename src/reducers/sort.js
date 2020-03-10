let defaultTableState = {
    dir: true,
    search: '',
    columnsForSort: [],
};

export function sortReducer (state = defaultTableState, action)  {
    switch (action.type) {
        case 'SET_TABLE_DIR':
            return {...state, dir: action.payload};
        case 'SET_TABLE_COLUMNS_FOR_SORT':
            return {...state, columnsForSort: action.payload};
        case 'TABLE_SEARCH':
            return {...state, search: action.payload};
        default:
            return state;
    }
}


