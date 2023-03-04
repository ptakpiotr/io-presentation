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
    slideName: "Slide 3",
  },
  {
    slideName: "Slide 4",
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
