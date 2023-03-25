import React, { useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import AgendaSlide from "./slides/AgendaSlide";
import CodeExampleSlide from "./slides/CodeExampleSlide";
import DefinitionSlide from "./slides/DefinitionSlide";
import DiagramTypesSlide from "./slides/DiagramTypesSlide";
import EndSlide from "./slides/EndSlide";
import InstanceLevelRelationshipsSlides from "./slides/InstanceLevelRelationshipsSlides";
import MainSlide from "./slides/MainSlide";
import OpinionSlide from "./slides/OpinionSlide";
import ScopeSlide from "./slides/ScopeSlide";
import StandardSlide from "./slides/StandardSlide";
import WhatIsUMLSlide from "./slides/WhatIsUMLSlide";
import WhyUseUMLSlide from "./slides/WhyUseUMLSlide";

import { SiCplusplus, SiCsharp, SiTypescript } from "react-icons/si";

import { inheritanceCode, interfaceCode, yamlCode } from "../code";
import BibliographySlide from "./slides/BibliographySlide";

function Slides() {
  const [deck, setDeck] = useState<Reveal.Api>();
  const previous = useRef<string>("");

  const [windowHeight, setWindowHeight] = useState<number>(
    window.innerHeight - 20
  );

  const revealSlidesRef = useRef<HTMLDivElement>(null);

  const goBackToSlideWithExample = (ev: KeyboardEvent) => {
    const loc = window.location.href.split("/");
    if (ev.key === "6") {
      previous.current = `${loc[3]}/${loc[4]}`;
      window.location.href = "#/6";
    } else if (ev.key === "-") {
      window.location.href = previous.current;
    }
  };
  useEffect(() => {
    let localDeck = new Reveal({
      plugins: [],
      progress: true,
      slideNumber: true,
      history: true,
    });
    localDeck.initialize();
    setDeck(localDeck);

    window.addEventListener("keydown", goBackToSlideWithExample);

    return () => {
      window.removeEventListener("keydown", goBackToSlideWithExample);
    };
  }, []);
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
        <CodeExampleSlide code={yamlCode} lang={"yaml"} />
        <DiagramTypesSlide />
        <StandardSlide
          content={
            <>
              <img
                src="https://cdn-images-1.medium.com/v2/resize:fit:1600/1*IqO6TgyLWJ1g9VthkB37sA.png"
                alt="Class diagram"
              />
            </>
          }
          title="Przykład diagramu"
        />
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
        <ScopeSlide />
        <StandardSlide
          title="Relacje"
          content={
            <>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Uml_classes_en.svg/450px-Uml_classes_en.svg.png"
                alt="Relationships"
              />
            </>
          }
        />
        <StandardSlide
          title="Ilość"
          content={
            <>
              <table>
                <thead>
                  <tr>
                    <td>Ilość</td>
                    <td>Opis</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>brak instancji</td>
                  </tr>
                  <tr>
                    <td>0..1</td>
                    <td>brak albo jedna instancja</td>
                  </tr>
                  <tr>
                    <td>1 lub 1..1</td>
                    <td>jedna instancja</td>
                  </tr>
                  <tr>
                    <td>0..* lub *</td>
                    <td>zero lub więcej instancji</td>
                  </tr>
                  <tr>
                    <td>1..*</td>
                    <td>jedna lub więcej instancji</td>
                  </tr>
                </tbody>
              </table>
            </>
          }
        />
        <InstanceLevelRelationshipsSlides />
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
        <CodeExampleSlide
          code={inheritanceCode}
          lang={"java"}
          image={"/inheritance.jpg"}
        />
        <CodeExampleSlide
          code={interfaceCode}
          lang={"java"}
          image={"/interface.jpg"}
        />
        <StandardSlide
          content={
            <>
              <img
                src="https://cdn-images-1.medium.com/v2/resize:fit:1600/1*IqO6TgyLWJ1g9VthkB37sA.png"
                alt="Class diagram"
              />
            </>
          }
          title="Przykład diagramu"
        />
        <StandardSlide
          title="Narzędzia do wizualizacji diagramów klas na podstawie kodu"
          content={
            <>
              <img src={"/vscode.jpg"} alt="VS code + TS" />
              <a
                href="https://marketplace.visualstudio.com/items?itemName=AlexShen.classdiagram-ts"
                rel="noopener"
                target="_blank"
              >
                Rozszerzenie do Visual Studio Code dla <SiTypescript />
              </a>
            </>
          }
          additional={
            <>
              <a
                href="https://learn.microsoft.com/en-us/visualstudio/ide/class-designer/how-to-add-class-diagrams-to-projects?view=vs-2022#install-the-class-designer-component"
                rel="noopener"
                target="_blank"
              >
                Rozszerzenie do Visual Studio dla <SiCsharp />, <SiCplusplus />
              </a>
              <br />
              <a
                href="https://www.doxygen.nl/download.html"
                rel="noopener"
                target="_blank"
              >
                Doxygen
              </a>
            </>
          }
        />
        <WhyUseUMLSlide />
        <EndSlide />
        <OpinionSlide />
        <BibliographySlide />
      </div>
    </div>
  );
}

export default Slides;
