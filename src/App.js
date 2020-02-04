import React from 'react';
// import Picture from './components/picture';
// import BasicCard from './components/card';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

// const items = [
//   { imageUrl: "item 1" },
//   { imageUrl: "item 2" },
//   { imageUrl: "item 3" },
//   { imageUrl: "item 4" }
// ];

function App() {
  return (
    <div className="App">
      <Header>The is the headers</Header>
       <Footer>
      <p>
        All weather data for this site is provided by
        {' '}
        <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">OpenWeather</a>.
      </p>
    </Footer>
      {/* {items.map((image) => (
          <BasicCard>
            text
          </BasicCard>
        )
      )}
                <BasicCard>
            {new Date().toLocaleDateString()}
          </BasicCard> */}
      {/* <Picture image="https://www.w3schools.com/w3css/img_lights.jpg"  imageAlt="Northern Lights" /> */}
    </div>
  );
}

export default App;
