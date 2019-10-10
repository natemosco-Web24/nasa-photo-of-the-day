import React from 'react';
import styled from 'styled-components';

const StyledMediaDiv = styled.div`
        width:100%;
        min-height:110vh;
        height-auto;
        background: url("https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80") no-repeat 100%/cover;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding: 0 50px;
        magrin-top:50px;
        .text{
            width:90%;
            height:45vh;
            background-color:#000b;
            border-radius: 30px;
            padding: 0 20px;
            p{
                color: #b1afb4;
                font-weight:700;
                line-height:1.6;
            }
            .explanation{
                font-size:1.8rem;
            }
            .title{
                font-size:2.8rem;
            }
        }
        
    `;
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
    const renderMedia = () => {
        if (props.APOD.media_type === "image") {
            return (
                <StyledDiv>
                    <div className="text">
                        <p className="title">{props.APOD.title}</p>
                        <p className="explanation">{props.APOD.explanation}</p>
                    </div>
                </StyledDiv>
            )
        } else {
            return (
                <StyledMediaDiv>
                    <iframe src={props.APOD.url}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        width="800px"
                        height="500px"
                    />
                    <div className="text">
                        <p className="title">{props.APOD.title}</p>
                        <p className="explanation">{props.APOD.explanation}</p>
                    </div>
                </StyledMediaDiv>
            )
        }
    }

    return (
        <>
            {renderMedia()}
        </>
    )
}
