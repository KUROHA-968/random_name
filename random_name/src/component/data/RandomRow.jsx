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
      <button onClick={getRandomRow}>สุ่มรายชื่อ</button>
      {randomRow && (
        <div>
          <h2>Selected Row:</h2>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            {JSON.stringify(randomRow, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default RandomRow;