import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import WheelSpinner from '../animation/WheelSpinner';

const DataProvider = () => {
  const [jsonData, setJsonData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setJsonData(json.map(row => Object.values(row).join(', '))); // Flatten data for the wheel
      };

      reader.readAsBinaryString(file);
    }
  };

  const handleDelete = (index) => {
    const updatedData = jsonData.filter((_, i) => i !== index);
    setJsonData(updatedData);
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {jsonData.length > 0 && <WheelSpinner data={jsonData} onDelete={handleDelete} />}
    </div>
  );
};

export default DataProvider;