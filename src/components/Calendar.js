import React from 'react'
import styled from "styled-components"

const StyleCalendarForm = styled.form`
    background-color: #00000073;
    width:100%;
    label{
        font-size: 2rem;
        margin-right:10px;
        font-weight:700;
        color:white;
    }
    input{
        height:40px;
        width:160px;
        margin-right:10px;
        font-size: 2rem;
    }
    button{
        font-size:2rem;
        font-weight:700;
        border-radius:45px;
        padding: 2px 30px;
    }
`;

export default function Calendar(props) {

    function processData(id) {
        return document.getElementById(id).value
    }
    return (
        <StyleCalendarForm>
            <label for="pick-date">Select a date:</label>

            <input type="date" id="pick-date" name="pick-date"
                // value="2010-01-01"
                min="1995-06-06" max="2019-10-10"></input>
            <button type="button" value="submit" onClick={(e) => { props.setDate(processData("pick-date")) }}>Submit</button>
        </StyleCalendarForm>
    )
}
