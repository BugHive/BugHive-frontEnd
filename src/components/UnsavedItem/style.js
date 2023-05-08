import styled from "styled-components"

export const UnsavedItemContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: space-between;

	.upper-div{
		display: flex;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}

	img, .link{
		cursor: pointer;
	}

	p{
		font-size: 16px;
	}

	.tail-div{
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		img{
			height: 10px;
		}
	}
`