import React from 'react';
// import Picture from './components/picture';
// import BasicCard from './components/card';
// import VideoPlayer from './components/videoPlayer';
// import Modal from './components/modal';
// import Animation from './components/canvasParticles';
import Preloader from './components/loadSpinner';
import './App.css';

// const images = [
//   { imageAlt: null, imageUrl: null },
//   { imageUrl: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", imageAlt: "2" },
//   { imageAlt: "3", imageUrl: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
//   { imageUrl: "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", imageAlt: "4" }
// ];

function App() {
  return (
    <div className="App">
      <Preloader />
      {/* <Animation /> */}
      {/* <Modal showModal>This is a Modal</Modal> */}
      {/* <VideoPlayer
        url="https://vimeo.com/169599296"
        imageUrl=""
        videoTitle="This is a title"
        videoDescription="This is a video description"
        withModal
      /> */}
      {/* <Picture images={images} /> */}
      {/* <Picture image="https://www.w3schools.com/w3css/img_lights.jpg"  imageAlt="Northern Lights" /> */}
    </div>
  );
}

export default App;
