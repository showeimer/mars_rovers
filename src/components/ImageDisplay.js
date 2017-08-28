import React from 'react';

const ImageDisplay = (props) => {

  const pictures = props.pictures.map((picture) => {
    return (
    <img src={picture.img_src} key={picture.id} alt='' />
    )
  });

  return (
    <div className="gallery">
      {pictures}
    </div>
  )
}

export default ImageDisplay;
