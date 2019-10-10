import React from 'react'
import Button from "./Button"

export default function ButtonBar(props) {
    // let ButtonData = {props.ButtonData};
    return (
        <>
            {
                props.buttonData.map(obj => (
                    <Button key={obj.id} name={obj.name} onClick={obj.onClick}></Button>
                ))
            }
        </>
    )
}
