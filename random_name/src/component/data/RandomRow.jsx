import React, { useState } from 'react';

const RandomRow = ({ data }) => {
  const [randomRow, setRandomRow] = useState(null);

  const getRandomRow = () => {
    // Generate a random index based on the length of the data array
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedRow = data[randomIndex];
    setRandomRow(selectedRow);
  };

  return (
    <div>
      <button onClick={getRandomRow}>สุ่มรายชื่อ </button>

      {randomRow && (
        <div>
          <ul>
            {Object.entries(randomRow).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default RandomRow;