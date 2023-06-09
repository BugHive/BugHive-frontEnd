import React, { useState } from 'react'
import { Box, DescriptionText, Span, Svg } from '../style'
import { useEffect } from 'react';


function Index({sendDesc, name}) {

  const [desc , setDesc] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setDesc(newValue);
  };

  useEffect(()=>{
    sendDesc(desc);
  },[desc , sendDesc])

  return (
    <Box>
        <Span>
            <Svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path></Svg>
            Description
        </Span>
        <DescriptionText rows="5" placeholder='Add more detailed description...' 
         value={desc} onChange={handleInputChange} name={name}/>
    </Box>

  )
}

export default Index;