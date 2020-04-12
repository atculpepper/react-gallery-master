import React, { Component } from "react";
import "./GalleryListitem.css";

class GalleryListItem extends Component {
  render() {
    return (
      <div className="galleryListItem-photos">
        <img src={this.props.photo.path}></img>

        <p>
          <button>Love it! </button>
          <br></br>
          <span>0</span> people like this
        </p>
      </div>
    );
  }
}

export default GalleryListItem;
