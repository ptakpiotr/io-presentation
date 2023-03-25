import React, { useState } from "react";
import ReactModal from "react-modal";
import { IProsOrCon } from "../../Types";
import { AiFillCloseSquare } from "react-icons/ai";
import { umlProsAndCons } from "../../values";
import Enumerable from "linq";


ReactModal.setAppElement("#root");
function WhyUseUMLSlide() {
  const positiveUML = umlProsAndCons.filter((p) => p.isPro === true);
  const negativeUML = umlProsAndCons.filter((p) => p.isPro === false);

  const modalDescShow = (elemText: string) => {
    setDesc(elemText);
    setShowModal(true);
  };

  const renderBoth = (
    value: IProsOrCon,
    index: number,
    positiveLarger: boolean
  ) => {
    if (positiveLarger) {
      return (
        <tr>
          <td
            onClick={() => {
              modalDescShow(positiveUML[index].desc);
            }}
          >
            {positiveUML[index].proCon}
          </td>
          <td
            onClick={() => {
              modalDescShow(value.desc);
            }}
          >
            {value.proCon}
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td
            onClick={() => {
              modalDescShow(value.desc);
            }}
          >
            {value.proCon}
          </td>
          <td
            onClick={() => {
              modalDescShow(negativeUML[index].desc);
            }}
          >
            {negativeUML[index].proCon}
          </td>
        </tr>
      );
    }
  };

  const renderOne = (
    value: IProsOrCon,
    index: number,
    positiveLarger: boolean
  ) => {
    if (positiveLarger) {
      return <tr>
        <td
          onClick={() => {
            modalDescShow(value.desc);
          }}
        >
          {value.proCon}
        </td>
        <td></td>
      </tr>;
    } else {
      return <tr>
        <td></td>
        <td
          onClick={() => {
            modalDescShow(value.desc);
          }}
        >
          {value.proCon}
        </td>
      </tr>;
    }
  };

  const [desc, setDesc] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <ReactModal
        isOpen={showModal}
        style={{
          overlay: {
            width: "500px",
            height: "200px",
            top: "20%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            transform: "translate(-50%, -50%)",
          },
          content: {
            borderRadius: "3%",
            background: "#fff",
            boxShadow: "10px 10px 31px 0px rgba(0,0,0,0.3)",
          },
        }}
      >
        <header>
          <AiFillCloseSquare
            color={"red"}
            cursor={"pointer"}
            fontSize={26}
            style={{
              float: "right",
            }}
            onClick={() => {
              setShowModal(false);
            }}
          />
        </header>
        <div>{desc}</div>
      </ReactModal>
      <section>
        <h6>Dlaczego używać UML?</h6>
        <table
          style={{
            fontSize: "18px",
          }}
        >
          <thead>
            <tr>
              <th>Zalety</th>
              <th>Wady</th>
            </tr>
          </thead>
          <tbody>
            <>
              {negativeUML.map((p, i) => renderBoth(p, i, true))}
              {positiveUML.length > negativeUML.length
                ? Enumerable.from(positiveUML).skip(negativeUML.length).toArray().map((p, i) => renderOne(p, i, true))
                : Enumerable.from(negativeUML).skip(positiveUML.length).toArray().map((p, i) => renderOne(p, i, false))}
            </>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default WhyUseUMLSlide;
