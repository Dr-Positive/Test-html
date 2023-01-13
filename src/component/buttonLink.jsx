import styles from "../component/buttonLink.module.scss";

export function ButtonLink({ text,  className}) {
  return (
    <button  className={styles.button}>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
