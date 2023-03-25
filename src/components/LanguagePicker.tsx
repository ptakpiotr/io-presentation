import React, { useContext } from "react";
import Select from "react-select";
import { Context } from "../AppContext";

function LanguagePicker() {
  const { supportedLanguages, setLanguage } = useContext(Context);

  return (
    <Select
      onChange={(selectedLanguage) => {
        if (setLanguage) {
          setLanguage(selectedLanguage?.label!);
        }
      }}
      styles={{
        control: (styles) => ({ ...styles, flex: 2,minWidth:"100px" }),
      }}
      options={supportedLanguages.map((s) => ({ label: s, value: s }))}
    />
  );
}

export default LanguagePicker;
