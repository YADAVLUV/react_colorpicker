import React, { useState } from 'react';

function App() {
  const [selectedColor, setSelectedColor] = useState('#ff0000'); // Initial color (red)

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor,
          margin: '20px',
        }}
      ></div>
      <p>Selected color: {selectedColor}</p>
    </div>
  );
}

export default App;

