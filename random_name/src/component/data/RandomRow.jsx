import React, { useState } from 'react';
import '../../App.css';

const RandomRow = ({ data }) => {
  const [dataArray, setDataArray] = useState(data); // Use state to track the array
  const [randomRow, setRandomRow] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const getRandomRow = () => {
    setIsSpinning(true); // Show spinner
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dataArray.length);
      const selectedRow = { ...dataArray[randomIndex], index: randomIndex };
      setRandomRow(selectedRow);
      setIsSpinning(false); // Hide spinner
      setShowPopup(true); // Show popup
    }, 3000); // Spin for 3 seconds
  };

  const deleteRow = () => {
    if (randomRow) {
      // Create a new array without the selected row
      const updatedDataArray = dataArray.filter((_, index) => index !== randomRow.index);
      setDataArray(updatedDataArray); // Update state
    }
    setShowPopup(false);
    setRandomRow(null);
  };

  return (
    <div>
      <button onClick={getRandomRow}>สุ่มรายชื่อ</button>
      <div className="spinner-container">
        {isSpinning && <div className="spinner"></div>}
      </div>

      {showPopup && randomRow && (
        <>
          <div className="overlay"></div>
          <div className="popup">
            <h2>Selected Row</h2>
            <ul>
              {Object.entries(randomRow).map(([key, value], index) =>
                key !== 'index' ? (
                  <li key={index}>
                    <strong>{key}:</strong> {value}
                  </li>
                ) : null
              )}
            </ul>
            <button className="delete" onClick={deleteRow}>
              Delete
            </button>
            <button className="cancel" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </>
      )}

      <div>
        {/* <h2>Remaining Data:</h2> */}
        {/* <ul>
          {dataArray.map((row, index) => (
            <li key={index}>
              {Object.values(row).join(', ')}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default RandomRow;