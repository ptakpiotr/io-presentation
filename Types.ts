export interface ISlideInfo {
  slideName: string;
}

export interface IAppContext {
  language: string;
  supportedLanguages: string[];
  setLanguage?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IProsOrCon {
  proCon: string;
  desc: string;
  isPro:boolean;
}

export interface ISite {
  src : string;
}

export interface IInstanceLevelRelationshipsSlidesProps {
  title: string;
  content: React.ReactNode;
  additional?: React.ReactNode;
}

export type StandardSlideProps = IInstanceLevelRelationshipsSlidesProps & {
  id: string;
};
