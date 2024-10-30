import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={styles.container}>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        type='text'
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}