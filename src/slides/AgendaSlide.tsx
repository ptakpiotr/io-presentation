import React, { useState } from "react";
import { BsArrowUpRightSquare } from "react-icons/bs";
import {slidesInfo} from "../../values";

function AgendaSlide() {
  return (
    <section style={{
      fontSize:"14px"
    }}>
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

export default AgendaSlide;
