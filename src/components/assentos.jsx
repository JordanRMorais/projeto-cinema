import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Assentos (){
    return (
     <ContainerAssentos>
        <h1>Selecione o(s) assento(s)</h1>
        <Lugares> 
        
            <Lugar>
            <p>01</p>
            </Lugar>
      
        </Lugares>
        <Linha/>
        <Dados>
            
            <h1>Nome do comprador(a)</h1>
            <input placeholder="Digite seu nome..."></input>
            
            
            <h1>CPF do comprador(a)</h1>
            <input placeholder="Digite seu CPF..."></input>
            
        </Dados>
        <BotaoReserva>
            <button>
                <p>Reservar assentos(s)</p>
            </button>
        </BotaoReserva>
    </ContainerAssentos>
    )
}

const ContainerAssentos = styled.div`
  background-color: rgba(33, 34, 38, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow-y: scroll;
  height: 100%;
  height: 700px;
  max-height: 800px;
  padding: 30px;
  justify-content: space-around;


h1 {font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: white;
}

`;

const Lugares = styled.div `
height: 200px;
width: 380px;
background-color: red;
margin-top: 20px;


`

const Lugar = styled.div `
height: 26px;
width: 26px;
border-radius: 12px;
background-color: rgba(157, 184, 153, 1);
display: flex;
align-items: center;
justify-content: center;

p{
    font-size: 11px;
    font-weight: 400;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgba(43, 45, 54, 1);
}

`

const Linha = styled.hr`
  width: 80%;
  border: none;
  border-top: 1px solid rgba(78, 90, 101, 1);
  margin: 0;
`;

const Dados = styled.div `
display: flex;
flex-direction: column;
justify-content: ;
height: 180px;
justify-content: space-around;


h1{
    color:white;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
}

input{
    width: 380px;
    height: 40px;
    border-radius: 8px;

}
::placeholder{
    font-size: 16px;
    font-style:italic;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-left: 15px;
}
`

const BotaoReserva = styled.div`
  width: 338px;
  height: 42px;

  button {
    width: 100%;
    height: 100%;
    background-color: rgba(238, 137, 127, 1);
    border: none;
    cursor: pointer;
    border-radius: 8px;

    p {
      font-size: 18px;
      font-weight: 700;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
  }
`;
