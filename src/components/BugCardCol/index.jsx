import React from 'react';


import bugIcon from '../../assets/images/bug.png';
import styled from 'styled-components';

export const ColEntry = styled.div`
    width: 100%;
    height: 1.6em;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    /* border-bottom: 1px solid ${(props)=>props.theme.palette.secondary2}; */
    color: ${(props)=>props.theme.palette.text.main};
    padding-bottom: 0.8em;
    padding-left: 1em;
    cursor: pointer;
    margin-left:0.5em ;
    margin-top: 0.5em;

    &:hover{
    /* border-bottom: 2px solid ${(props)=>props.theme.palette.text.main}; */
    }
`;


function Index({bug}) {
    
  return (
    <ColEntry>
      <img src={bugIcon} alt='bug' width={"1.5%"}/>
      <span>
        {bug?.title}
      </span>
    </ColEntry> 
  )
}

export default Index;