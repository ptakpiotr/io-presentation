import React, { useState } from "react";
import { sources } from "../../values";

function BibliographySlide() {
  return (
    <section>
      <h6>Bibliografia</h6>
      {sources.map((s) => (
        <a style={{ display: "inline-block" }} key={s.src} href={s.src}>
          {s.src}
        </a>
      ))}
    </section>
  );
}

export default BibliographySlide;
