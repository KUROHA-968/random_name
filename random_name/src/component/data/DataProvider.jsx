
import React, { useState } from 'react';
import * as XLSX from 'xlsx';  // Import the xlsx library
import RandomRow from './RandomRow';

const DataProvider = () => {
  const [jsonData, setJsonData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];  // Get the uploaded file
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });

        // Assuming the first sheet contains the data, you can change this if needed
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        
        // Convert the worksheet data to JSON
        const json = XLSX.utils.sheet_to_json(worksheet);
        setJsonData(json);  // Store the JSON data in state
      };

      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <h1>Upload an Excel File</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      
      {/* Pass the JSON data to the RandomRow component */}
      {jsonData.length > 0 && <RandomRow data={jsonData} />}
    </div>
  );
};

export default DataProvider;