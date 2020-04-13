import React, { Component } from "react";
import "./GalleryListitem.css";

function toggleAction(event) {
  event.preventDefault();
  console.log("you clicked on a photo");
}

class GalleryListItem extends Component {
  render() {
    //if else statement here. Need to capture data on click and figure out how to alternate rending of this.props.photo.path and this.props.photo.description
    if (this.props.photo.showPhoto) {
      return (
        <div className="galleryListItem-photos">
          <img
            className="image"
            onClick={this.props.clickLove(this.props.photo.showPhoto)}
            src={this.props.photo.path}
          ></img>

          <div className="galleryList-btn-and-count">
            <button
              className="gallery-like-btn"
              onClick={this.props.clickLove(this.props.photo.id)}
            >
              Love it!
            </button>
            <br></br>
            <span>{this.props.photo.likes}</span> people like this
          </div>
        </div>
      );
    }
    return (
      <div className="galleryListItem-photos">
        <p onClick={toggleAction} src={this.props.photo.description}></p>

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
