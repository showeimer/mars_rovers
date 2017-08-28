import React from 'react';

const GetImageButton = (props) => {
    return(
      <button onClick={props.getImage}>
        Get Rover Image
      </button>
    )
}

export default GetImageButton;
