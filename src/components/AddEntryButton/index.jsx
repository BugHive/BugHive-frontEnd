import React from 'react';

import styled from 'styled-components';
import { useViewContext } from '../../context/ViewContext';
import AddEntryModal from '../../components/Modals/BugEntry'


const AddEntry = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${(props)=>props.theme.palette.lightYellow};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 30px;
    right: 30px;
`;


const SvgStyle = styled.svg`
    stroke: currentColor;
    fill: ${(props)=>props.theme.palette.primary};
    stroke-width: 0;
    height: 2em;
    width: 2em;
`

function Index() {

      const {
        isOpen,
        openModal,
    } = useViewContext()


  return (
    <>
    <AddEntry onClick={openModal}>
        <SvgStyle stroke="currentColor"  t="1551322312294" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path></SvgStyle>
    </AddEntry>
    {isOpen && <AddEntryModal/>}
    </>
  )
}

export default Index