import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";


export default function Confirmacao (){

      const { state } = useLocation();
      const navigate = useNavigate();
      const { nome, cpf, assentos, filme, horario, data } = state;

  return (

    <ContainerConfirmacao>
     <h1>Pedido finalizado!</h1>

    <TelaFinal>
    <p>Filme e sessão</p>
    <Linha/>
    <span>
        {filme}<br /><br />{data} às {horario}
    </span>
    <p>Ingressos</p>
    <Linha/>
    <span>
         {assentos.map((a, i) => (
            <div key={i}>Assento {a}<br /><br /></div>
          ))} 
    </span>

    <p>Comprador(a)</p>
    <Linha/>
    <span>
       Nome: {nome}<br /><br />CPF: {cpf} 
    </span>

    </TelaFinal>

    <BotaoVoltar onClick={() => navigate("/")}>
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
height: 480px;
width: 380px;
background-color:rgba(43, 45, 54, 1);
display: flex;
flex-direction: column;
justify-content: space-evenly;
border-radius: 8px;



p{
    font-size:22px;
    font-weight: 700;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:rgba(238, 137, 127, 1);
    margin-left: 20px;
    
};

span{ font-size:20px;
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