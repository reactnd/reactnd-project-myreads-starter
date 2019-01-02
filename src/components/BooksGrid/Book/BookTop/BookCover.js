import React, { Component } from 'react';
//import {getImageHeight} from '../../../../utils';

export default class BookCover extends Component {


  getImageHeight = (url) => {
    const image = new Image();
    image.src = url;
    return image.naturalHeight
  }

  getImageDimensions = (url) => {
    const image = new Image();
    let imageDimensions = [];
    image.src = url;
    imageDimensions = [image.naturalWidth, image.naturalHeight]
    return imageDimensions;
  }

  render() {
    const bookThumbnailURL = this.props.bookThumbnailURL;
    const getImageHeight = this.getImageHeight
    const imageDimensions = this.getImageDimensions(bookThumbnailURL)

    return (
      
      <div
        className="book-cover"
        style={{
          //width: 128,
          width: imageDimensions[0],
          //height: 190,
          height: imageDimensions[1],
          maxHeight: 200,
          backgroundImage: `url("${bookThumbnailURL}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundColor: "white",
        }}
      />
    );
  }
}
