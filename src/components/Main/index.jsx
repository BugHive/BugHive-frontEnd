import React from 'react';

import styled from 'styled-components';



const Main = styled.main`
    display: flex;
    align-items: center;
    overflow-x: hidden;
    width: 87%;
    margin-left: 13%;
    max-height:80%;
    padding-bottom: 1em;
`;

function index({children}) {
  return (
    <Main>
        {children}
    </Main>
  )
}

export default index;