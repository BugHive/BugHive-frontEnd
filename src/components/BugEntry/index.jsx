import React from "react";
import styled from "styled-components";

export default function BugEntry(props) {
  const Entry = styled.div`
    background-color: ${(props) => props.theme.palette.primary};
    padding: 1rem;
    display: flex;
    flex-direction: column;

    .transparent {
      opacity: 0.5;
      margin-bottom: 2.5px;
    }

    .space {
      margin-bottom: 1rem;
    }
  `;
  return (
    <Entry>
      <p className='transparent'>NAME</p>
      <p className='space'>{props.name}</p>
      <p className='transparent'>LAST MODIFIED</p>
      <p>{props.date}</p>
    </Entry>
  );
}
