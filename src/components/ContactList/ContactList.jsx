import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <Contact
            id={contact.id}
            contactName={contact.name}
            contactPhone={contact.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
