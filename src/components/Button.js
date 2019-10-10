import React from 'react'
import styled from "styled-components"

const StyledButton = styled.button`
    color: white;
    border-radius: 45px;
    height: 40px;
    width: 140px;
    margin: 5px 5px;
    font-size: 1.8rem;
    font-weight: 900;
    background: linear-gradient(#eae4e4, #040434);
    box-shadow: inset -1px -1px 20px 2px black;
`;
export default function Button(props) {
    return (
        <StyledButton onClick={() => { props.onClick() }}>{props.name}</StyledButton>
    )
}
