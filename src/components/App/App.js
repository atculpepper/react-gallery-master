import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../galleryList/GalleryList";

class App extends Component {
  state = {
    galleryList: [],
  };
  componentDidMount() {
    this.getGallery();
  }
  //getting the gallery photos from the gallery.data.js, which is imported into the server side router, and pulling them into the app.js
  getGallery() {
    axios
      .get("/gallery")
      .then((response) => {
        console.log(response.data);
        this.setState(
          {
            galleryList: response.data,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((err) => console.warn(err));
  }
  clickLove = (id) => (event) => {
    console.log(id);
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        console.log(response.data);
        this.getGallery();
      })
      .catch((err) => console.warn(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Crafts</h1>
        </header>
        <br />
        <GalleryList
          galleryList={this.state.galleryList}
          clickLove={this.clickLove}
        />
      </div>
    );
  }
}

export default App;
