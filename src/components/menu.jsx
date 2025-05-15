import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Menu (){

const [filme,setFilme] = useState ([]);
const navigate = useNavigate();

    useEffect(() => { 
        
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        requisicao.then ((resposta) => setFilme (resposta.data));
    }, []);
       
    return (
    <Container>
        <h1>Em Cartaz</h1>
        <Filmes> 
        
        {filme.map( img => (
        <Filme key={img.id}>
            <img onClick={() => navigate(`/sessoes/${img.id}`) } src={img.posterURL}>
            </img>

        </Filme>
        ))}
       
        </Filmes>
    </Container>

    )   
}




const Container = styled.div`
  background-color: rgba(33, 34, 38, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow-y: scroll;
  height: 100%;
  max-height: 800px;
  padding: 30px;


h1 {font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: white;
}

`;

const Filmes = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: center;
padding-top: 10px;


`

const Filme = styled.div `

margin: 10px;
cursor: pointer;

img{
height: 210px;
width: 145px;
border-radius: 15px;
}

`




