import React from 'react';

const Card = (props) => {
  return (
    <div>
      {
        props.show
          ?
          <li>
            <a href={props.link} target='_blank' rel='noopener noreferrer'>{props.title}</a> {props.desc}
          </li>
          :
          <div>
            <p> {props.skills} : <span>{props.skills_desc}</span></p>
          </div>
      }


    </div>
  )
}

export default Card