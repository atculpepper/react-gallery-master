import React, { Component } from "react";

class GalleryListItem extends Component {
  render() {
    return (
      <div>
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
