import React from 'react';

import styled from 'styled-components';


export const Load = styled.div`
    background-color: transparent;
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

`;
export const Loader = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    
    

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`;


function Index(){
    return(
        <Load>
            <Loader/>
        </Load>
    )
}
export default Index