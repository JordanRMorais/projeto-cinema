import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function Sessoes() {
  const [dias, setDias] = useState([]);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes")
      .then((resposta) => {
        setDias(resposta.data.days);
      })  }, []);

  return (
    <SessoesContainer>
      <h1>Selecione o horário</h1>

      {dias.map((dia) => (
        <Sessao key={dia.id}>
          <Data>
            <p>{dia.weekday}, {dia.date}</p>
          </Data>
          <Linha />
          <Horarios>
            {dia.showtimes.map((sessao) => (
              <p key={sessao.id}>{sessao.name}</p>
            ))}
          </Horarios>
        </Sessao>
      ))}
    </SessoesContainer>
  );
}



const SessoesContainer = styled.div`
  background-color: rgba(33, 34, 38, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: 100%;
  max-height: 800px;
  padding: 30px;


h1 {font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: white;
}

`
const Sessao = styled.div`
  width: 340px;
  min-height: 150px;
  background-color: rgba(43, 45, 54, 1);
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-left: 20px;
  justify-content: space-evenly;
  
`;

const Data = styled.div`
  margin-bottom: 10px;
  

  p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: white;
  }
`;

const Horarios = styled.div`
  display: flex;
  gap: 10px;

  p {
    border: 2px solid rgba(238, 137, 127, 1);
    color: rgba(238, 137, 127, 1);
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
  }

`;

const Linha = styled.hr`
  width: 80%;
  border: none;
  border-top: 1px solid rgba(78, 90, 101, 1);
  margin: 0;
`;