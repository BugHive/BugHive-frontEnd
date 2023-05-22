import React, { useEffect, useState } from 'react'
import { Box, Button, Checkbox, DivFill, DropdownWrapper, Input, InputPlaceHolder, InputWrapper, ItemWrapper, Span } from '../style'

function Index({sendSelectedTagsToParent}) {



    const [isOpen, setIsOpen] = useState(false);
    const [selectedEntries, setselectedEntries] = useState([]);
    const [newTagName, setNewTagName] = useState('');
    const [tags, setTags] = useState(['JS', 'Async', 'Java']);
    const [isAddTagVisible, setIsAddTagVisible] = useState(false);


  
    const handleTagClick = item => {
      setselectedEntries(prevselectedEntries =>
        prevselectedEntries.includes(item)
          ? prevselectedEntries.filter(selectedItem => selectedItem !== item)
          : [...prevselectedEntries, item]
      );
    };


    useEffect(()=>{
        sendSelectedTagsToParent(selectedEntries);
    },[selectedEntries , sendSelectedTagsToParent])
  
    const handleNewTagClick = () => {
      if (newTagName.trim()) {
        setTags(prevItems => [...prevItems, newTagName]);
        setNewTagName('');
        setIsAddTagVisible(false);
      }
    };

    const handleOpen = ()=>{
        isOpen ? setIsOpen(false) : setIsOpen(true);
        isAddTagVisible && setIsAddTagVisible(false);
    }
  
    const hasselectedEntries = selectedEntries.length > 0;
  return (
    <Box>
        <Span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"></path><path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"></path></svg>
            Tags
        </Span>
        <InputWrapper>
            <Input
                type="text"
                value={selectedEntries.join(' , ').split( )}
                onClick={handleOpen}
                // onChange={()=>sendData}
                readOnly
                className={hasselectedEntries ? 'has-selected-items' : ''}
            >
                {selectedEntries.length === 0  
                ? 
                <InputPlaceHolder>
                    <p>Pick or create a Tag</p>
                    <span>
                        {isOpen ? 
                            <svg stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 24 24" height="2.5em" width="1.9em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8l6 6H6z"></path></g></svg>  
                            :
                            <svg stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
                        }
                    </span>
                </InputPlaceHolder> 
                : 
                <DivFill style={{display:'flex' , flexDirection:'row' , width:'100%' 
                , alignItems:'center' , justifyContent:'space-between'}}>
                    {selectedEntries.join(' , ').split( )}
                    <span>
                        {isOpen ? 
                            <svg stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 24 24" height="2.5em" width="1.9em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8l6 6H6z"></path></g></svg>  
                            :
                            <svg stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
                        }
                    </span>
                </DivFill>}
            </Input>
            {isOpen && (
                <DropdownWrapper>
                    {tags.map(item => (
                        <DropdownItem
                            key={item}
                            item={item}
                            onSelect={handleTagClick}
                            isSelected={selectedEntries.includes(item)}
                        />
                    ))}
                {isAddTagVisible ? (
                        <ItemWrapper id='add'>
                            <input
                                id='new'
                                type="text"
                                value={newTagName}
                                onChange={event => setNewTagName(event.target.value)}
                            />
                            <Button onClick={handleNewTagClick}>
                                <span>+</span>  Add new Bug Entry
                            </Button>
                        </ItemWrapper>
                ) : (
                    <div style={{backgroundColor:'#eeeeee' , borderBottom:'1px  solid gray' , padding:'0.1em 0'}}>
                    <Button onClick={() => isAddTagVisible ? setIsAddTagVisible(false) : setIsAddTagVisible(true)}>
                    <span>+</span>  Add new Bug Entry</Button>
                    </div>
                )}
                </DropdownWrapper>
            )}
        </InputWrapper>
    </Box>
  )
}

export default Index;

 
//helper component
const DropdownItem = ({ item, onSelect, isSelected}) => (
    <ItemWrapper onClick={() => onSelect(item)}>
        <Checkbox type="checkbox" checked={isSelected} readOnly/>
        <span style={{padding:'3px' ,color:"black"}}>
                {item}
        </span> 
    </ItemWrapper>
  );  
  