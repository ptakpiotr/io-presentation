import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  code: string;
  lang: string;
};
function Syntax({ code, lang }: Props) {
  return (
    <div
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(code);
        }
      }}
    >
      <SyntaxHighlighter
        language={lang}
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
