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
