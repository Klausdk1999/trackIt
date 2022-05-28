import {React,useState,useEffect} from "react";
import styled from 'styled-components';
import trash from "./media/trash.png" ;
import axios from "axios";

export default function TodayHabit({habit,loadHabits,token}){
   
    // const [backgrounds,setBackgrounds]=useState(["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]);
    // const [colors,setColors]=useState(["#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF"]);

    // useEffect(() => {
    //     function isHabitDay(days){

    //         let newbackgrounds=[...backgrounds];
    //         let newcolors=[...colors];
    //         for(let i=0;i<7;i++){
    //             for(let j=0;j<days.length;j++){
    //                 if(i===days[j]){
    //                     newcolors[i]="#ffffff";
    //                     newbackgrounds[i]="#CFCFCF";
    //                 }
    //             }  
    //         }
    //         setBackgrounds(newbackgrounds);
    //         setColors(newcolors);
    //     }
    
    //     isHabitDay(habit.days);
    // }, []);

    function deleteHabit(id){
       
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
          
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config);

        promise.then(resposta => {
            console.log(resposta.data);
            loadHabits();
        });
        //RECARREGAR HABITOS
    }

    return(
        <>
        <Container>
            <Row>
                <Column>
                    <h1>{habit.name}</h1>
                    <h2>Sequência atual: {habit.currentSequence}</h2><br></br>
                    <h2>Seu recorde: {habit.highestSequence}</h2>
                </Column>
                <>
                    <h1>botao</h1>
                </>
            </Row>
                
        </Container>
        </>
    )
}

const DayBox=styled.div`
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: ${props => props.backgrounds};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin: 2.5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.colors};
`
const Column=styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
   // align-items: center;
`
const Row=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Container=styled.div`
    display: flex;
   // align-items: center;
    flex-direction: column;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 5px;
    //justify-content: center;
    margin-bottom: 15px;

    h1{
        margin: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    h2{
        margin-left: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`