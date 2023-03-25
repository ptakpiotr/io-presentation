import * as React from "react";
import { useEffect, useState } from "react";
import { RiBearSmileLine } from "react-icons/ri";

interface IProps {
  minLength: number;
  maxLength: number;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function LeaveOpinion({
  minLength,
  maxLength,
  text,
  setText,
}: IProps) {
  const [showValidationMessage, setShowValidationMessage] =
    useState<boolean>(true);
  const [validationMessage, _] = useState<string>(
    `Your opinion should be between ${minLength} and ${maxLength} characters long`
  );

  return (
    <div>
      <textarea
        aria-label="Leave opinion"
        placeholder="Leave opinion"
        className="opinionText"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      ></textarea>
      <RiBearSmileLine className="opinionBear" />
      {showValidationMessage ? (
        <div className="validationMessage">{validationMessage}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
