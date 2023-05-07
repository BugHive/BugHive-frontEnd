import React from "react";
import styled from "styled-components";

export default function UnsavedEntry() {
  const Wrapper = styled.div`
    background-color: ${(props) => props.theme.palette.secondary};
    height: 70vh;
    width: 80%;
    margin-top: 4rem;
    margin-left: 2.5rem;
    padding: 2rem;
    p {
      color: ${(props) => props.theme.palette.text.main};
      font-size: 18px;
      font-weight: bold;
    }
  `;

  return (
    <Wrapper>
      <p>Last Unsaved Entry</p>
    </Wrapper>
  );
}
