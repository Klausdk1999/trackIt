import React from "react";
import styled from 'styled-components';

export default function Habit({habit}){
    
    return(
        <Container>
            <h1>{habit.name}</h1>
            {/* {habits.days.map((day) => (
                
            ))} */}
        </Container>
    )
}

const Container=styled.div`
    display: flex;
    align-items: center;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    justify-content: space-between;
    
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
`