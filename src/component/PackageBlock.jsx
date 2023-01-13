import styles from "../component/PackageBlock.module.scss";
import { ButtonLink } from "./buttonLink";

export function PackageBlock({ title, text, className, src, cost, textbtn }) {
  return (
   
    <div  className={styles.packageBlock}>
      <div  className={styles.packageBlock__title} >
        <h1>{title}</h1>
      </div>
      <div  className={styles.packageBlock__text} >
        <p>{text}</p>
      </div>
      <div  className={styles.packageBlock__cost}>
        <h2>{cost}</h2>
      </div>


    </div>
  );
}
