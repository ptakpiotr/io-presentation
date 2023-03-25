import React from "react";
import { slides } from "../../values";
import StandardSlide from "./StandardSlide";

function InstanceLevelRelationshipsSlides() {
  return (
    <>
      {slides.map((s) => (
        <StandardSlide key={s.id} {...s} />
      ))}
    </>
  );
}

export default InstanceLevelRelationshipsSlides;
