import React, { Component } from 'react';

import HeroImg from '../assets/hero.svg';

const { TimelineMax, SlowMo } = require('gsap/all');

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

    for (let i = 0; i < clouds.length; i++) {
      const cloudsAnimation = new TimelineMax({ repeat: -1, delay: 3 * i });
      cloudsAnimation.fromTo(
        clouds[i],
        80,
        { x: -2100 },
        { x: 2000, ease: SlowMo.ease.config(0.7, 0.7, false) }
      );
    }
  }

  render() {
    return <HeroImg />;
  }
}

export default Hero;
