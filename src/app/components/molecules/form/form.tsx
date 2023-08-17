import styles from "./form.module.css";

function Form({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className={styles.formCard}>
      <h2 className={styles.formBoxTitle}>Formulario de Viaje</h2>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label className={styles.inputTitle}>Nombre</label>
          <input className={styles.input} type="text" placeholder="Nombre" />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputTitle}>Dirección inicio</label>
          <input className={styles.input} type="text" placeholder="Nombre" />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputTitle}>Dirección destino</label>
          <input className={styles.input} type="text" placeholder="Nombre" />
        </div>
        <button onClick={onClick} type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
