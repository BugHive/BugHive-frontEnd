import React, { useState } from 'react'
import { AddBtn, AddRef, Box, RefBox, RefInput, Span, Svg } from '../style'

function Index() {
  const References = [
    {
      id:1,
      url:"www.stackoverflow.com"
    },
    // {
    //   id:2,
    //   url:"www.chat.openai.com"
    // }
  ]
  const [references , setReferences] = useState(References);
  const [reference , setReference] = useState({
    id:references.length+1,
    url:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(reference.url.trim() === "")) {
      const newReference = { id: references.length + 1, url: reference.url };
      setReferences([...references, newReference]);
      setReference({ id: references.length + 2, url: "" });
    }
  };


  return (
    <Box>
        <Span>
            <Svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z"></path><path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path><path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path></Svg>
            References    
        </Span>

        <RefBox onSubmit={handleSubmit}>
            {references.map((ref)=>
              <RefInput key={ref.id} value={ref.url} onChange={(e)=>setReferences(e.target.value)} readOnly/>
            )}
            {references.length > 0 
            ?
              <AddRef>
                  <RefInput id='addRefInput' value={reference.url} onChange={(e)=>setReference({ ...reference, url: e.target.value })} placeholder="Add a reference.."/>
                  <AddBtn>Add Ref</AddBtn>
              </AddRef>
              :
              ""
          }
        </RefBox>
    </Box>
  )
}

export default Index