/** @format */

import React from "react";
import styled from "styled-components";

const ErrorMsg = styled.div`
  color: red;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
`;
const Error = ({ msg }) => {
  return <ErrorMsg> {msg} </ErrorMsg>;
};

export default Error;
