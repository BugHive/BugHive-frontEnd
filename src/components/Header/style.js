import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    gap: 3em;
    width: 100vw;
    align-items: center;
    position: fixed;
    top: 0;
    position: relative;
    padding:0.8em 2em;
    background-color: ${(props)=>props.theme.palette.secondary2};

    img{
        margin: 0 0em;
    }


    #avatar{
        position: absolute;
        right: 0;
        margin-right: 3em;
    }
`;