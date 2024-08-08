import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

export default function ContactForm({onAddContact}) {

    const fieldNameId = useId();
    const fieldNumberId = useId();

    function handleSubmit(values, actions) {
        console.log(values);
        const newContact = { ...values, id: Date.now().toString() };
        console.log(newContact);
        onAddContact(newContact);
        actions.resetForm()
 }

    return (
        <Formik initialValues={{ name: "", number:"" }} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor={fieldNameId}>Name</label>
                <Field type="text" name="name" id={fieldNameId}></Field>

                <label htmlFor={fieldNumberId}>Number</label>
                <Field type="" name="number" id={fieldNumberId}></Field>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
    

}