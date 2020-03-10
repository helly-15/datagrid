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
                />
                <Datagrid
                    data={state.data}
                    setDir={state.setDir}
                    dir={state.dir}
                    columnsForSort={state.columnsForSort}
                    setColumnsForSort={state.setColumnsForSort}/>
            </main>
        </div>
    );
}

const mapStateToProps = store => {
    let { dir, columnsForSort} = store.Sort;
let {checked, search} = store.Filter;
    let data = [...searchMatches(search,filterData(checked,store.Data) )];
   // console.log (checked,data)
    //filterData (checked, data);
   // searchMatches(search, data);
    sortTableData(columnsForSort, data, dir);

    return {
        data,
        search,
        dir,
        columnsForSort
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (search) => dispatch({type: 'TABLE_SEARCH', payload: search}),
        setDir: (property) => dispatch(actions.setDir(property)),
        setColumnsForSort: (oldheading, heading) => dispatch(actions.setColumnsForSort(oldheading, heading)),
        onChecked: (checked)=>dispatch (actions.onChecked(checked))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
