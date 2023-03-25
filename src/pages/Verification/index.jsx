import React from "react";
import styled from "styled-components";
import AuthLayout from "../../components/AuthLayout";
import Logo from "../../components/Logo";
import VerificationForm from "../../components/VarificationForm";

export default function Verification() {
  const StyledSpan = styled.span`
    color: ${(props) => props.theme.palette.lightYellow};
    cursor: pointer;
  `;

  const Line = styled.hr`
    width: 100%;
    background-color: #c6c6c6;
  `;

  const StyledMsg = styled.p`
    color: ${(props) => props.theme.palette.text.main};
  `;

  return (
    <AuthLayout height={"68%"}>
      <Logo width={"85px"} height={"85px"} />
      <h3 className='welcome-text'>Welcome to BugHive</h3>
      <VerificationForm />
      <div className='login-footer'>
        <StyledSpan>Resend Code</StyledSpan>
        <Line />
        <StyledMsg>
          Return to <StyledSpan>Login</StyledSpan>
        </StyledMsg>
      </div>
    </AuthLayout>
  );
}
