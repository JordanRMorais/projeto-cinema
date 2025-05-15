import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Confirmacao (){

  return (

    <ContainerConfirmacao>
     <h1>Pedido finalizado!</h1>

    <TelaFinal>
    <p>Filme e sessão</p>
    <Linha/>
    <p1>
        texto
    </p1>
    <p>Ingressos</p>
    <Linha/>
    <p1>
        texto
    </p1>

    <p>Comprador(a)</p>
    <Linha/>
    <p1>
        texto
    </p1>

    </TelaFinal>

    <BotaoVoltar>
        <button>
            <p>Voltar para tela inicial</p>
        </button>
    </BotaoVoltar>

    </ContainerConfirmacao>

    )   
}

const ContainerConfirmacao = styled.div`
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
    color: rgba(157, 184, 153, 1);
}

`;

const TelaFinal = styled.div `
height: 425px;
width: 380px;
background-color:rgba(43, 45, 54, 1);
display: flex;
flex-direction: column;
justify-content: space-evenly;



p{
    font-size:22px;
    font-weight: 700;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:rgba(238, 137, 127, 1);
    margin-left: 20px;
    
};

p1{ font-size:20px;
    font-weight: 400;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:white;
    margin-left: 20px;
    

}

`

const Linha = styled.hr`
  width: 80%;
  border: none;
  border-top: 1px solid rgba(78, 90, 101, 1);
  margin: 0;
`;

const BotaoVoltar = styled.div`
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