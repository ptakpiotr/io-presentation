import React, { useState } from "react";
import LeaveOpinion from "../components/LeaveOpinion";
import Rate from "../components/Rate";

function OpinionSlide() {
  const [text, setText] = useState<string>("");
  const setValue = (val: number) => {};
  return (
    <section>
      <h6>Zachęcam do zostawienia opinii</h6>
      <LeaveOpinion
        maxLength={100}
        minLength={10}
        text={text}
        setText={setText}
      />
      <Rate fun={setValue} maxScore={5} actualScore={2} notEditable={false} />
    </section>
  );
}

export default OpinionSlide;
