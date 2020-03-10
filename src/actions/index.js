const actions = {
        onSort: (direction) => ({type: 'TABLE_SORT', payload: direction}),
        onShift: (oldheading, heading) => ({type: 'TABLE_SHIFT', payload: oldheading.concat(heading)}),
        onSearchChange: (search) => ({type: 'TABLE_SEARCH', payload: search}),
    }
;

export default actions;
