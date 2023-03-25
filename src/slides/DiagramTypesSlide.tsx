import React from "react";
import styles from "./styles/DiagramTypesSlide.module.css";

function DiagramTypesSlide() {
  return (
    <section>
      <h6>Rodzaje diagramów UML</h6>
      <ul>
        <li className={styles.structural}>
          <span>diagram pakietów</span>
        </li>
        <li className={styles.structural}>
          <span>diagram klas</span>
        </li>
        <li className={styles.structural}>
          <span>diagram struktur złożonych</span>
        </li>
        <li className={styles.structural}>
          <span>diagram komponentów</span>
        </li>
        <li className={styles.structural}>
          <span>diagram wdrożenia</span>
        </li>
        <li className={styles.behavioral}>
          <span>diagram przypadków użycia</span>
        </li>
        <li className={styles.behavioral}>
          <span>diagram czynności</span>
        </li>
        <li className={styles.behavioral}>
          <span>diagram maszyny stanowej</span>
        </li>
        <li className={styles.behavioral}>
          <span>diagram interakcji</span>
        </li>
        <li className={styles.behavioral}>
          <span>diagram uwarunkowań stanowych</span>
        </li>
      </ul>
    </section>
  );
}

export default DiagramTypesSlide;
