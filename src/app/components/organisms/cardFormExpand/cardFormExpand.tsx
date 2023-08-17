import { FormExpand } from "@/app/components/molecules/formExpand/formExpand";
import styles from "./cardFormExpand.module.css";

export function CardFormExpand({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.leftContent}>
          <div> Hello world</div>
        </div>
        <div className={styles.rightContent}>
          <FormExpand onClick={onClick} />
          <button className={styles.closeButton} onClick={onClick}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
