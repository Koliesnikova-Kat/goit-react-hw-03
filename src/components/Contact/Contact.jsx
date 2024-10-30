import styles from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ id, contactName, contactPhone, onDelete }) {
  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <span className={styles.name}>
          <RiContactsFill /> {contactName}
        </span>
        <span className={styles.phone}>
          <FaPhoneAlt /> {contactPhone}
        </span>
      </div>
      <button
        type='button'
        className={styles.button}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
