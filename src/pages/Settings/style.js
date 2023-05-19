import styled from "styled-components";

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 0.5em;
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.main};
  width: 100%;
  padding: 1em 1em;

  button {
    color: ${(props) => props.theme.palette.text.main};
  }

  #password {
    padding: 7px 1.7em;
  }

  #toggle {
    display: flex;
    flex-direction: row;

    .switch {
      display: flex;
      align-self: flex-end;
      position: relative;
      display: inline-block;
      width: 40px;
      height: 22px;
      margin-left: 0.7em;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 15px;
      bottom: 2px;
      margin-right: 1em;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }
`;

export const Title = styled.div`
  font-size: medium;
  padding: 0.5em 0;
  width: 50%;
  border-bottom: 2px solid ${(props) => props.theme.palette.secondary};
`;

export const BetweenBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 35%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2em;
`;

export const Button = styled.button`
  border: 1px solid ${(props) => props.theme.palette.secondary2};
  padding: 7px 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 5px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.palette.secondary};
  padding: 0.4em;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const LabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7em;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5em;
  font-weight: normal;
`;

export const Label = styled.label;
export const MyInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  height: 100%;
  width: 99%;
`;
