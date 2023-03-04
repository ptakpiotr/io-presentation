import React from "react";
import styles from "./styles/MainSlide.module.css";
import { AiFillGithub } from "react-icons/ai";
function MainSlide() {
  return (
    <section>
      <h2>Diagramy UML</h2>
      <h6>Inżynieria oprogramowania</h6>
      <div className={styles.authorInfo}>
        <h6>Piotr Ptak</h6>
        <a
          href="https://github.com/ptakpiotr"
          target="_blank"
          rel="noopener"
          title="Project github page"
        >
          <AiFillGithub className={styles.authorInfoIcon} color={"blue"} />
        </a>
        <h6>WFiIS AGH</h6>
      </div>
    </section>
  );
}

export default MainSlide;
