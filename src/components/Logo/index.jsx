import React from 'react';

import styled from 'styled-components';

import LogoImg from '../../assets/images/Logo.png'; 

const Logo = styled.div`
  

`;
function index({width , height}) {
  return (
    <Logo>
       <img width={width} height={height} src={LogoImg} alt="logo"/>
    </Logo>
  )
}

export default index