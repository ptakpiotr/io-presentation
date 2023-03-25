import React, { useState } from "react";
import LeaveOpinion from "../components/LeaveOpinion";
import MyButton from "../components/MyButton";
import Rate from "../components/Rate";

function OpinionSlide() {
  const [text, setText] = useState<string>("");
  const [val, setVal] = useState<number>(0);
  const setValue = (val: number) => {
    setVal(val);
  };

  const handleClick = async () => {
    const res = await fetch(import.meta.env.REACT_APP_FUNCTION_URL, {
      method: "POST",
      body: JSON.stringify({
        opinion: text,
        rating: val,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.ok) {
      alert("Opinia dodana z sukcesem");
    }
  };

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
      <MyButton onClick={handleClick}>Submit opinion</MyButton>
    </section>
  );
}

export default OpinionSlide;
