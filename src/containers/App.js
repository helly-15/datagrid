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
import StickyHeader from "../utils/stickyHeader";
import {filterDeletedRow} from "../utils/filterDeletedRow";

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
                virtualize = {state.virtualize}
                onVirtualize ={state.onVirtualize}
                onRowDelete ={state.onRowDelete}
                selection ={state.selection}
                deletedRows ={state.deletedRows}
                data ={state.data}
                />
                <Datagrid
                    data={state.data}
                    setDir={state.setDir}
                    dir={state.dir}
                    selection ={state.selection}
                    columnsForSort={state.columnsForSort}
                    setColumnsForSort={state.setColumnsForSort}
                    virtualize ={state.virtualize}
                    setSelection = {state.setSelection}
                    onHideColumn = {state.onHideColumn}
                    hiddenColumn = {state.hiddenColumns}
                />
                <StickyHeader/>
            </main>
        </div>
    );

}

const mapStateToProps = store => {
    let { dir, columnsForSort} = store.Sort;
    let {checked, search, color, virtualize, selection, deletedRows, hiddenColumns} = store.Filter;
    //console.log (window.localStorage)
    //console.log (JSON.parse (window.localStorage.getItem('0')));
    /*let retrieveDataFromLocalStorage = ()=>{
        let data =[];
        for (let key in localStorage){

            if (localStorage.hasOwnProperty(key)){
                data.push (JSON.parse(window.localStorage.getItem(key)))
                //console.log (key);
            }
        }
        return data;
    }*/
    //console.log (retrieveDataFromLocalStorage()[0]);
   //window.localStorage.clear();
   /* let data = retrieveDataFromLocalStorage();


    if (data.length === 0) {
        data = [...filterDeletedRow(deletedRows,dropdownFilter (color, searchMatches(search,filterData(checked,store.Data)) ))];
    }*/
    //console.log (data);
   let data = [...filterDeletedRow(deletedRows,dropdownFilter (color, searchMatches(search,filterData(checked,store.Data)) ))];
    sortTableData(columnsForSort, data, dir);
    window.localStorage.clear();
    for (let i=0;i<data.length;i++){
        window.localStorage.setItem(`${i}`, JSON.stringify(data[i]));
    };





    return {
        data,
        search,
        dir,
        columnsForSort,
        checked,
        color,
        virtualize,
        selection,
        deletedRows,
        hiddenColumns
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
        setSelection: (newSelection)=>dispatch(actions.setSelection(newSelection)),
        onRowDelete: (deletedSelection)=>dispatch({type: 'DELETE_ROW', payload: deletedSelection}),
        onHideColumn: (hiddenColumn)=>dispatch({type: 'HIDE_COLUMN', payload: hiddenColumn}),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
