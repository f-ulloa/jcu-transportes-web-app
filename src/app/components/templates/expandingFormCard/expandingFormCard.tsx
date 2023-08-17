"use client";
import Form from "@/app/components/molecules/form/form";
import styles from "./expandingFormCard.module.css";
import { useState } from "react";
import { CardFormExpand } from "@/app/components/organisms/cardFormExpand/cardFormExpand";

export default function ExpandingFormCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <Form onClick={handleExpand} />

      {isExpanded && (
        <div className={styles.cardOverlay}>
          <CardFormExpand onClick={handleExpand} />
        </div>
      )}
    </div>
  );
}
