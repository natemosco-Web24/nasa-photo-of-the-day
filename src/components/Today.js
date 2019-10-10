import React from 'react';
import styled from 'styled-components';

export default function Today(props) {
    const StyledDiv = styled.div`
        width:100%;
        min-height:100vh;
        height-auto;
        background: url(${props.APOD.url}) no-repeat 100%/cover;
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 0 50px;
        magrin-top:50px;
        .text{
            width:75%;
            height:50vh;
            background-color:#000b;
            border-radius: 30px;
            padding: 0 20px;
            p{
                color: #b1afb4;
                font-weight:700;
                line-height:1.6;
                :hover{
                    display:none;
                }
            }
            .explanation{
                font-size:1.8rem;
            }
            .title{
                font-size:2.8rem;
            }
            :hover{
                display:none;
            }
        }
        
    `;
    return (
        <StyledDiv>
            <div className="text">
                <p className="title">{props.APOD.title}</p>
                <p className="explanation">{props.APOD.explanation}</p>
            </div>
        </StyledDiv>
    )
}
