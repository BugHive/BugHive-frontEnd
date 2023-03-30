import styled from 'styled-components';
import { useViewContext } from '../../context/ViewContext';
import AddEntryModal from '../../components/Modals/BugEntry'

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    margin-top: 1em;
    margin-left: 1.5em;
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
    width: 100%;
`;

const ColBox = styled.div`
    width:100%;
    height: 3.2em;
    margin-top: -1em;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    gap: 50%;
    background-color: ${(props)=>props.theme.palette.secondary};
    color: ${(props)=>props.theme.palette.text.secondary};

    h3{
        margin-left: 5em;
    }
`;


const ColEntry = styled.div`
    width: 100%;
    height: 1.2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    border-bottom: 1px solid ${(props)=>props.theme.palette.secondary2};
    color: ${(props)=>props.theme.palette.text.main};
    padding-bottom: 0.8em;
    padding-left: 1em;
    cursor: pointer;
    margin-left:0.5em ;

    &:hover{
    border-bottom: 2px solid ${(props)=>props.theme.palette.text.main};
    }
`;

const AddColEntry = styled.div`
    width: 100%;
    height: 1.2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    border-bottom: 1px solid ${(props)=>props.theme.palette.secondary2};
    color: ${(props)=>props.theme.palette.text.secondary};
    padding-bottom: 0.8em;
    padding-left: 1em;
    cursor: pointer;
    margin-left:0.5em ;

    &:hover{
        color:${(props)=>props.theme.palette.text.main};
        border-bottom: 1px solid ${(props)=>props.theme.palette.text.main};
    }
`;

export const Entry = styled.div`
    width: 175px;
    height: 106px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2em;
    cursor: pointer;
    color:${(props)=>props.theme.palette.text.secondary};
    background-color: ${(props)=>props.theme.palette.secondary2};
`;



function Index() {

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

            </FlexRow>
           : 
             <FlexCol>
                <ColBox>
                        <h3>Name</h3>
                        <h3>Tags</h3>
                </ColBox>

                <ColEntry>
                    <span>
                        ArrayOutOfBoundException
                    </span>
                </ColEntry>

                <ColEntry>
                    <span>
                       Test Bug
                    </span>
                </ColEntry>

                <ColEntry>
                    <span>
                        Test Bug
                    </span>
                </ColEntry>

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

export default Index