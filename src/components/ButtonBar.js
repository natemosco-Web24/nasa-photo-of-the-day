import React from 'react'
import Button from "./Button"
import styled from "styled-components"

const StyledButtonBar = styled.div`
    width = 100%;
    height= 200px;
    background-color: #00000073;
    display:flex;
    justify-content: flex-start;
    align-items:center;
`;

export default function ButtonBar(props) {
    // let ButtonData = {props.ButtonData};
    return (
        <StyledButtonBar>
            {
                props.buttonData.map(obj => (
                    <Button key={obj.id} name={obj.name} onClick={obj.onClick}></Button>
                ))
            }
        </StyledButtonBar>
    )
}
