/** @format */

import React from "react";
import styled from "styled-components";

const ErrorMsg = styled.div`
  color: red;
  margin-top: -0.8rem;
  margin-bottom: 0.8rem;
`;
const Error = ({ msg }) => {
  return <ErrorMsg> {msg} </ErrorMsg>;
};

export default Error;
