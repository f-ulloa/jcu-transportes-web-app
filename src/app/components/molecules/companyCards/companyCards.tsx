import styles from "./companyCards.module.css";

function CompanyCards() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Misión</div>
        <p className={styles.cardDescription}>
          Proveer soluciones de transporte confiables y seguras, enfocándonos en
          la satisfacción del cliente y la sostenibilidad ambiental.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardTitle}>Visión</div>
        <p className={styles.cardDescription}>
          Ser reconocidos como la mejor opción en transporte, innovando
          constantemente y expandiendo nuestras operaciones a nivel nacional e
          internacional.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardTitle}>Objetivo</div>
        <p className={styles.cardDescription}>
          Consolidar nuestra presencia en el mercado, estableciendo alianzas
          estratégicas y adaptándonos a las necesidades cambiantes de nuestros
          clientes.
        </p>
      </div>
    </div>
  );
}

export default CompanyCards;
