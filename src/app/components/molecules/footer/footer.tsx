import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.info}>Jcu Transportes</p>
        <p className={styles.info}>Teléfono: +123-456-7890</p>
        <p className={styles.info}>Correo: info@jcuteansportes.com</p>
      </div>
    </footer>
  );
}

export default Footer;
