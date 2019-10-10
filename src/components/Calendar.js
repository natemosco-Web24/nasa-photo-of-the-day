import React from 'react'

export default function Calendar(props) {

    function processData(id) {
        return document.getElementById(id).value
    }
    return (
        <form>
            <label for="pick-date">Select a date:</label>

            <input type="date" id="pick-date" name="pick-date"
                // value="2010-01-01"
                min="1995-06-06" max="2019-10-10"></input>
            <button type="button" value="submit" onClick={(e) => { props.setDate(processData("pick-date")) }}>Submit</button>
        </form>
    )
}
