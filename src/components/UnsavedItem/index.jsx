import React from "react";
import { UnsavedItemContainer } from "./style";
import X from "../../assets/images/x.png";

export default function UnsavedItem(props) {
  return (
    <UnsavedItemContainer>
      <div>
        <div className='upper-div'>
          <img src={props.src} alt='icon' />
          <p>{props.websiteName}</p>
        </div>
        <p className='link'>{props.websiteLink}</p>
      </div>
      <div className='tail-div'>
        <p>{props.time}</p>
        <img src={X} alt='x' />
      </div>
    </UnsavedItemContainer>
  );
}
