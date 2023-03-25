import React, { ComponentProps } from "react";

function MyButton(props: ComponentProps<"button">) {
  return (
    <button
      {...props}
      style={{
        ...props.style,
        padding: "10px",
        margin: "10px",
        border:"none",
        borderRadius:"5px",
        background:"lightblue"
      }}
    >
      {props.children}
    </button>
  );
}

export default MyButton;
