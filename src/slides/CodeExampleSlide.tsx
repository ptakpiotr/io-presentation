import React, { useEffect, useState } from "react";
import Syntax from "../components/Syntax";

export interface IProps {
  image?: string;
  code: string;
  lang: string;
}

function CodeExampleSlide({ image, code, lang }: IProps) {
  return (
    <section>
      {image ? (
        <section>
          <h6>Diagram</h6>
          <img src={image} alt="Diagram" />
        </section>
      ) : (
        <></>
      )}
      <section>
        <h6>Przykład</h6>
        <Syntax code={code} lang={lang} />
      </section>
    </section>
  );
}

export default CodeExampleSlide;
