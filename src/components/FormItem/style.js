/** @format */

import styled from "styled-components";

export const StyledInput = styled.input`
	width: 90%;
	margin-bottom: 1rem;
	background-color: ${props=>props.theme.palette.primary};
  border: 0.5px solid ${props=>props.theme.palette.text.secondary};
  border-radius: 5px;
  padding: 12px 16px;
	color: ${props=>props.theme.palette.text.main};
  &::placeholder {
    font-family: "Ruda";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${props=>props.theme.palette.text.main};
  }
`;
