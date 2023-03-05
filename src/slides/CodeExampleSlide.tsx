import React, { useEffect, useState } from "react";
import Syntax from "../components/Syntax";

interface IProps {
  image: JSX.Element;
  code: string;
  lang: string;
}

function CodeExampleSlide({ image, code, lang }: IProps) {
  return (
    <section>
      <section>
        <h6>Diagram</h6>
        {image}
      </section>
      <section>
        <h6>Przykład</h6>
        <Syntax code={code} lang={lang} />
      </section>
    </section>
  );
}

export default CodeExampleSlide;
