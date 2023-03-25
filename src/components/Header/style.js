import styled from "styled-components";

export const Header = styled.header`
    gap: 3em;
    width: 100vw;
    position: fixed;
    top: 0;
    height: 20%;
    padding:0.8em 2em;  
    background-color: ${(props)=>props.theme.palette.secondary2};
    /* position: relative; */

    /* @media screen and (max-width: 708px) {
    font-size: 14px;

    #search{
        width: 50%;
        height: 70%;
    } */

    /* img{
        width:8%;
        height: 80%;
    } */
  /* } */

  /* @media screen and (max-width: 208px) {
    #search{
        width: 60%;
    }

    img{
        width:80%;
        height: 50%;
    }
  } */

    img{
        margin: 0 1em;
    }


    #avatar{
        position: absolute;
        right: 0;
        margin-right: 3em;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3em;
    width: 100%;
    height: 100%;
    align-items: center;
    margin: auto;


    /* @media screen and (max-width: 308px) {
    height: 50%;
    font-size: 14px;
  } */
`