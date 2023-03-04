import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  code: string;
};
function Syntax({ code }: Props) {
  return (
    <div
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(code);
        }
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        wrapLongLines={true}
        showLineNumbers={true}
        customStyle={{
          cursor: "pointer",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default Syntax;
