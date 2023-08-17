import styles from "./navbar.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.navbarBrand}>Jcu Transportes</h1>
        <ul className={styles.navbarLinks}>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/revisar-estado">Revisar Estado Viaje</a>
          </li>
          <li>
            <a href="/cerrar-sesion">Cerrar Sesión</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
