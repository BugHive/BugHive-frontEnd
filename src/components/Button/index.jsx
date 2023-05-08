import React from "react";
import { StyledButton } from "./style";

export default function Button(props) {
  return (
    <StyledButton
      switched={props.switched}
      type={props.type ? props.type : "submit"}
      onClick={props.onClick}>
      {props.title}
    </StyledButton>
  );
}
