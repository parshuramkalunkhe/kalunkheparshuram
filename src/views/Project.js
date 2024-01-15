import React from 'react';
import projectDB from '../config/myDB.js';
import ProjectCard from '../components/projectCard.js';

const Project = () => {
  return (
    <section id="project">
      <h1>projects</h1>
      <b>NOTE</b> - You can find my all projects on <a href="https://github.com/parshuramkalunkhe/" target="_blank" rel="noopener noreferrer">github</a>.
      {
        projectDB.map((data)=>{
          return <ProjectCard show={true} key={data.id} ytLink={data.ytLink} title={data.title} desc={data.desc} link={data.link} naLink={data.naLink} />
        })
      }
      

    </section>
  )
}

export default Project