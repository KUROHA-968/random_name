import FileInput from './component/data/inputFile'
import React from 'react';
import './App.css';
import DataProvider from './component/data/dataProvider';
import RandomName from './component/data/RandomRow';
export default function App() {
  return (
    <div className="App">
      <h1>Import Excel Data in React.js</h1>
      {/* <FileInput /> */}
      <DataProvider />
      {/* <RandomName /> */}
    </div>

  );
  
}

