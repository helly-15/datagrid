const actions = {
    setDir: (direction) => ({type: 'SET_TABLE_DIR', payload: direction}),
    setColumnsForSort: (oldheading, heading) => ({type: 'SET_TABLE_COLUMNS_FOR_SORT', payload: oldheading.concat(heading)}),
    onSearchChange: (search) => ({type: 'TABLE_SEARCH', payload: search}),
    onChecked: (checked) => ({type: 'CHECKED', payload: checked}),
    onColorChange:(color)=> ({type: 'COLOR_SELECT', payload: color}),
    onVirtualize: (virtualize)=>({type: 'VIRTUALIZATION', payload:virtualize}),
    setSelection: (newSelection)=>({type: 'SELECT', payload: newSelection})
};

export default actions;
