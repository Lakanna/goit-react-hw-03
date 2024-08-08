import css from './Contact.module.css'

export default function Contact({ contact:{name, number, id}, onDelete }) {
   
    return (
        <div className={css.contactBox}>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button className={css.btnDelete} onClick={()=>onDelete(id)}>Delete</button>
        </div>
    )
}