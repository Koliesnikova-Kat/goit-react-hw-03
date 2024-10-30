import { useId } from "react";
import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  usernumber: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.username,
      number: values.usernumber,
      id: nanoid(5),
    });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        usernumber: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={styles.input}
            type='text'
            name='username'
            id={nameFieldId}
          />
          <ErrorMessage
            className={styles.error}
            name='username'
            component='span'
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={styles.input}
            type='text'
            name='usernumber'
            id={numberFieldId}
          />
          <ErrorMessage
            className={styles.error}
            name='usernumber'
            component='span'
          />
        </div>
        <button className={styles.button} type='submit'>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
