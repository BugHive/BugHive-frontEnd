import styled from "styled-components";

export const Header = styled.header`
    gap: 3em;
    width: 100%;
    position: sticky;
    top: 0;
    height: 20%;
    padding:0.7em 2em; 
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3em;
    z-index: 1000;
    background-color: ${(props)=>props.theme.palette.secondary2};

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
