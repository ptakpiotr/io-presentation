import React, { useState } from "react";
import { ISlideInfo } from "../../Types";
import { BsArrowUpRightSquare } from "react-icons/bs";

const slidesInfo: ISlideInfo[] = [
  {
    slideName: "Powitanie",
  },
  {
    slideName: "Agenda",
  },
  {
    slideName: "UML - informacje ogólne",
  },
  {
    slideName: "Czym jest UML?",
  },
  {
    slideName: "Pierwszy przykład",
  },
  {
    slideName: "Dlaczego używać UML?",
  },
  {
    slideName: "Rodzaje diagramów UML",
  },
  {
    slideName: "Diagram klas",
  },
  {
    slideName: "Omówienie klasy",
  },
  {
    slideName: "Modyfikatory dostępu",
  },
  {
    slideName: "Atrybuty",
  },
];

function AgendaSlide() {
  return (
    <section>
      <ol>
        {slidesInfo.map((s, i) => (
          <li key={s.slideName}>
            {s.slideName}{" "}
            <BsArrowUpRightSquare
              onClick={() => {
                window.location.href = `/#/${i}`;
              }}
              color={"blue"}
              style={{
                margin: 5,
                padding: 2,
                cursor: "pointer",
              }}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}

/**onClick={() => {
              window.location.href = `/#/${s.slideNumber - 1}`;
            }} */

export default AgendaSlide;
