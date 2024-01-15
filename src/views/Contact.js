import React from 'react';
import { contactDB } from '../config/myDB';
import ContactCard from '../components/contactCard';

const Contact = () => {

  return (
    <section id="contact">
      <div>
        <h1>available 24/7.</h1>

        <ul className='contact-list'>
          {
            contactDB.map((contact) => (
              <ContactCard show={true} key={contact.id} link={contact.link} title={contact.title}  logo={contact.logo}/>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Contact