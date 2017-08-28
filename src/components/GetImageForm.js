import React, {Component} from 'react';
import APIKEY from './apiKey.js';

import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

class GetImageForm extends Component {
  constructor(props) {
    super(props);

    this.fetchRoverImage = this.fetchRoverImage.bind(this);
    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);

    this.state = {
      rover: 'Curiosity',
      camera: 'fhaz',
      sols: 0,
      pictures: []
    };
  };

  fetchRoverImage = () => {

    this.setState({
      camera: this.state.camera,
      rover: this.state.rover,
      sols: this.state.sols,
      pictures: []
    });

    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sols;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${APIKEY}`;

    fetch(imageUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.photos);
      this.setState({
        rover: 'Curiosity',
        camera: 'fhaz',
        sols: 0,
        pictures: data.photos
      });
    })

    .catch((error) => console.log('There was an error:', error));

  };

  handleRover = (event) => {
    this.setState({rover: event.target.value})
  }

  handleCamera = (event) => {
    this.setState({camera: event.target.value})
  }

  handleSol = (event) => {
    this.setState({sols: event.target.value})
  }

  render() {

    return (
      <div>
        <h1>NASA Mars Rover Gallery</h1>
        <form>

          <label htmlFor='rover'>Rover</label>
          <select onChange={this.handleRover} id='rover' value={this.state.rover}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>

          <label>Camera Type</label>
          <select onChange={this.handleCamera} value={this.state.camera}>
            <option value="fhaz">FHAZ (Front Camera)</option>
            <option value="rhaz">RHAZ (Back Camera)</option>
            <option value="navcam">NAVCAM (Navigation Camera)</option>
          </select>

          <label htmlFor="sol">Martial Sol: 0-2000</label>
          <input onChange={this.handleSol} type="number" min="0" max="2000" value={this.state.sols} />

        </form>

        <GetImageButton getImage={this.fetchRoverImage} />
        <ImageDisplay pictures={this.state.pictures} />
      </div>
    )
  }
}

export default GetImageForm;
