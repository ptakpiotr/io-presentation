import React from "react";
import WikipediaMultiLanguage from "../components/WikipediaMultiLanguage";

function DefinitionSlide() {
  return (
    <section>
      <section>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/UML_logo.svg/1280px-UML_logo.svg.png"
          alt="Logo UML"
        />
      </section>
      <section>
        <WikipediaMultiLanguage link="Unified_Modeling_Language" />
      </section>
      <section>
        <h6>Przykładowy diagram klas</h6>
        <img
          src="https://www.gliffy.com/sites/gliffy/files/image/2020-06/uml_2.png"
          alt="Example"
          style={{
            transform: "scale(0.8)",
          }}
        />
      </section>
      <section>
        <h6>Krótka historia</h6>
        <img
          src="https://miro.com/blog/wp-content/uploads/2021/12/image7-1024x575.png"
          alt="UML history"
        />
      </section>
    </section>
  );
}

export default DefinitionSlide;
