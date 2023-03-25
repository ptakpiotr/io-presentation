import React from "react";
import { IInstanceLevelRelationshipsSlidesProps as IProps } from "../../Types";

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
