import React from 'react'

export default function ButtonBar(props) {
    let ButtonData = props.ButtonData;
    return (
        {
            ButtonData.map(obj => (
                <Button name={obj.name} onClick={obj.onClick}></Button>
            ))
        }
    )
}
