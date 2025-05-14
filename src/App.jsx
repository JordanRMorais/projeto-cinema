import Topo from './components/topo'
import styled from 'styled-components'
import Menu from './components/Menu'


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
`;







