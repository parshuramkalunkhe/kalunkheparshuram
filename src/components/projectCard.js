import React from 'react'

const projectCard = (props) => {
    return (
        <>
            <div class="card my-3 mx-3" >
                <div class="row g-0">
                    <div class="col-md-4 d-flex">
                        <iframe width="100%" height="100%" className='img-fluid rounded align-self-center' src={props.ytLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2>- {props.title}</h2>
                            <p className="card-text">{props.desc} <a href={props.link} target='_blank'  rel="noreferrer">GitHub</a>, {props.naLink ? <a href={props.naLink} target='_blank'  rel="noreferrer">Netlify</a> : "" }.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default projectCard