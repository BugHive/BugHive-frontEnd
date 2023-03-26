import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const SideBar = styled.div`
    position: fixed;
    width: 14%;
    left: 0;
    top:5%;
    height: 95vh;
    display: flex;
    align-items: flex-start;
    background-color: ${(props)=>props.theme.palette.secondary};


    .active{
        background-color: ${(props)=>props.theme.palette.secondary2};
    }

    button{
        background-color: transparent;
        border: none;
    }

    #logout{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2.5em;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 0.5em;
        text-decoration: none;
        padding-left: 1em;
        font-size: ${(props)=>props.theme.fonts.large};
        color:${(props)=>props.theme.palette.text.main};
        margin-bottom: -88px;

        &:hover{
            background-color:${(props)=>props.theme.palette.secondary2} ;
        }
    }
`;

export const SideLink = styled(NavLink)`
    width: 100%;
    height: 2.5em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 0.5em;
    text-decoration: none;
    padding-left: 1em;
    font-size: ${(props)=>props.theme.fonts.large};
    color:${(props)=>props.theme.palette.text.main};

    &:hover{
        background-color:${(props)=>props.theme.palette.secondary2} ;
    }


   
`;

export const Box = styled.div`
    width: 100%;
    align-self: flex-start;
    margin-top: 120px;
    height: 85.5%;
    margin-top: 1px;
    padding-top: 9em;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    position: relative;
`;