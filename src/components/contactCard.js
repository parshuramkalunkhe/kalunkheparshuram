import React from 'react'

const contactCard = ({ link, title, logo }) => {
    return (
        <>
            <li>
                <a href={link} target='_blank' rel='noopener noreferrer'><i className={logo}></i>{title}</a>
            </li>
        </>
    )
}

export default contactCard;