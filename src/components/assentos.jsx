import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


export default function Assentos (){


    const [lugar, setLugar] = useState ([]);
    const [sessao, setSessao] = useState({});
    const { idSessao } = useParams();
    const [selecionados, setSelecionados] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    
        useEffect(() => {
          const requisicaoLugar = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
          requisicaoLugar.then(resposta => {
            setLugar(resposta.data.seats);
            setSessao(resposta.data);
        });}, []); 
        
      function toggleAssento(assento) {
          if (!assento.isAvailable) {
            alert("Esse assento não está disponível");
            return;
          }

          if (selecionados.includes(assento.id)) {
            setSelecionados(selecionados.filter((id) => id !== assento.id));
          } else {
            setSelecionados([...selecionados, assento.id]);
          }
            }


         function reservarAssentos() {

          if (!nome || !cpf || selecionados.length === 0) {
          alert("Preencha todos os campos e selecione um assento!");
          return;
          }
           
            const dadosPessoais = {
              ids: selecionados,
              name: nome,
              cpf: cpf,
            };

             axios
              .post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", dadosPessoais)
              .then(() => {
                const assentosSelecionados = lugar.filter(l => selecionados.includes(l.id));
                navigate("/sucesso", {
                  state: {
                    nome,
                    cpf,
                    assentos: assentosSelecionados.map(lu => lu.name),
                    filme: sessao.movie.title,
                    horario: sessao.name,
                    data: sessao.day.date
                  }
                });
              });
        }

    return (
     <ContainerAssentos>
        <h1>Selecione o(s) assento(s)</h1>

        <Lugares> 
        {lugar.map(as =>(
             <Lugar key={as.id}
            
            $disponivel={as.isAvailable}
            $selecionado={selecionados.includes(as.id)}
            onClick={() => toggleAssento(as)}>

            <p>{as.name}</p>

            </Lugar>

        ))}
           
      
        </Lugares>

        <Linha/>

        <Dados>
            
            <h1>Nome do comprador(a)</h1>
            <input 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            placeholder="Digite seu nome..." 
            required/>
                        
            <h1>CPF do comprador(a)</h1>
            <input 
            value={cpf} 
            onChange={(e) => setCpf(e.target.value)} 
            placeholder="Digite seu CPF..." 
            required/>
            
        </Dados>
        <BotaoReserva type="button" onClick={reservarAssentos}>

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
/* background-color: red; */
margin-top: 20px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;


`

const Lugar = styled.div `
height: 26px;
width: 26px;
border-radius: 12px;
background-color: ${(props) =>
      !props.$disponivel
      ? "rgba(43, 45, 54, 1)"
      : props.$selecionado
      ? "rgba(238, 137, 127, 1)"
      : "rgba(157, 184, 153, 1)"};
display: flex;
align-items: center;
justify-content: center;
margin: 3px;
cursor: pointer;

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
