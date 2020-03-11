import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from "../components/header/Header";
import Datagrid from "../components/datagrid/Datagrid";
import SearchForm from "../components/search-form/SearchForm";
import actions from "../actions";
import {sortTableData} from "../utils/sortTable";
import {filterData} from "../utils/filterAvailability";
import {searchMatches} from "../utils/search";
import dropdownFilter from "../utils/dropdownFilter";

function App(state) {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <main>
                <SearchForm
                onSearch ={state.onSearchChange}
                onChecked ={state.onChecked}
                onColorChange ={state.onColorChange}
                color = {state.color}
                onVirtualize ={state.onVirtualize}
                />
                <Datagrid
                    data={state.data}
                    setDir={state.setDir}
                    dir={state.dir}
                    columnsForSort={state.columnsForSort}
                    setColumnsForSort={state.setColumnsForSort}
                    virtualize ={state.virtualize}
                />
            </main>
        </div>
    );
}

const mapStateToProps = store => {
    let { dir, columnsForSort} = store.Sort;
let {checked, search, color,virtualize} = store.Filter;
console.log (color);
    let data = [...dropdownFilter (color, searchMatches(search,filterData(checked,store.Data) ))];

    sortTableData(columnsForSort, data, dir);

    return {
        data,
        search,
        dir,
        columnsForSort,
        checked,
        color,
        virtualize
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (search) => dispatch({type: 'TABLE_SEARCH', payload: search}),
        setDir: (property) => dispatch(actions.setDir(property)),
        setColumnsForSort: (oldheading, heading) => dispatch(actions.setColumnsForSort(oldheading, heading)),
        onChecked: (checked)=>dispatch (actions.onChecked(checked)),
        onColorChange: (color)=>dispatch (actions.onColorChange(color)),
        onVirtualize: (virtualize)=>dispatch (actions.onVirtualize(virtualize)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
