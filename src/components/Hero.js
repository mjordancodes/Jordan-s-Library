import React, { Component } from 'react';

import HeroImg from '../assets/hero.svg';

const { TimelineMax } = require('gsap/all');

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
      document.getElementById('Cloud-7'),
    ];
    const baseClouds = [
      document.getElementById('base-clouds'),
      document.getElementById('base-clouds-2'),
      document.getElementById('base-clouds-3'),
      document.getElementById('base-clouds-4'),
      document.getElementById('base-clouds-5'),
      document.getElementById('base-clouds-6'),
      document.getElementById('base-clouds-7'),
      document.getElementById('base-clouds-8'),
      document.getElementById('base-clouds-9'),
      document.getElementById('base-clouds-10'),
      document.getElementById('base-clouds-11'),
    ];

    for (let i = 0; i < clouds.length; i++) {
      const time = Math.floor(Math.random() * 150) + 25;
      const delayTime = Math.floor(Math.random() * 20) + 5;
      const variation = Math.floor(Math.random() * 200) + 1;

      const cloudsAnimation = new TimelineMax({ repeat: -1, delay: delayTime });
      cloudsAnimation.fromTo(
        clouds[i],
        time,
        { x: -150 },
        {
          x: 2500,
          y: variation,
        }
      );
    }

    for (let i = 0; i < baseClouds.length; i++) {
      const time = Math.floor(Math.random() * 150) + 45;
      const delayTime = Math.floor(Math.random() * 5) - 4;

      const cloudsAnimation = new TimelineMax({ delay: delayTime });
      cloudsAnimation.to(baseClouds[i], time, {
        x: 2500,
      });
    }
  }

  render() {
    return <HeroImg />;
  }
}

export default Hero;
