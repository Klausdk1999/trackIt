import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import {React, useContext, useState } from 'react';
import UserContext from "../context/UserContext";

export default function NewHabit(){

    const { user } = useContext(UserContext);
    const {image,token} = user;
    const [habit, setHabit]=useState("");
    const [days,setDays]=useState([false,false,false,false,false,false,false]);
    const navigate = useNavigate();

    function submitData(event) {
        event.preventDefault();

        let postdays=days.filter(Boolean); //pegar numero dos que forem true
        console.log("days "+ days)
        console.log("postdays "+ postdays);
        
        let postObject={
            name: habit,
            days: postdays
        };

        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };

        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",postObject,config);
    
        promise.then(resposta => {
            setHabit("");
            console.log(resposta.data);
            //close newhabit tab
            navigate("/habitos");
        });
    }

    function selectDay(day){
        let newdays=[...days];
        newdays[day]=(!newdays[day]);
        setDays(newdays);
    }

    return(
        <Container>
            <input type="text" id="name" value={habit} placeholder="Nome do hábito" required onChange={(e)=>setHabit(e.target.value)} />
            
            <Row><DayBox onClick={() => selectDay(0)}>D</DayBox>
            <DayBox onClick={() => selectDay(1)}>S</DayBox>
            <DayBox onClick={() => selectDay(2)}>T</DayBox>
            <DayBox onClick={() => selectDay(3)}>Q</DayBox>
            <DayBox onClick={() => selectDay(4)}>Q</DayBox>
            <DayBox onClick={() => selectDay(5)}>S</DayBox>
            <DayBox onClick={() => selectDay(6)}>S</DayBox></Row>

            <Row><button onClick={submitData}>Salvar</button>
            <button onClick={submitData}>Cancelar</button> </Row>
            
        </Container>
    )
}

const DayBox=styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
`
const Row=styled.div`
    display: flex;
    align-items: center;
    button {
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
    width: 100%;
    margin-top: 68px;
    
    font-family: 'Lexend Deca', sans-serif;
    img{
        width: 180px;
        height: 178px;
        margin-bottom: 35px;
    }
    a{
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`