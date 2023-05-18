import React from "react";
import styled from "styled-components";
import AuthLayout from "../../components/AuthLayout";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

export default function Login() {
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
    <AuthLayout height={"70%"}>
      <Logo width={"85px"} height={"85px"} />
      <h3 className='welcome-text'>Welcome to BugHive</h3>
      <LoginForm />
      <div className='login-footer'>
        <Link to={"/forgot"}>
          <StyledSpan>Forgot password?</StyledSpan>
        </Link>
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
