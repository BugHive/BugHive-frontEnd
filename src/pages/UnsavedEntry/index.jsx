import React, { useState } from "react";
import styled from "styled-components";
import UnsavedItem from "../../components/UnsavedItem";
import Icon from "../../assets/images/icon.png";
import Button from "../../components/Button";
import X from "../../assets/images/x.png";

export default function UnsavedEntry() {
  const [modalOpen, setModalOpen] = useState(false);

  const Wrapper = styled.div`
    background-color: ${(props) => props.theme.palette.secondary};
    height: 70vh;
    width: 80%;
    margin-top: 4rem;
    margin-left: 2.5rem;
    padding: 2rem;
    .header {
      color: ${(props) => props.theme.palette.text.main};
      font-size: 22px;
      font-weight: bold;
    }

    .btn {
      width: 8rem;
      height: 20rem;

      position: relative;
      left: 86%;
      top: 10%;
    }

    .modal-from {
      width: 35%;
      height: 70%;
      position: absolute;
      top: 20%;
      left: 34%;
      display: ${modalOpen ? "flex" : "none"};
      gap: 0.5rem;
      justify-content: center;
      flex-direction: column;
      border: 1px solid #ddd;
      padding: 1rem;
      background-color: ${(props) => props.theme.palette.primary};
      input {
        height: 1rem;
        padding: 1rem;
      }
      textarea {
        padding: 1rem;
      }
    }

    .modal-btn {
      position: absolute;
      bottom: 5%;
      left: 80%;
      width: 6rem;
    }

    .from-x {
      height: 1rem;
      width: 1rem;
      margin-left: 90%;
      margin-top: -12%;
      cursor: pointer;
    }
  `;

  console.log(modalOpen);
  return (
    <Wrapper>
      <p className='header'>Last Unsaved Entry</p>
      <UnsavedItem
        src={Icon}
        websiteName={"facebook"}
        websiteLink={"https://www.facebook.com/"}
        time={"9:30 PM"}
      />
      <UnsavedItem
        src={Icon}
        websiteName={"facebook"}
        websiteLink={"https://www.facebook.com/"}
        time={"9:30 PM"}
      />
      <UnsavedItem
        src={Icon}
        websiteName={"facebook"}
        websiteLink={"https://www.facebook.com/"}
        time={"9:30 PM"}
      />
      <UnsavedItem
        src={Icon}
        websiteName={"facebook"}
        websiteLink={"https://www.facebook.com/"}
        time={"9:30 PM"}
      />

      <div className='btn'>
        <Button
          title={"Save"}
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </div>

      <form className='modal-from'>
        <img
          src={X}
          alt='close'
          className='from-x'
          onClick={() => {
            setModalOpen(false);
          }}
        />
        <label htmlFor='textArea'>Description</label>
        <textarea
          id='textArea'
          cols='60'
          rows='5'
          placeholder='add a more detailed description'></textarea>
        <label htmlFor='tags'>Tags</label>
        <input type='search' id='tags' />
        <label htmlFor='refs'>References</label>
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <div className='modal-btn'>
          <Button title={"save"} />
        </div>
      </form>
    </Wrapper>
  );
}
