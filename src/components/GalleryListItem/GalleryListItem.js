import React, { Component } from "react";
import "./GalleryListitem.css";

class GalleryListItem extends Component {
  render() {
    return (
      <div className="galleryListItem-photos">
        <img src={this.props.photo.path}></img>

        <p>
          <button onClick={this.props.clickLove(this.props.photo.id)}>
            Love it!
          </button>
          <br></br>
          <span>{this.props.photo.likes}</span> people like this
        </p>
      </div>
    );
  }
}

export default GalleryListItem;
