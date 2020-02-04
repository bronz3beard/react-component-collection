import React from 'react';
import Picture from '../src/components/picture';
import './App.css';

function App() {
  return (
    <div className="App">
      <Picture 
        image="https://www.w3schools.com/w3css/img_lights.jpg" 
        imageAlt="Northern Lights"
      />
    </div>
  );
}

export default App;
