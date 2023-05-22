import React, { useState } from 'react';

//style
import {Container , BugEntryModal,Entry, TopSection, Title, Svg, Span, Save} from './style';

//components
import Description from '../../components/Modals/BugEntry/Description';
import Tags from '../../components/Modals/BugEntry/Tags';
import References from '../../components/Modals/BugEntry/References';
import { useViewContext } from '../../context/ViewContext';
import  {API_URL}  from '../../utils/api';
import axios from 'axios';

//img
import bugIcon from '../../assets/images/bug.png';

function Index({bug}) {
  const [isOpen , setIsOpen] = useState(false);

  const {closeModal} = useViewContext(); 
   const [selectedTags, setSelectedTags] = useState([]);
   const[references , setReferences] = useState([]);
   const [title , setTitle] = useState('');
   const [description , setDescription] = useState('');

   const [error ,setErorr] = useState("")
  //  const [succes , setSucces] = useState("");

   const [deleted ,setDeleted] = useState(false);


   const refs = references.map(reference => reference.url);
   console.log(refs)

   console.log(selectedTags)
   console.log(title)
   console.log(description)


   const storageToken = localStorage.getItem("token");
   let token="";
       
   if(storageToken){
      token = storageToken.replaceAll('"', "");
   };

    // const addBug = async()=>{
    //     try {
    //         const response = await axios.post(`${API_URL}/bugs/`, {
    //           title: title,
    //           description: description,
    //           references: refs,
    //           tags: [],
    //         }, {
    //           headers: {
    //             Authorization: `Bearer ${token}`,
    //           },
    //         });
      
    //         console.log(response.data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };


    const deleteBug = async() =>{
      try {
                const response = await axios.delete(`${API_URL}/bugs/${bug.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
                 if(response){
                   console.log(response.data);
                   setDeleted(true);
                 } 
              } catch (err) {
                console.error(err);
                setErorr(err)
              }
    };
    
    


    
    const handleSave= ()=>{
        closeModal();
    }


    const handleSelectedTagsFromChild = (selectedTagsList) => {
      setSelectedTags(selectedTagsList);
    };

    const getDescription = (desc)=>{
        setDescription(desc)
    }

    const getRef = (ref)=>{
        setReferences(ref);
    }


    
  return (
    <>

      <Entry onClick={()=>setIsOpen(true)}  className={deleted===false? "" : "hide"} >
      <img src={bugIcon} alt='bug' width={"25%"}/>
      <span>
        {bug?.title}
        </span>
        </Entry> 
      
      {isOpen ? 
      <Container>
      <BugEntryModal>
          <TopSection>
              <Title>
                  <span>
                      <Svg stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v3.765zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002.002-1.412 7.778-7.778z"></path></g></Svg>
                  </span>
                  <input value={bug.title} type='text' id='title'
                  onChange={(e)=>setTitle(e.target.value)}
                   />
              </Title>
              <Span onClick={()=>setIsOpen(false)} id="exit">
                  <svg stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fill="gray" stroke="#000" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
              </Span>
          </TopSection>

          <Description  sendDesc={getDescription}/>
          <Tags sendSelectedTagsToParent={handleSelectedTagsFromChild}/>
          <References sendRef={getRef}/>
          

          <div style={{display:'flex' , flexDirection:"row" , alignItems:'center' , justifyContent : "space-between"}}>
            <Save onClick={handleSave}>
                Save
            </Save>

            <button id='delete' onClick={deleteBug}>
              Delete
            </button>
          </div>

          <span>{error}</span>

      </BugEntryModal>
  </Container>
   :
        <></>
   }
    
      </>
    
    
  
  )
}

export default Index;