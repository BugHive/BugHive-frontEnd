import React from "react";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

export default function Start() {
  return (
    <AuthLayout>
      <Logo width={"85px"} height={"85px"} />
      <h3 className='welcome-text'>Welcome to BugHive</h3>
      <Button title={"Log In"} />
      <div className='lines'>
        <div className='line-left'></div>
        <p className='new-to-bug-hive'>New to Bug Hive ?</p>
        <div className='line-right'></div>
      </div>
      <Button title={"Sign Up"} switched />
    </AuthLayout>
  );
}
