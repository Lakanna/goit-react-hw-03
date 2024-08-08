import css from './Contact.module.css'

export default function Contact({ contact }) {
   
    return (
        <div className={css.contactBox}>
            <div>
                <p>{ contact.name}</p>
                <p>{ contact.number}</p>
            </div>
            <button className={css.btnDelete}>Delete</button>
        </div>
    )
}