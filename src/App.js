import React, { useState, useEffect } from 'react';
// import Picture from './components/picture';
// import BasicCard from './components/card';
// import VideoPlayer from './components/videoPlayer';
// import Modal from './components/modal';
// import Animation from './components/canvasParticles';
// import Preloader from './components/loadSpinner';
// import OnPageFilter from './components/pageFilter';
// import DataTable from './components/dataTable';
import './App.css';
// import DragAndDrop from './components/dragAndDrop';

// const images = [
//   { imageAlt: null, imageUrl: null },
//   { imageUrl: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", imageAlt: "2" },
//   { imageAlt: "3", imageUrl: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
//   { imageUrl: "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", imageAlt: "4" }
// ];
// const columns =[
//   {
//       Header: "Id",
//       Value: "id",
//   }, {
//       Header: "Content",
//       Value: "body",
//   }, {
//       Header: "Email",
//       Value: "email",
//   }, {
//       Header: "Name",
//       Value: "name",
//   },
// ]
function App() {
// const [data, setData] = useState([]);
// console.log(data);
// const [hasLoader, setHasLoader] = useState(true);
//   const loadRecordsFromServer = () => {
//       const xmlhr = new XMLHttpRequest();
//       const url = "https://jsonplaceholder.typicode.com/comments";
//       xmlhr.open("GET", url, true);
//       xmlhr.onload = () => {
//           if (xmlhr.readyState === xmlhr.DONE) {
//               if (xmlhr.status === 200) {
//                   const data = JSON.parse(xmlhr.responseText);
//                   setData(data);
//                   setHasLoader(false);
//               }
//           }
//       };
//       xmlhr.send();
//   };

//   useEffect(() => {
//     loadRecordsFromServer();
//   }, [])
//   const [query, setQuery] = React.useState('');

//   const searchFilter = event => {
//     const searchValue = event.target.value;
//     setQuery(searchValue);
// };

// const handleDrop = (files) => {
//   let tempFileList = [];

//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     if (!file.name) {
//       return;
//     }
//     alert(file.name)
//     tempFileList.push(file);
//   }
// }
  return (
    <div className="App">
            {/* <DragAndDrop handleDrop={handleDrop}>
        <div
          type="file"
          name="files"
          accept="image/*"
          multiple
        ></div>
      </DragAndDrop> */}
     {/* <DataTable data={data} columns={columns} hasLoader={hasLoader} totalRecordsPerPage={30} /> */}
      {/* <OnPageFilter query={query} placeHolder={'Place Holder'} searchFilter={searchFilter} /> */}
      {/* <Preloader /> */}
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
