import styles from "../component/ContentBlock.module.scss";


export function ContentBlock({ title, text, className, src, subtitle, btntext, href, valid= true, children }) {
  return (
    <div className={styles.main}>
      <div className={styles.image}> {src} </div>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.text}>{text}</p>
      { children }
      {valid} {valid  && <button className={styles.button}><p> <a href={href}>{btntext}</a></p></button>}     

      
    </div>
  );
}
