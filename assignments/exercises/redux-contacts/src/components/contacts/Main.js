import React from 'react';

import AddContactForm from './AddContactForm';
import ContactsList from './ContactsList';

export default function Main(props){
  return(
    <main>
      <AddContactForm/>
      <ContactsList/>
    </main>
  )
}
