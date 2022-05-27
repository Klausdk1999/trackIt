import {React,useState,useEffect} from "react";
import styled from 'styled-components';

export default function Habit({habit}){

    const [backgrounds,setBackgrounds]=useState(["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]);
    const [colors,setColors]=useState(["#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF"]);

    useEffect(() => {
        function isHabitDay(days){

            let newbackgrounds=[...backgrounds];
            let newcolors=[...colors];
            for(let i=0;i<7;i++){
                for(let j=0;j<days.length;j++){
                    if(i===days[j]){
                        newcolors[i]="#ffffff";
                        newbackgrounds[i]="#CFCFCF";
                    }
                }  
            }
            setBackgrounds(newbackgrounds);
            setColors(newcolors);
        }
    
        isHabitDay(habit.days);
    }, []);

    return(
        <Container>
            <h1>{habit.name}</h1>
            <Row>
                <DayBox colors={colors[0]} backgrounds={backgrounds[0]}>D</DayBox>
                <DayBox colors={colors[1]} backgrounds={backgrounds[1]}>S</DayBox>
                <DayBox colors={colors[2]} backgrounds={backgrounds[2]}>T</DayBox>
                <DayBox colors={colors[3]} backgrounds={backgrounds[3]}>Q</DayBox>
                <DayBox colors={colors[4]} backgrounds={backgrounds[4]}>Q</DayBox>
                <DayBox colors={colors[5]} backgrounds={backgrounds[5]}>S</DayBox>
                <DayBox colors={colors[6]} backgrounds={backgrounds[6]}>S</DayBox>
            </Row>
        </Container>
    )
}

const DayBox=styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: ${props => props.backgrounds};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin:5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.colors};
`
const Row=styled.div`
    display: flex;
    align-items: center;
    button {
        margin:10px;
        min-width: 100px;
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        text-align: center;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 21px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            text-decoration: none;
        }
    }
`
const Container=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
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