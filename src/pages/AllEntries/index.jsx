
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {API_URL} from '../../utils/api'

import { useViewContext } from '../../context/ViewContext';
import AddEntryModal from '../../components/Modals/BugEntry'
import BugCard from '../../components/BugCard';
import BugCardCol from '../../components/BugCardCol';


import {FlexRow , Entry , FlexCol , ColBox , ColEntry , AddColEntry} from './style';

function Index() {


    const [bugs, setBugs] = useState([]); 


    const storageToken = localStorage.getItem("token");
    let token="";
        
    if(storageToken){
       token = storageToken.replaceAll('"', "");
    }

    useEffect(() => {
      axios.get(`${API_URL}/bugs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
    })
        .then(response => {
          setBugs(response.data);
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
    }, [bugs , token]);

    const {
        isRow,
        isOpen,
        openModal,
    } = useViewContext()
    
  
  return (
    <>
        {isRow ? 
            <FlexRow>
                <Entry onClick={openModal}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="3em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                    <span>
                            Add new Entry
                    </span>
                </Entry>

             {isOpen && <AddEntryModal/>}

                {bugs.map((bug,index)=>
                    <BugCard key={index} {...{bug}}/>
                )}

{/* <Spinner/> */}

            </FlexRow>
           : 
             <FlexCol>
                <ColBox>
                        <h3>Name</h3>
                        <h3>Tags</h3>
                </ColBox>

               
                {bugs.slice(0).reverse().map((bug,index)=>
                    <ColEntry>
                    <BugCardCol key={index} {...{bug}}/>
                </ColEntry>
                )}

                <AddColEntry  onClick={openModal}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                    <span>
                        Add new Entry
                    </span>
                </AddColEntry>
            </FlexCol>      
        } 
    </>
  )
}

export default Index;


