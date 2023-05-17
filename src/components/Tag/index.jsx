import React from "react";
import styled from "styled-components";
import Add from "../../assets/images/add.png";

export default function Tag(props) {
  const TagContainer = styled.div`
    background-color: ${(props) => props.theme.palette.secondary};
    display: grid;
    grid-auto-rows: min-content;
    gap: 1rem;
    padding: 1rem;
    margin-top: 2rem;

    .name {
      font-weight: bolder;
      font-size: 20px;
    }
    .add-entry {
      margin-top: 2rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      opacity: 0.5;
      img {
        height: 1rem;
      }
    }
  `;
  return (
    <TagContainer>
      <p className='name'>{props.name}</p>
      {props.entries}
      <div className='add-entry'>
        <img src={Add} alt='add' />
        <p>Add New Bug Entry</p>
      </div>
    </TagContainer>
  );
}
