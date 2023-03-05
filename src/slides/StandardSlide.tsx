import React from "react";

interface IProps {
  title: string;
  content: JSX.Element;
  additional?: JSX.Element;
}

function StandardSlide({ title, content, additional }: IProps) {
  return (
    <section>
      <section>
        <h6>{title}</h6>
        <div>{content}</div>
      </section>
      {additional ? <section>{additional}</section> : <></>}
    </section>
  );
}

export default StandardSlide;
