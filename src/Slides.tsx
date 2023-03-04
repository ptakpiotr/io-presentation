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
        <CodeExampleSlide />
        <WhyUseUMLSlide />
        <DiagramTypesSlide />
        <EndSlide />
        <OpinionSlide />
      </div>
    </div>
  );
}

export default Slides;
