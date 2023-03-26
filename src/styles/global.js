import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ruda:wght@400;500;600;700;800;900&display=swap');
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Ruda', sans-serif;
}

body{
	font-family: 'Ruda', sans-serif;
    background-color: ${(props)=>props.theme.palette.primary};
}

button{
	cursor: pointer;
}
`;
