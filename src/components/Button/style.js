import styled from "styled-components";

export const StyledButton = styled.button`
width: 86%;
height: 12.5%;
background-color: ${props => props.switched ? props.theme.palette.primary : props.theme.palette.darkYellow3};
border: ${props=> props.switched? "1px solid #666666": "none"};
border-radius: 6px;
box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
font-weight: 700;
font-size: 20px;
color: ${props=> props.switched ? "white": 'black'};
`