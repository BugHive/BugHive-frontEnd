import React from 'react';

import styled from 'styled-components';

const ListItem = styled.li`
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        color:${(props)=>props.theme.palette.text.main};
`;

function index({id ,  text , svg , onClick}) {
  return (
    <ListItem id={id} onClick={onClick}>
            {svg}
            <p>    
                {text}
            </p>
    </ListItem>
  )
}

export default index