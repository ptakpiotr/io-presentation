import { ISlideInfo, ISite, StandardSlideProps, IProsOrCon } from "./Types";

export const slidesInfo: ISlideInfo[] = [
  {
    slideName: "Powitanie",
  },
  {
    slideName: "Agenda",
  },
  {
    slideName: "UML - informacje ogólne",
  },
  {
    slideName: "Czym jest UML?",
  },
  {
    slideName: "Czym (nie) jest UML - YML?",
  },
  {
    slideName: "Rodzaje diagramów UML",
  },
  {
    slideName: "Przykład diagramu",
  },
  {
    slideName: "Modyfikatory dostępu",
  },
  {
    slideName: "Zakres",
  },
  {
    slideName: "Relacje",
  },
  {
    slideName: "Ilość",
  },
  {
    slideName: "Zależności",
  },
  {
    slideName: "Asocjacja",
  },
  {
    slideName: "Agregacja",
  },
  {
    slideName: "Kompozycja",
  },
  {
    slideName: "Dziedziczenie",
  },
  {
    slideName: "Implementacja",
  },
  {
    slideName: "Atrybuty",
  },
  {
    slideName: "Diagram I",
  },
  {
    slideName: "Diagram II",
  },
  {
    slideName: "Przykład diagramu",
  },
  {
    slideName: "Narzędzia do tworzenia diagramów na podstawie kodu",
  },
  {
    slideName: "Dlaczego używać UML?",
  },
];

export const sources: ISite[] = [
  {
    src: "https://wazniak.mimuw.edu.pl/images/7/76/Io-5-wyk.pdf",
  },
  {
    src: "https://en.wikipedia.org/wiki/Class_diagram",
  },
  {
    src: "https://marketplace.visualstudio.com/items?itemName=AlexShen.classdiagram-ts",
  },
  {
    src: "https://medium.com/nerd-for-tech/how-to-generate-uml-diagrams-from-your-existing-code-814d27bd1537",
  },
];

export const slides: StandardSlideProps[] = [
  {
    id: "dependency",
    title: "Zależności",
    content: (
      <>
        <p>
          Jest to najprostszy i najsłabszy rodzaj relacji łączący klasy. Jedna z
          klas wpływa w jeden z następujących sposobów na drugą
        </p>
        <ul>
          <li>
            {"<<call>>"} - operacje wywołane na jednej klasie wywołują operacje
            na klasie drugiej
          </li>
          <li>{"<<create>>"} - jedna z klas tworzy instancję drugiej klasy</li>
          <li>
            {"<<use>>"} - do implementacji jednej z klasy wymagamy klasę drugą
          </li>
        </ul>
      </>
    ),
    additional: (
      <>
        <img src="/dependencies.jpg" alt="Dependencies" />
      </>
    ),
  },
  {
    id: "association",
    title: "Asocjacja",
    content: (
      <>
        <p>
          Jest to powiązanie pomiędzy obiektami klas. Asocjacja obiektów jest
          niezależna co znaczy, że usunięcie jednego z nich nie powoduje
          usunięcia drugiego.
        </p>
      </>
    ),
    additional: (
      <>
        <img src="/association.jpg" alt="Association" />
      </>
    ),
  },
  {
    id: "aggregation",
    title: "Agregacja",
    content: (
      <>
        <p>
          Jest to relacja typu całość - część. Można ją opisać jako silniejszą
          formę asocjacji. W tym wypadku możemy już określić jednoznacznie
          właściciela oraz podległy my obiekt.
        </p>
      </>
    ),
    additional: (
      <>
        <img src="/aggregation.jpg" alt="Aggregation" />
      </>
    ),
  },
  {
    id: "composition",
    title: "Kompozycja",
    content: (
      <>
        <p>
          Jest to relacja typu całość - część, ale w odróżnieniu od
          <q>zwyczajnej</q> asocjacji nazywamy ją silną. <br />W jej przypadku
          obiekt pozostający częścią jest ściśle związany z właścicielem
        </p>
      </>
    ),
    additional: (
      <>
        <img src="/composition.jpg" alt="Composition" />
      </>
    ),
  },
  {
    id: "inheritance",
    title: "Dziedziczenie",
    content: (
      <>
        <p>
          Opisuje relacje pomiędzy typami, można ją interpretować jako
          uogólnienie (aczkolwiek dziedziczenie != uogólnienie).
        </p>
      </>
    ),
    additional: (
      <>
        <img src="/inheritance.jpg" alt="Inheritance" />
      </>
    ),
  },
  {
    id: "interface",
    title: "Implementacja",
    content: (
      <>
        <p>
          Jest inną formą uogólnienia, jest bardziej ogólna, aczkolwiek wymusza
          realizację interfejsu (który możemy potraktować jako swego rodzaju
          kontrakt)
        </p>
      </>
    ),
    additional: (
      <>
        <img src="/interface.jpg" alt="Interface" />
      </>
    ),
  },
];

export const umlProsAndCons: IProsOrCon[] = [
  {
    proCon: "Uniwersalność",
    desc: "UML jest językiem, który może być wykorzystany w wielu przypadkach (nie tylko dziedzina informatyki)",
    isPro: true,
  },
  {
    proCon: "Prostota",
    desc: "Język UML jest łatwy do nauczenia i umożliwia przedstawianie koncepcji nie tylko osobom o umiejętnościach technicznych",
    isPro: true,
  },
  {
    proCon: "Niezależność od implementacji",
    desc: "Stosowanie UML nie narzuca w żaden sposób języka programowania, który mamy używać",
    isPro: true,
  },
  {
    proCon: "Dokumentacja",
    desc: "Zastosowanie UML + dobre nazewnictwo może w skuteczny sposób ułatwić dokumentowanie funkcjonalności",
    isPro: true,
  },
  {
    proCon: "Nadmierna złożność",
    desc: "UML może być bardzo skomplikowany, a ilość powiązań znaczna",
    isPro: false,
  },
  {
    proCon: "Uogólnienie",
    desc: "O wielu konceptach łatwo można mówić w języku modelowania a rzeczywista implementacja może być dużo trudniejsza",
    isPro: false,
  },
  {
    proCon: "Nadmierne użycie",
    desc: "",
    isPro: false,
  },
];
