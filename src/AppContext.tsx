import React, { useState, PropsWithChildren, createContext } from "react";
import { IAppContext } from "../Types";

const supportedLanguages = ["pl", "en"];

export const Context = createContext<IAppContext>({
  language: "pl",
  supportedLanguages,
});

function AppContext({ children }: PropsWithChildren) {
  const [lang, setLang] = useState<string>("pl");

  return (
    <Context.Provider
      value={{
        supportedLanguages,
        language: lang,
        setLanguage: setLang,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default AppContext;
