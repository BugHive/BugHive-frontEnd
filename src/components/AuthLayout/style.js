import styled from "styled-components";

export const AuthWrapper = styled.div`

	background: linear-gradient(
		270.02deg,
		${props=>props.theme.palette.darkYellow} 0.02%,
		${props=>props.theme.palette.darkYellow2} 27.09%,
		${props=>props.theme.palette.darkYellow3} 62.5%,
		${props=>props.theme.palette.lightYellow} 99.98%, 
		${props=>props.theme.palette.lightYellow} 99.98%);

	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;

	.auth-footer{
		position: fixed;
		bottom: 0.6%;
		font-weight: 700;
		font-size: ${props=>props.theme.fonts.small};
	}

	.welcome-text{
		font-weight: 700;
		font-size: 22px;
		color: ${props=>props.theme.palette.text.main};
		margin-bottom: 2.5rem;
		margin-top: 1.5rem;
	}
	
	.new-to-bug-hive{
		margin: 1rem 0;
		color: ${props=>props.theme.palette.text.secondary};
		cursor: pointer;
		font-size: 12px;
		position: relative;
	}

	.line-left {
  	border-top: 2px solid ${props=>props.theme.palette.text.secondary};
		position: relative;
		left: 110%;
		top: 50%;
	}

	.line-right{
		border-top: 2px solid ${props=>props.theme.palette.text.secondary};
		position: relative;
		right: 110%;
		bottom: 50%;
	}

	.lines{
		margin: 0.5rem 0;
	}

	.login-footer{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		align-self: flex-end;
	}

	form{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		button{
			width: 80%;
			height: 20%;
		}
	}
`

export const AuthContainer = styled.div`
	height: ${props=> props.customHeight? props.customHeight : '60%'};
	width: 30%;
	background-color: ${props=>props.theme.palette.primary};
	border-radius: 9px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
`

