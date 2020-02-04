import React from 'react';
import Picture from '../src/components/picture';
import BasicCard from '../src/components/card';
import './App.css';

const items = [
  { imageUrl: "item 1" },
  { imageUrl: "item 2" },
  { imageUrl: "item 3" },
  { imageUrl: "item 4" }
];

function App() {
  return (
    <div className="App">
      {items.map((image) => (
          <BasicCard>
            text
          </BasicCard>
        )
      )}
                <BasicCard>
            {new Date().toLocaleDateString()}
          </BasicCard>
      {/* <Picture image="https://www.w3schools.com/w3css/img_lights.jpg"  imageAlt="Northern Lights" /> */}
    </div>
  );
}

export default App;
