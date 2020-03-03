import React, { useState } from 'react';

import './App.css';
import Header from "./components/header/Header";
import Datagrid from "./components/datagrid/Datagrid";

function App() {
    const [rows, setRows] = useState(40);
    const [columns, setColumns] = useState(7);
  return (
    <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <main>
        <Datagrid numOfRows = {rows} numOfColumns ={columns}/>
        </main>
    </div>
  );
}

export default App;
