import React, { Component } from "react";
import GalleryListItem from "../GalleryListItem/GalleryListItem";

//app.js sends the array data to GalleryList.js
//GalleryList.js maps the array, creating a copy

class GalleryList extends Component {
  render() {
    const galleryArray = this.props.galleryList.map((photo, index) => {
      return (
        <GalleryListItem
          key={index}
          photo={photo}
          clickLove={this.props.clickLove}
        />
      );
    });
    /*
    Expected format of what is returned is this:
    (  <div>
          <p>{photo.description}</p>
        </div>
        ),
    (  <div>
          <p>{photo.description}</p>
        </div>
        )
      --> An array of JSX elements

    */
    return (
      <div>
        <p>{galleryArray}</p>
      </div>
    );
  }
}

export default GalleryList;
