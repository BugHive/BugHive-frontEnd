import React,{useState} from 'react';

import styled from 'styled-components';
 

const SearchBar = styled.form`
    width: 35%;
    height: 3.063rem;
    border-radius:10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.979rem;
    position: relative;
    background-color: ${(props)=>props.theme.palette.secondary};

    #arrow{
      position: absolute;
      right: 0;
      padding-right: 1em;
    }

    button{
      display: flex;
      background-color: transparent;
      border: none;
      cursor: pointer;
      align-self: center;
    }

    input{
      width: 85%;
      height: 100%;
      outline: none;
      text-indent: 1em;
      background-color: transparent;
      border: none;
      color: ${(props)=>props.theme.palette.text.main};

      &::placeholder{
        color: ${(props)=>props.theme.palette.text.main};
      }
    }
`;


function Index() {

  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  }
 
  return (
    <SearchBar onSubmit={(e)=>{e.preventDefault()}}>
      <button type="submit">
        <svg stroke="currentColor" fill="lightgray" strokeWidth="0" viewBox="0 0 1024 1024" height="1.7em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
      </button>

      <input placeholder="Looking for a common Bug ? " type="text" value={search} name="search" onChange={handleChange}/>
      
      <button id="arrow">
        <svg stroke="currentColor" fill="lightgray" strokeWidth="0" viewBox="0 0 24 24" height="4em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 16l-6-6h12z"></path></g></svg>
      </button>
    </SearchBar>
  )
}

export default Index;