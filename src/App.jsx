import Topo from './components/topo.jsx'
import styled from 'styled-components'
import Menu from './components/menu.jsx'


export default function App() {
  
  return (
    <Container>
    <Topo/>
    <Menu/>
    </Container>
  )
}

const Container = styled.div`
  min-width: 375px;
  max-width: 500px;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;







