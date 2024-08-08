import Contact from "../Contact/Contact"

export default function ContactList({ contactList , onDelete}) {
    return <>
        {contactList.map((contact) => {
            console.log(contact);
            return <Contact contact={contact} key={contact.id} onDelete={ onDelete} />
        })}
    </>


}