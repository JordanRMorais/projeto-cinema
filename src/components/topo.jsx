import styled from "styled-components";
import Foto from "../images/play.png"

export default function Topo (){
    return (
        <Barra>
        <img src={Foto}></img>
        <p>Cineflex</p>

        </Barra>
    )

}

const Barra = styled.div`
  height: 65px;
  background-color: rgba(238, 137, 127, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  
  p { color: rgba(250, 219, 197, 1);
    font-size: 34px;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    padding-left: 20px;
   

  }

  img {
    width: 40px;
    height: 40px;

  }

`;