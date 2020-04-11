import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../galleryList/galleryList";

class App extends Component {
  componentDidMount() {
    this.getGallery();
  }
  //getting the gallery photos from the gallery.data.js, which is imported into the server side router, and pulling them into the app.js
  getGallery() {
    axios
      .get("/gallery")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.warn(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}

export default App;
