import React from "react";
import styled from "styled-components";
import UnsavedItem from "../../components/UnsavedItem";
import Icon from "../../assets/images/icon.png";
import Button from "../../components/Button";

export default function UnsavedEntry() {
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
  `;

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
        <Button title={"Save"} />
      </div>
    </Wrapper>
  );
}
