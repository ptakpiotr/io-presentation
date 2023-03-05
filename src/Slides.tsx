import React, { Children, useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import AgendaSlide from "./slides/AgendaSlide";
import CodeExampleSlide from "./slides/CodeExampleSlide";
import DefinitionSlide from "./slides/DefinitionSlide";
import DiagramTypesSlide from "./slides/DiagramTypesSlide";
import EndSlide from "./slides/EndSlide";
import MainSlide from "./slides/MainSlide";
import OpinionSlide from "./slides/OpinionSlide";
import StandardSlide from "./slides/StandardSlide";
import WhatIsUMLSlide from "./slides/WhatIsUMLSlide";
import WhyUseUMLSlide from "./slides/WhyUseUMLSlide";

function Slides() {
  const [deck, setDeck] = useState<Reveal.Api>();
  const [windowHeight, setWindowHeight] = useState<number>(
    window.innerHeight - 20
  );

  const revealSlidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let localDeck = new Reveal({
      plugins: [],
      progress: true,
      slideNumber: true,
      history: true,
    });
    localDeck.initialize();
    setDeck(localDeck);
  }, []);
  const obj = {
    code: "this is the test",
    lang: "java",
  };

  return (
    <div
      className="reveal"
      style={{
        height: `${windowHeight}px`,
      }}
    >
      <div className="slides" ref={revealSlidesRef}>
        <MainSlide />
        <AgendaSlide />
        <DefinitionSlide />
        <WhatIsUMLSlide />
        <CodeExampleSlide {...obj} image={<>Test</>} />
        <WhyUseUMLSlide />
        <DiagramTypesSlide />
        <StandardSlide
          content={
            <>
              <b>Diagramem klas</b> nazywamy wizualizację relacji pomiędzy
              klasami.
            </>
          }
          title="Diagram klas"
          additional={<>TUTAJ JAKAŚ FAJNA WIZUALIZACJA</>}
        />
        <StandardSlide content={<>TUTAJ KLASA</>} title="Omówienie klasy" />
        <StandardSlide
          content={
            <>
              <ul>
                <li>
                  <strong>+</strong> {"=>"} publiczny
                </li>
                <li>
                  <strong>#</strong> {"=>"} chroniony
                </li>
                <li>
                  <strong>~</strong> {"=>"} pakietowy
                </li>
                <li>
                  <strong>-</strong> {"=>"} prywatny
                </li>
              </ul>
            </>
          }
          title={"Modyfikatory dostępu"}
        />
        <StandardSlide
          content={
            <>
              <>Każdy atrybut, metodę można opisać w sposób ustrukturyzowany</>
              <div
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  margin: "5px",
                }}
              >
                <span title="modyfikator dostępu">widoczność</span> nazwa:typ
                <span title="aplikowalne do obiektów - limit ilości wystąpień">
                  [krotność]
                </span>
                <span title="dodatkowe restrykcje">{"{ograniczenia}"}</span> =
                wartość domyślna?
              </div>
            </>
          }
          title="Atrybuty"
        />
        <EndSlide />
        <OpinionSlide />
      </div>
    </div>
  );
}

export default Slides;
