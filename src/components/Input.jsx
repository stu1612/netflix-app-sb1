// npm
import { useState } from "react";
// files
import onValidate from "../scripts/validateInput";

export default function Input({
  setup,
  state,
  validation,
  classname,
  inputStyle,
}) {
  const { text, autoFocus, type, required } = setup;
  const [getter, setter] = state;
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div id='input' className={`${classname}`}>
      <input
        type={type}
        value={getter}
        autoFocus={autoFocus}
        onBlur={() => onValidate(validation, getter, setter, setErrorMessage)}
        onChange={(event) => setter(event.target.value)}
        required={required}
        className={inputStyle}
      />
      <span>{text}</span>
      <small className="error">{errorMessage}</small>
    </div>
  );
}
