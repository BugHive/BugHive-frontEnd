import styled from "styled-components";


export const Container = styled.div`
    margin: auto;
    position: relative;
    width: fit-content;
`;

export const Avatar = styled.button`
    display: flex;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    align-self: flex-end;
    width: 60px;


    #arrow{
        display: flex;
        justify-content: center;
        padding: 0.02em;
        position: absolute;
        bottom:2px;
        right: 2px;
        border-radius: 50%;
        /* background-color: ${(props)=>props.theme.palette.secondary}; */
        background-color: gray;
    }
`;


export const PopupContainer = styled.div`
    display: flex;
    position: absolute;
    right: 5px;
    /* left: 0; */
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 10px;
    width: 200px;
  `;

export const PopupContent = styled.div`
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 100%;
    overflow: auto;
    border-radius: 10px;
    position: relative;
    background-color: ${(props)=>props.theme.palette.primary};

    #logout{
        border-top: 1px solid #E4E2E2;
        margin-top: 2.7em;
        padding-top: 0.3em;
        padding-bottom: 0.2em;
    }

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    li{
        display: flex;
        flex-direction: row;
        gap: 0.7em;
        align-items: center;
        color:${(props)=>props.theme.palette.text.main};
        cursor: pointer;


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
            -webkit-transition: .4s;
            transition: .4s;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 15px;
            bottom: 2px;
            margin-right:1em;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        input:checked + .slider {
            background-color: #2196F3;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
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

