import React from 'react';
import './App.css';
import DataProvider from './component/data/dataProvider';
export default function App() {
  return (
    <div className="App">
      <h1>อัปโหลดไฟล์ excel เพื่อสร้างข้อมูล</h1>
      {/* <FileInput /> */}
      <DataProvider />
      {/* <RandomName /> */}
    </div>

  );
  
}

