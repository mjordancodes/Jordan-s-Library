import React, { Component } from 'react';

class Hero extends Component {
  componentDidMount() {
    const clouds = [
      document.getElementById('Clouds'),
      document.getElementById('Clouds-2'),
      document.getElementById('Cloud'),
      document.getElementById('Cloud-2'),
      document.getElementById('Cloud-3'),
      document.getElementById('Cloud-4'),
      document.getElementById('Cloud-5'),
      document.getElementById('Cloud-6'),
    ];
    console.log(clouds);
  }

  render() {
    return <h1>HERO</h1>;
  }
}

export default Hero;
