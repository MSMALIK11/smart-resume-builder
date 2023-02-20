import React from 'react';
import heroImg from '../../Assets/hero.png';

function Banner() {
  return (
    <div className="banner-wraper flex">
      <div className="left">
        <div className="banner">
          <h1>
            A
            <span className="blue">Resume</span>
            {' '}
            that
            <br />
            {' '}
            stands out!
            <br />
          </h1>
          <h1>
            Makers your own
            <br />
            {' '}
            resume.
            <span className="blue">Its free</span>
          </h1>
        </div>

      </div>
      <div className="right">
        <img src={heroImg} alt="" />

      </div>

    </div>
  );
}

export default Banner;
