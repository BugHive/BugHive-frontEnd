import React from "react";
import { StyledButton } from "./style";

export default function Button(props) {
  return (
    <StyledButton switched={props.switched} type='submit'>
      {props.title}
    </StyledButton>
  );
}
