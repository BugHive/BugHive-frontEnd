import React, { useState } from 'react';
import { useViewContext } from '../../../context/ViewContext';

import { Container , EntryModal, Golden, TopSection  , GoldenRows, EntryInput, ButtonBox, Button} from './style';

function Index() {
  const [entry , setEntry] = useState("");

  const handleChange = (e)=>{
      setEntry(e.target.value);
      console.log(entry)
  }

  const {
    closeModal
  } = useViewContext()

  return (
    //Add onBlur={()=>{closeModal()}} , but its not working!
    <Container>  
        <EntryModal>
            <TopSection>
                <span onClick={closeModal}>
                  <svg stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
                </span>
                <h2>Add New Bug Entry</h2>
                <GoldenRows>
                    <Golden/>
                    <Golden className='gold1'/>
                    <Golden className='gold2'/>
                    <Golden className='gold3'/>
                    <Golden className='gold4'/>
                    <Golden/>
                </GoldenRows>
            </TopSection>

            <EntryInput type="text" value={entry} onChange={handleChange}  placeholder="Entry Title"/>

            <ButtonBox>
              <Button onClick={closeModal}>Add Tag</Button>
              <Button onClick={closeModal}>Add reference</Button>
            </ButtonBox>

            <ButtonBox>
              <Button className='cancel' onClick={closeModal} >Cancle</Button>
              <Button onClick={closeModal}>Save</Button>
            </ButtonBox>
        </EntryModal>
    </Container>
  )
}

export default Index;