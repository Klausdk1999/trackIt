import React,{ useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import logo from "./media/logo.png" 

export default function SignUp() {

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  function submitData(event) {
    event.preventDefault();

    let postObject=
        {
            email ,
            name ,
            image ,
            password 
        };
    
    const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",postObject);

    promise.then(resposta => {
        setEmail("");
        setImage("");
        setPassword("");
        navigate("/");
        console.log(resposta.data);
    });
  }

  return (
    <FormsContainer>
        <img src={logo}/>
      <Container>
        E-mail
        <input
            type="text"
            placeholder="Digite seu e-mail..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
      </Container>
      <Container>
        Nome do comprador
        <input
            type="text"
            placeholder="Digite seu nome..."
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
      </Container>
      <Container>
        Imagem de perfil
        <input
            type="text"
            placeholder="Digite o link da sua imagem..."
            onChange={(e) => setImage(e.target.value)}
            value={image}
        />
      </Container>
      <Container>
        Senha
        <input
            type="text"
            placeholder="Digite sua senha..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
      </Container>
      <OrangeBox onClick={submitData}>
        Reservar assento(s)
      </OrangeBox>
    </FormsContainer>  
  );
}

const OrangeBox= styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 15px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    margin-top:10px ;
`
const FormsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    justify-content: space-around;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #293845;
    margin: 20px;
    margin-bottom: 130px;
` ;

const Container = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
    input{
    width: 100%;
    margin-right: 20px;
    height: 51px;
    left: 24px;
    top: 497px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    text-decoration: italic;
    padding-left: 18px;
    box-sizing: border-box;
    
    ::placeholder{
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #AFAFAF;
    }
    ::-webkit-input-placeholder {
   font-style: italic;
    }
    :-moz-placeholder {
    font-style: italic;  
    }
    ::-moz-placeholder {
    font-style: italic;  
    }
    :-ms-input-placeholder {  
    font-style: italic; 
    }
    }
    
` ;