import React, { useState } from 'react';

import './App.css';
import Header from "./components/header/Header";
import Datagrid from "./components/datagrid/Datagrid";
import SearchForm from "./components/search-form/SearchForm";

function App() {
    const [rows] = useState(40);
    const [columns] = useState(7);
  return (
    <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <main>
            <SearchForm/>
        <Datagrid numOfRows = {rows} numOfColumns ={columns}/>
        </main>
    </div>
  );
}

export default App;
