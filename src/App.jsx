import Topo from './components/topo.jsx'
import styled from 'styled-components'
import Menu from './components/menu.jsx'
import Sessoes from './components/sessoes.jsx';
import Assentos from './components/assentos.jsx';
import Confirmacao from './components/confirmacao.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  
  return (
    <BrowserRouter>
      <Container>
        <Topo/>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/sessoes/:idFilme" element={<Sessoes />} />
          <Route path="/assentos/:idSessao" element={<Assentos />} />
          <Route path="/sucesso" element={<Confirmacao />} />
        </Routes>    
      </Container>
    </BrowserRouter>

  )
}

const Container = styled.div`
  min-width: 375px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;







