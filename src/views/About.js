import React from 'react';
import Card from '../components/Card';
import { contentDB, keypointDB } from '../config/myDB';

const About = () => {

  return (
    <section id="about">
      <div>
        <p>
          Hi There! I'm Parshuram Kalunkhe and Graduated in Bachelor of Science in Information Technology.
          I'm Engineer by profession and I love linux and computers.
        </p>
        <p className='keypoint'>- <i>key points <b>about me</b>.</i></p>
        <ul style={{margin: "0", paddingLeft: "2.5rem"}}>
          {
            keypointDB.map((keypoint) => (
              <Card show={true} key={keypoint.id} desc={keypoint.desc} />
            ))
          }
        </ul>
      </div>

      <div className='mt-3'>
        <h2>interest</h2>
        <ul>
          {
            contentDB.map((content) => (
              <Card show={true} key={content.id} link={content.link} title={content.title} desc={content.desc} />
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default About
