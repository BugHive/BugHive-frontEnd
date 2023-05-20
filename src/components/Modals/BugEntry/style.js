import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    width: 100%; 
    height: 100%;
    display: flex;
    background: rgba(113, 113, 113, 0.3);
    align-items: center;
    justify-content: center;
    z-index: 5555555;

    #title{
        background-color: transparent;
        offset: none;
        border: none;
        font-size: 25px;
        color:${(props)=>props.theme.palette.text.main};

        ::placeholder{
            color:${(props)=>props.theme.palette.text.secondary};
        }
    }
`;

export const BugEntryModal = styled.div`
    /* width: 35%;
    height: 83%; */
    width: 37em;
    height: 38em;
    background-color: ${(props)=>props.theme.palette.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.9em;
    padding: 1.4em;
    padding-left: 1.8em;
    padding-bottom: 2.4em;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    overflow-y: auto;
    padding-bottom: 1.5em;

    ::-webkit-scrollbar {
     width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }

    #exit{
        cursor: pointer;
    }
`;


export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5em;
`;


// --------------------------------------------------------------- 
//end Wrapper style

export const TopSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Title = styled.span`
    display: flex;
    flex-direction: row;
    gap: 0.2em;
    align-items: center;
    color: ${(props)=>props.theme.palette.text.main};
    cursor: pointer;
`;

export const Svg = styled.svg`
    fill: ${(props)=>props.theme.palette.text.main};
    stroke-width: 0;
    width: 1.5em;
    height: 2em;
    cursor: pointer;

  
`;

export const Span = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.3em;
    font-weight: bold;
    color: ${(props)=>props.theme.palette.text.main};

`;
// --------------------------------------------------------------- 


// ** Description Section **

export const DescriptionText =  styled.textarea`
    width: 88%;
    margin-left: 29px;
    word-wrap: break-word;
    word-break: break-all; 
    border: none;
    outline: none;
    text-indent: 1em;
    background-color: transparent;     
    display: flex;
    padding-top: 1em;
    align-items: flex-start;
    border-radius: 4px;
    resize: none;
    font-size: 14px;
    background-color: ${(props)=>props.theme.palette.secondary};
    color: ${(props)=>props.theme.palette.text.main};
`;
// ** Description Section End **




// --------------------------------------------------------------- 




// ** Tag Section **

export const InputWrapper = styled.div`
  position: relative;
  user-select: none;
  width: 88%;
  margin-left: 29px;
  background-color: ${(props)=>props.theme.palette.secondary};
  color: ${(props)=>props.theme.palette.text.main};
  z-index: 20;
  

  #add{
    display: flex;
    justify-content: flex-start;
    gap: 0.5em;
    flex-direction: row;
    input{

        color: ${(props)=>props.theme.palette.text.main};
        background-color:${(props)=>props.theme.palette.secondary2};
    }
  }


  input[type=checkbox] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  }

  input[type=checkbox]:checked {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  &::after{
    content:  "✓" ;
    font-size: 18px;
}
}    

#new{
    height: 2.1em;
    text-indent: 0.2em;
    background-color: ${(props)=>props.theme.palette.main};
    color: ${(props)=>props.theme.palette.text.main} ;
    outline: none;
    border: none;
    
}

input{
    outline: none;
    &::placeholder{
        text-decoration: none;
    }
}
  
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: ${(props)=>props.theme.palette.secondary2};

  ::-webkit-scrollbar {
     width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
  
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  padding-left: 8px;
  justify-content: space-between;
  background-color: ${(props)=>props.theme.palette.secondary};
  border-bottom: 1px solid gray;
  color:${(props)=>props.theme.palette.text.main} ;

  &:hover {
  }
`;


export const InputPlaceHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${(props)=>props.theme.palette.text.secondary};
    background-color: ${(props)=>props.theme.palette.secondary};


    span{
        display: flex;
        align-items: center;
        margin-right: 0.2em;
    }
`;



export const Input = styled.div`
    padding: 5px;
    border: 1px solid #ccc;
    width: 100%;
    height: 50px;
    overflow-x: auto;
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: space-between;
    border: none;
    border-radius: 5px;
    &.has-selected-items {
        background-color: ${(props)=>props.theme.palette.secondary};

    }
    padding:0 0.5em;
    cursor: pointer;
    border-bottom: 1px solid ${(props)=>props.theme.palette.lightYellow};
    color: ${(props)=>props.theme.palette.text.main};
    background-color: ${(props)=>props.theme.palette.main};
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
     width: 10px;
     height: 7px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }

  
`;

export const DivFill = styled.div`
    background-color: ${(props)=>props.theme.palette.secondary};
    border: none;
`;


export const Button = styled.button`
  margin-left: 5px;
  padding:0 2px;
  color: ${(props)=>props.theme.palette.text.secondary};
  background-color: transparent;
  border: none;
  gap: 0.5em;
  display: flex;
  justify-content: flex-start;
    align-items: center;
  span{
    display: flex;
    align-items: center;
    color: ${(props)=>props.theme.palette.text.secondary};
    font-size: 23px;
  }
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;

// ** Tag Section End ** 

// --------------------------------------------------------------- 

// ** References Section ** 

export const RefBox = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    width: 88%;
    margin-left: 29px;

    #addRefInput{
        border: none;
        width: 98%;
        padding: 0;
        outline: none;
    }
`;

export const RefInput = styled.input`
    background-color: transparent;
    color: ${(props)=>props.theme.palette.text.main};
    font-weight: bold;
    text-decoration: underline;
    padding: 0.8em;
    border: none;
    border: 1px solid ${(props)=>props.theme.palette.text.secondary};
    border-radius: 5px;
    outline: none;

    &::placeholder{
        text-decoration: none !important;
    }
`;

export const AddRef = styled.div`
     background-color: transparent;
    color: ${(props)=>props.theme.palette.text.main};
    font-weight: bold;
    text-decoration: underline;
    padding: 0.7em;
    border: none;
    border: 1px solid ${(props)=>props.theme.palette.text.secondary};
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;

    &:hover{
        button{
            display: block;
        }
    }


`;


export const AddBtn = styled.button`
    display: none;
    position: absolute;
    right: 2px;
    top: 7px;
    border: none;
    background-color: lightgray;
    opacity: 0.7;
    margin-right: 0.5em;
    padding: 4px;
    border-radius: 5px;

`;

// **End References Section ** 


/*
Save
*/ 

export const Save = styled.button`
    background-color: ${(props)=>props.theme.palette.lightYellow};
    color: ${(props)=>props.theme.palette.text.main};
    border: none;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding:.5em 0em;
    width: 78px;
    display: flex;
    align-items: center;
    align-self: flex-end;
    margin-right: 36px;
    justify-content: center;
    font-weight: bold;
    font-size: medium;
`;