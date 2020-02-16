import React, { useState, useEffect } from "react";
// import Picture from './components/picture';
// import BasicCard from './components/card';
// import VideoPlayer from './components/videoPlayer';
import Modal from "./components/modal";
import DragAndDrop from "./components/dragAndDrop";
// import Animation from './components/canvasParticles';
// import Preloader from './components/loadSpinner';
// import OnPageFilter from './components/pageFilter';
import DataTable from "./components/dataTable";
// import DragAndDrop from './components/dragAndDrop';
// import ContextMenu from './components/customContextMenu';
import "./App.css";

// const images = [
//   { imageAlt: null, imageUrl: null },
//   { imageUrl: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", imageAlt: "2" },
//   { imageAlt: "3", imageUrl: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
//   { imageUrl: "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", imageAlt: "4" }
// ];
const columns = [
  {
    Header: "Id",
    Value: "id"
  },
  {
    Header: "Content",
    Value: "body"
  },
  {
    Header: "Email",
    Value: "email"
  },
  {
    Header: "Name",
    Value: "name"
  }
];

// const customLinks = [
//   {
//     id: 0,
//     title: "SHARE FB",
//     url: `https://www.facebook.com/sharer.php?u=https%3A%2F%2Fgoogle.com`,
//     class: "fb-xfbml-parse-ignore",
//     target: "_blank",
//     rel: "noopener noreferrer"
//   },
//   {
//     id: 1,
//     title: `TWEET #hashtag`,
//     url: `https://twitter.com/intent/tweet?button_hashtag=hashtag&ref_src=twsrc%5Etfw`,
//     class: "twitter-hashtag-button",
//     target: "_blank",
//     rel: "noopener noreferrer"
//   },
//   {
//     id: 2,
//     title: `FOLLOW @roryfn`,
//     url: `https://twitter.com/roryfn?ref_src=twsrc%5Etfw`,
//     class: "twitter-follow-button",
//     target: "_blank",
//     rel: "noopener noreferrer"
//   },
//   {
//     id: 3,
//     title: `TWEET Me :-) @roryfn`,
//     url: `https://twitter.com/intent/tweet?screen_name=roryfn&ref_src=twsrc%5Etfw`,
//     class: "twitter-mention-button",
//     target: "_blank",
//     rel: "noopener noreferrer"
//   }
// ];
function App() {
  const [data, setData] = useState([]);
  console.log(data);
  const [hasLoader, setHasLoader] = useState(true);
  const loadRecordsFromServer = () => {
    const xmlhr = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/comments";
    xmlhr.open("GET", url, true);
    xmlhr.onload = () => {
      if (xmlhr.readyState === xmlhr.DONE) {
        if (xmlhr.status === 200) {
          const data = JSON.parse(xmlhr.responseText);
          setData(data);
          setHasLoader(false);
        }
      }
    };
    xmlhr.send();
  };

  useEffect(() => {
    loadRecordsFromServer();
  }, []);
  const [query, setQuery] = React.useState("");

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
  const handleModal = () => {
    console.log("modal clicked");
  };
  return (
    <div className="App">
      {/* <ContextMenu customLinks={customLinks} /> */}
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
      <Modal showModal backgroundColor="blue" handleModal={handleModal}>
        <DataTable
          data={data}
          columns={columns}
          hasLoader={hasLoader}
          totalRecordsPerPage={30}
        />
      </Modal>
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
