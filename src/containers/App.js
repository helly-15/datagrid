import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from "../components/header/Header";
import Datagrid from "../components/datagrid/Datagrid";
import SearchForm from "../components/search-form/SearchForm";

function App(state) {
  return (
    <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <main>
            <SearchForm/>
        <Datagrid numOfRows = {state.rows} numOfColumns ={state.columns}/>
        </main>
    </div>
  );
}




const mapStateToProps = store => {
    console.log(store);
    return {
        rows: store.Rows.numberOfRows,
        columns: store.Columns.numberOfColumns,
    }
};

export default connect(mapStateToProps)(App)
