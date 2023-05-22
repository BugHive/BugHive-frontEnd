import styled from "styled-components";

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    margin-top: 1em;
    margin-left: 1.5em;
`;
 
export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
    width: 100%;
`;

export const ColBox = styled.div`
    width:100%;
    height: 3.2em;
    margin-top: -1em;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    gap: 50%;
    background-color: ${(props)=>props.theme.palette.secondary};
    color: ${(props)=>props.theme.palette.text.secondary};

    h3{
        margin-left: 5em;
    }
`;



export const ColEntry = styled.div`
    width: 100%;
    height: 1.7em;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    border-bottom: 1px solid ${(props)=>props.theme.palette.secondary2};
    color: ${(props)=>props.theme.palette.text.main};
    padding-bottom: 0.8em;
    padding-left: 1em;
    cursor: pointer;
    margin-left:0.5em ;

    &:hover{
    border-bottom: 2px solid ${(props)=>props.theme.palette.text.main};
    }
`;

export const AddColEntry = styled.div`
    width: 100%;
    height: 1.2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    border-bottom: 1px solid ${(props)=>props.theme.palette.secondary2};
    color: ${(props)=>props.theme.palette.text.secondary};
    padding-bottom: 0.8em;
    padding-left: 1em;
    cursor: pointer;
    margin-left:0.5em ;

    &:hover{
        color:${(props)=>props.theme.palette.text.main};
        border-bottom: 1px solid ${(props)=>props.theme.palette.text.main};
    }
`;

export const Entry = styled.div`
    width: 175px;
    height: 106px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2em;
    cursor: pointer;
    color:${(props)=>props.theme.palette.text.secondary};
    background-color: ${(props)=>props.theme.palette.secondary2};
    margin-right: 0.5em;
`;