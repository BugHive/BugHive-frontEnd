import React, { useState } from 'react';

//style
import {Container , BugEntryModal, TopSection, Title, Svg, Span, Save} from './style';

//components
import Description from './Description';
import Tags from './Tags';
import References from './References';
import { useViewContext } from '../../../context/ViewContext';

const Index = () => {
    
   const {closeModal} = useViewContext(); 


    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: [],
        references: []
    });
    const [dataList, setDataList] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };


    const saveData = () => {
        const newData = { ...formData };
        setDataList((prevDataList) => [...prevDataList, newData]);
        setFormData({
        title: '',
        description: '',
        tags: '',
        references: ''
        });
    };



  return (
    <Container>
        <BugEntryModal>
            <TopSection>
                <Title>
                    <span>
                        <Svg stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v3.765zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002.002-1.412 7.778-7.778z"></path></g></Svg>
                    </span>
                    <input placeholder='untilted bug entry' type='text' id='title' value={formData.title} onChange={handleChange}/>
                </Title>
                <Span onClick={closeModal} id="exit">
                    <svg stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fill="gray" stroke="#000" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
                </Span>
            </TopSection>

            <Description  />
            <Tags/>
            <References/>
            
            <Save onClick={closeModal}>
                Save
            </Save>
        </BugEntryModal>
    </Container>
  )
}

export default Index;




