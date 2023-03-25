import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Context } from "../AppContext";
import LanguagePicker from "./LanguagePicker";
import wiki from "wikipedia";

interface IProps {
  link: string;
}

function WikipediaMultiLanguage({ link }: IProps) {
  const { language } = useContext(Context);
  const { data } = useQuery({
    queryKey: [link, language],
    queryFn: async () => {
      const page = await wiki.page(link);
      await wiki.setLang(language);
      
      const summary = await page.summary();
      return { summary, title: page.title };
    },
  });
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h6
          style={{
            flex: 2,
          }}
        >
          {data?.title}
        </h6>
        <LanguagePicker />
      </div>
      {data?.summary.extract}
    </div>
  );
}

export default WikipediaMultiLanguage;
