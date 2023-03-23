import React from "react";
import AuthLayout from "../../components/AuthLayout";
import Logo from "../../components/Logo";

export default function SignUp() {
  return (
    <AuthLayout height={"80%"}>
      <Logo width={"85px"} height={"85px"} />
      <h3 className='welcome-text'>Welcome to BugHive</h3>
    </AuthLayout>
  );
}
