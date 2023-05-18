import React from "react";
import styled from "styled-components";
import AuthLayout from "../../components/AuthLayout";
import ForgotForm from "../../components/ForgotForm";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

export default function Forgot() {
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

  const StyledP = styled.p`
    color: ${(props) => props.theme.palette.text.main};
  `;
  return (
    <AuthLayout height={"68%"}>
      <Logo width={"85px"} height={"85px"} />
      <h3 className='welcome-text'>Welcome to BugHive</h3>
      <ForgotForm />
      <div className='login-footer'>
        <StyledP>
          Return to{" "}
          <Link to={"/login"}>
            <StyledSpan>Login</StyledSpan>
          </Link>
        </StyledP>
        <Line />
        <StyledMsg>
          New to BugHive?{" "}
          <Link to={"/signup"}>
            <StyledSpan>SignUp</StyledSpan>
          </Link>
        </StyledMsg>
      </div>
    </AuthLayout>
  );
}
