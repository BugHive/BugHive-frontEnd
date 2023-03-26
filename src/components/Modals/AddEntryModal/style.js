import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    width: 100%; 
    height: 100%;
    background: linear-gradient(270deg, #545454 1.33%, rgba(84, 84, 84, 0.614583) 19.02%, rgba(84, 84, 84, 0.614583) 42.82%, rgba(84, 84, 84, 0.413567) 59.57%, rgba(84, 84, 84, 0) 100%);    display: flex;
    align-items: center;
    justify-content: center;


    .gold1{
        height: 0.5px;
        width: 60%;
         background-color: ${(props)=>props.theme.palette.lightYellow};
    }

    .gold2{
        height: 0.5px;
        width: 30%;
        background-color: ${(props)=>props.theme.palette.lightYellow};
    }

    .gold3{
        height: 0.5px;
        width: 45%;
        background-color: ${(props)=>props.theme.palette.lightYellow};
    }

    .gold4{
        height: 0.5px;
        width: 70%;
        background-color: ${(props)=>props.theme.palette.lightYellow};
    }


    .cancel{
        color: ${(props)=>props.theme.palette.text.main};
        background-color: ${(props)=>props.theme.palette.primary};
        border: 2px solid ${(props)=>props.theme.palette.secondary};
    }
`;

export const EntryModal = styled.div`
    position: relative;
    width: 376px;
    height: 422px;
    border-radius: 5px;
    box-shadow: 2px 3px 3px 2px #212121;
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-color: ${(props)=>props.theme.palette.primary};
`;

export const TopSection = styled.div`
    width: 100%;
    height: 30%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5em;
    background: linear-gradient(270deg, #545454 1.33%, rgba(84, 84, 84, 0.614583) 19.02%, rgba(84, 84, 84, 0.614583) 42.82%, rgba(84, 84, 84, 0.413567) 59.57%, rgba(84, 84, 84, 0) 100%);


    h2{
        margin: 0;
        padding: 0;
        color: ${(props)=>props.theme.palette.text.main};
    }

    span{
        position: absolute;
        top: 20px;
        right: 10px;
        cursor: pointer;
    }
`;

export const GoldenRows = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    margin-top: 00.7em;
    gap: 0.5em;
    padding-bottom: 1em;
    border-bottom: 1px solid ${(props)=>props.theme.palette.secondary};
`;

export const Golden = styled.div`
    height: 0.5px;
    width: 100%;
    background-color: ${(props)=>props.theme.palette.lightYellow};
`;

export const EntryInput = styled.input`
    display: flex;
    align-self: center;
    color: ${(props)=>props.theme.palette.text.secondary};
    padding-bottom: 0.5em;
    width: 90%;
    margin-bottom: 1em;
    outline: none;
    border: none;
    border-bottom: 2px solid  ${(props)=>props.theme.palette.text.secondary};
    background-color: ${(props)=>props.theme.palette.primary};

    &::placeholder{
        font-size: 15px;
        color:${(props)=>props.theme.palette.text.secondary};
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 2em;
    margin-right: 1em;
    margin: 1em 1em;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: ${(props)=>props.theme.fonts.large};
    padding:0.4em 1em;
    color: ${(props)=>props.theme.palette.main};
    background-color: ${(props)=>props.theme.palette.lightYellow};
`;