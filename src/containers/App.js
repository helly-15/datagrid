import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from "../components/header/Header";
import Datagrid from "../components/datagrid/Datagrid";
import SearchForm from "../components/search-form/SearchForm";
import actions from "../actions";

function App(state) {
    //console.log (state.data)
  return (
    <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <main>
            <SearchForm/>
        <Datagrid data = {state.data} onSort ={state.onSort} dir ={state.sort} shift ={state.shift} onShift={state.onShift}/>
        </main>
    </div>
  );
}




const mapStateToProps = store => {
    let {search, sort, shift} = store.Sort;
    return {
        data: store.Data,
        search,
        sort,
        shift
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (search) => dispatch({type: 'TABLE_SEARCH', payload: search}),
        onSort: (property) => dispatch(actions.onSort(property)),
        onShift: (oldheading, heading)=> dispatch(actions.onShift(oldheading,heading)),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(App)
