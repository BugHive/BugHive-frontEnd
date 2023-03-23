import React from "react";
import styled from "styled-components";
import AuthLayout from "../../components/AuthLayout";
import Logo from "../../components/Logo";
import SignUpForm from "../../components/SignUpForm";

export default function SignUp() {
  const StyledText = styled.div`
    color: #606060;
    width: 60%;
    text-align: center;
    margin-top: 1rem;
  `;

  const StyledSpan = styled.span`
    color: ${(props) => props.theme.palette.lightYellow};
    cursor: pointer;
  `;

  const Line = styled.hr`
    width: 100%;
    background-color: #c6c6c6;
    margin-top: 1rem;
  `;

  const StyledMsg = styled.p`
    color: ${(props) => props.theme.palette.text.main};
    margin-top: 1rem;
  `;

  return (
    <AuthLayout height={"90%"}>
      <Logo width={"85px"} height={"85px"} />
      <h3 className='welcome-text'>Welcome to BugHive</h3>
      <SignUpForm />
      <StyledText>
        By signing up, I agree to BugHive Terms and Privacy Policy
      </StyledText>
      <Line />
      <StyledMsg>
        Already have an account? <StyledSpan>Login</StyledSpan>
      </StyledMsg>
    </AuthLayout>
  );
}
