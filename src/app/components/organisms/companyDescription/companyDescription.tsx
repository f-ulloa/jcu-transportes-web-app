import CompanyCards from "@/app/components/molecules/companyCards/companyCards";
import styles from "./companyDescription.module.css";

function CompanyDescription() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sobre Nosotros</h2>
      <p className={styles.description}>
        JCU Transportes ha sido un pilar en la industria del transporte desde su
        fundación en 1995. Con un enfoque en la innovación, la seguridad y la
        eficiencia, nos hemos esforzado por ser más que simplemente una compañía
        de transporte: buscamos ser su socio de confianza en todos sus desafíos
        logísticos.
      </p>
      <CompanyCards />
    </div>
  );
}

export default CompanyDescription;
