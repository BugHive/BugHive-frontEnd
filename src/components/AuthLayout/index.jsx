import React from "react";
import { AuthContainer, AuthWrapper } from "./style";

export default function AuthLayout(props) {
  return (
    <AuthWrapper>
      <AuthContainer customHeight={props.height}>
        {props.children}
      </AuthContainer>
      <p className='auth-footer'>
        CopyRight &copy; 2023 Front-end students. All rights reserved
      </p>
    </AuthWrapper>
  );
}
