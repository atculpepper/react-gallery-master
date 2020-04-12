import React, { Component } from "react";

class GalleryListItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.photo.path}></img>
      </div>
    );
  }
}

export default GalleryListItem;
