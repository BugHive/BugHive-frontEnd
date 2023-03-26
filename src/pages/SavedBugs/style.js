import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Saved = styled.div`
    display: flex;
    flex-direction: column;
    padding-left:1em;
    align-items: flex-start;
    align-self: center;
    margin-top: 1%;
    position: relative;
    width: 87vw;
    margin-bottom: 2em;
    padding-bottom: 5em; //temporary solution
`;




export const NavBar = styled.div`
    width: 96%;
    display: flex;
    flex-direction: row;
    gap: 13em;
    height: 2em;
    margin-top: 0.5em;
    justify-content: space-between;
    align-items: center;
    margin-left: 1.5em;
    border-bottom: 1px solid ${(props)=>props.theme.palette.secondary2};

    #show{
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: flex-end;
        gap: 0.5em;
        margin-right: 1em;
    }

    span{
        cursor: pointer;
    }

    .active{
       border-bottom: 2px solid ${(props)=>props.theme.palette.text.main};
       color: ${(props)=>props.theme.palette.text.main};
    }
`;

export const MyLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    padding-bottom: 0.8em;
    width: 7em;
    font-size: 15px;
    cursor: pointer;
    color: ${(props)=>props.theme.palette.text.secondary};
`;

