import React, { useState } from "react";
import "./WheelSpinner.css";

const WheelSpinner = ({ data, onDelete }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [spinDegrees, setSpinDegrees] = useState(0);

  const startSpin = () => {
    if (data.length === 0) return;

    const randomIndex = Math.floor(Math.random() * data.length);
    const degreesPerItem = 360 / data.length;
    const extraSpins = 3 * 360; // Ensure at least 3 full rotations
    const finalDegrees = extraSpins + randomIndex * degreesPerItem + degreesPerItem / 2;

    setSpinDegrees(finalDegrees);
    setIsSpinning(true);

    setTimeout(() => {
      setIsSpinning(false);
      setSelectedItem({ value: data[randomIndex], index: randomIndex });
    }, 4000); // Duration of spin
  };

  const handleDelete = () => {
    if (selectedItem) {
      onDelete(selectedItem.index);
      setSelectedItem(null);
    }
  };

  return (
    <div className="wheel-spinner-container">
      <div className="pointer"></div>
      <div
        className={`wheel ${isSpinning ? "spinning" : ""}`}
        style={{ transform: `rotate(${spinDegrees}deg)` }}
      >
        {data.map((item, index) => {
          const totalSegments = data.length;
          const rotation = (360 / totalSegments) * index; // Rotation for this segment
          const skewAngle = 90 - 360 / totalSegments; // Skew each segment to fit the circle

          return (
            <div
              key={index}
              className="wheel-segment"
              style={{
                transform: `rotate(${rotation}deg) skewY(-${skewAngle}deg)`,
                backgroundColor: index % 2 === 0 ? "red" : "blue", // Alternating colors
              }}
            >
              <span
                style={{
                  transform: `skewY(${skewAngle}deg) rotate(${360 / totalSegments / 2}deg)`,
                }}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>
      <div className="center-circle">Spin</div>
      <button onClick={startSpin} disabled={isSpinning}>
        Spin
      </button>

      {selectedItem && (
        <div className="popup">
          <h3>Selected: {selectedItem.value}</h3>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setSelectedItem(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default WheelSpinner;
