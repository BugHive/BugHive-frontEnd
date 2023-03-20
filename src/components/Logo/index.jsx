import React from "react";

import LogoImg from "../../assets/images/Logo.png";

function index({ width, height }) {
  return (
    <>
      <img width={width} height={height} src={LogoImg} alt='logo' />
    </>
  );
}

export default index;
