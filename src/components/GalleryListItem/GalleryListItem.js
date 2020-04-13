import React, { Component } from "react";
import "./GalleryListitem.css";

class GalleryListItem extends Component {
  state = {
    imageToggle: true,
  };
  toggleImage = (event) => {
    this.setState({
      imageToggle: !this.state.imageToggle,
    });
  };

  render() {
    let imageElement = (
      <img src={this.props.photo.path} alt={this.props.photo.description} />
    );

    if (!this.state.imageToggle) {
      imageElement = <p>{this.props.photo.description}</p>;
    }

    return (
      <div className="galleryListItem-photos">
        <div onClick={this.toggleImage}>{imageElement}</div>

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
}

export default GalleryListItem;
