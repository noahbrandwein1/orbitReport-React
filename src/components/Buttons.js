import React from 'react';

const Buttons = ({ filterByType, setSat, displaySats, satData }) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>All Satellites</button>
    </div>
  );
};

export default Buttons;