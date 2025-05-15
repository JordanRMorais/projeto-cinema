import Topo from './components/topo.jsx'
import styled from 'styled-components'
import Menu from './components/menu.jsx'
import Sessoes from './components/sessoes.jsx';
import Assentos from './components/assentos.jsx';


export default function App() {
  
  return (
    <Container>
    <Topo/>
    {/* <Menu/>
    <Sessoes/> */}
    <Assentos/>
    </Container>
  )
}

const Container = styled.div`
  min-width: 375px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;







