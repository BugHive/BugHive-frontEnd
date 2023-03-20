import React from 'react';

import styled from 'styled-components';

import LogoImg from '../../assets/images/Logo.png'; 




function index({width , height}) {
  return (
    <>
       <img width={width} height={height} src={LogoImg} alt="logo"/>
    </>
  )
}

export default index