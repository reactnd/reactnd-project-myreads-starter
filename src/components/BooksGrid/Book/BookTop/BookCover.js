import React, { Component } from 'react';
//import {getImageHeight} from '../../../../utils';

export default class BookCover extends Component {


  getImageHeight = (url) => {
    const image = new Image();
    image.src = url;
    return image.naturalHeight
  }

  render() {
    const bookThumbnailURL = this.props.bookThumbnailURL;
    const getImageHeight = this.getImageHeight

    return (
      
      <div
        className="book-cover"
        style={{
          width: 128,
          height: getImageHeight(bookThumbnailURL),
          maxHeight: 200,
          backgroundImage: `url("${bookThumbnailURL}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      />
    );
  }
}
