import React, { Component } from "react";
import GalleryListItem from "../GalleryListItem/GalleryListItem";

class GalleryList extends Component {
  render() {
    const galleryArray = this.props.galleryList.map((photo, index) => {
      return <GalleryListItem key={index} photo={photo} />;
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
