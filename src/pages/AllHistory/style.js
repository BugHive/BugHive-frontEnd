import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.palette.text.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1%;
  width: 87vw;
  margin-bottom: 2em;
  margin-left: -1.5em;
  gap: 1em;
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  gap: 35px;
  width: 85%;
  padding-bottom: 1.5em;
  margin-top: 2em;
  border-bottom: 2px solid ${(props) => props.theme.palette.secondary};
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 43px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-scroll-chaining: none;
  touch-action: pan-y;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 100%;
`;

export const NavButton = styled.button`
  background: ${(props) => props.theme.palette.lightYellow};
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  width: 20px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  border-radius: 5px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 74px;
  padding: 4px 2.3em;
  height: 42px;
  border-radius: 5px;
  cursor: pointer;
  gap: 0.5em;
  color: ${({ selected }) =>
    selected
      ? (props) => props.theme.palette.primary
      : (props) => props.theme.palette.text.main};
  background-color: ${({ selected }) =>
    selected
      ? (props) => props.theme.palette.nonPrimary
      : (props) => props.theme.palette.lightYellow};
`;

export const Day = styled.h3`
  font-weight: 800;
  font-size: 12px;
  line-height: 15px;
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
`;

/* History */

export const History = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 1%;
  width: 85%;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;

  #hover {
    grid-column: 1;
    grid-row: 1;
    background-color: ${(props) => props.theme.palette.text.main};
    color: ${(props) => props.theme.palette.primary};
    padding: 10px 1em;
  }

  #nonHover {
    grid-column: 1;
    grid-row: 1;
  }

  span {
    grid-column: 5;
    grid-row: 1;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.palette.lightYellow};
  padding: 10px 1em;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
`;

export const DataSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  img {
    width: 3%;
    height: 3%;
  }
`;

export const Exit = styled.span`
  border: none;
  background-color: transparent;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  padding-left: 2px;
  margin-left: 5px;
  cursor: pointer;
`;

export const Datum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;

  button {
    display: none;
    margin-right: 0.2em;
    transition: 0.4s;
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.secondary};
    button {
      display: block;
    }
    #nonHover {
      display: none;
      transition: 0.3s;
    }
  }
`;

export const WebRef = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
