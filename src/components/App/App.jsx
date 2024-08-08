import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import css from './App.module.css'
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'





function App() {
 
  const [contactList, setContactList] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]      
  )

  function addContact(newContact) {
    setContactList((prevStat) => {
      console.log(prevStat);
      console.log(newContact);
      return [...prevStat, newContact]
    })
  }

  function deleteContact(contactId) {
    setContactList((prevState) => {
        return prevState.filter(({id})=> id!==contactId)
      })
  }
  

return (<div>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm onAddContact={addContact}/>
          <SearchBox /> 
          <ContactList contactList={contactList} onDelete={deleteContact} />
        </div>)
 
}





export default App
