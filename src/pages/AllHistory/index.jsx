import React, { useRef, useState } from 'react'
import { Box, Button, Container, DataSection, Date, Datum, Day, Exit, Grid, History, NavButton, Slider, SliderContainer, Span, TopSection, WebRef } from './style';

//images
import discord from '../../assets/images/discord.png';
import facebook from '../../assets/images/facebook.png';

import AddEntryModal from '../../components/Modals/BugEntry'
import { useViewContext } from '../../context/ViewContext';


const boxData = [
    { day: "Today", date: "01" },
    { day: "Yesterday", date: "02" },
    { day: "Yesterday", date: "03" },
    { day: "Yesterday", date: "04" },
    { day: "Yesterday", date: "05" },
    { day: "Yesterday", date: "06" },
    { day: "Yesterday", date: "07" },
    { day: "Yesterday", date: "08" },
    { day: "Yesterday", date: "09" },
    { day: "Yesterday", date: "10" },
    { day: "Yesterday", date: "11" },
    { day: "Yesterday", date: "12" },
    { day: "Yesterday", date: "13" },
    { day: "Yesterday", date: "14" },
    { day: "Fri", date: "15" },
    { day: "Sat", date: "16" },
    { day: "Sun", date: "17" },
    { day: "Mon", date: "18" },
    { day: "Tue", date: "19" },
    { day: "Wed", date: "20" },
  ];

function Index() {
 
      const [selectedBoxIndex, setSelectedBoxIndex] = useState(0);
      const [allhistory , setAllHistory]= useState(history);
      const sliderRef = useRef(null);
    
      const handleNavClick = (direction) => {
        const sliderWidth = sliderRef.current.offsetWidth;
        const scrollDistance = sliderWidth / 2;
        const newPosition =
          direction === "left"
            ? sliderRef.current.scrollLeft - scrollDistance
            : sliderRef.current.scrollLeft + scrollDistance;
    
        sliderRef.current.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
    
      };
    
      const handleBoxClick = (index) => {
        setSelectedBoxIndex(index);
      };

      const {openModal , isOpen} = useViewContext();


      const  deleteDataItem = (historyItemId, dataItemId) =>{
        const updatedHistory = history.map(historyItem => {
          if (historyItem.id === historyItemId) {
            const newData = historyItem.data.filter(dataItem => dataItem.id !== dataItemId);
            return { ...historyItem, data: newData };
          }
          return historyItem;
        });
        setAllHistory(updatedHistory);
      }


      function deleteHistoryItem(historyItemId) {
        const updatedHistory = history.filter(historyItem => historyItem.id !== historyItemId);
        setAllHistory(updatedHistory);
      }
      
   
  return (
    <Container>
        <Slider>
            <NavButton direction="left" onClick={() => handleNavClick("left")}>
                &#8249;
            </NavButton>
            <SliderContainer ref={sliderRef}>
                {boxData.map((box, index) => (
                <Box
                    key={index}
                    selected={index === selectedBoxIndex}
                    onClick={() => handleBoxClick(index)}
                    >
                    <Day>{box.day}</Day>
                    <Date>{box.date}</Date>
                </Box>
                ))}
            </SliderContainer>
            <NavButton direction="right" onClick={() => handleNavClick("right")}>
                &#8250;
            </NavButton>
        </Slider>

                {allhistory.map((item)=>
                 <History key={item.id}>
                    <TopSection >
                        <h4>{item.historyTime}</h4>
                        <Button onClick={()=>{deleteHistoryItem(item.id)}}>Delete</Button>
                    </TopSection>

                        {item.data.map((datum)=>
                            <DataSection key={datum.id}>
                                <Datum>
                                    <WebRef>
                                        <Span>
                                            <img src={datum.img} alt="img"/>
                                            {datum.title}
                                        </Span> 
                                        <Span>{datum.url}</Span>
                                    </WebRef>
                                    
                                    <Grid>
                                        <Button id='hover' onClick={openModal}>
                                            Track Entry
                                        </Button>
                                        <Span id='nonHover'>
                                            {datum.time}
                                        </Span>
                                        <Span>
                                            <Exit onClick={()=>{deleteDataItem(item.id , datum.id)}}>&#10006;</Exit>
                                        </Span>
                                    </Grid>
                                </Datum>
                            </DataSection>
                        )}
                 </History>
            
                )}
        {isOpen && <AddEntryModal/>}
    </Container>
  )
}

export default Index;


const history = [
    {
        id:0,
        historyTime:"11:00 PM",
        data:[
            {
                id:0,
                img:discord,
                title:"Discord",
                url:"https://www.discord.com/login",
                time:"10:50 PM"
            },
            {
                id:1,
                img:discord,
                title:"Discord",
                url:"https://www.discord.com/login",
                time:"10:50 PM"
            },
            {
                id:2,
                img:discord,
                title:"Discord",
                url:"https://www.discord.com/login",
                time:"10:50 PM"
            },
            
        ],
        
    },
    {
        id:1,
        historyTime:"9:00 PM",
        data:[
            {
                id:0,
                img:facebook,
                title:"Facebook",
                url:"https://www.facebook.com/login",
                time:"9:20 PM"
            },
            {
                id:1,
                img:facebook,
                title:"instagram",
                url:"https://www.instagram.com/login",
                time:"9:50 PM"
            },
        ],
    }

]