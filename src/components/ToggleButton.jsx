import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

function ToggleButton() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    
  return (
    <Button onClick={toggleTheme}>
      <Img src={theme === "dark" ? "images/icon-sun.svg" : "images/icon-moon.svg"} />
    </Button>
  )
}

export default ToggleButton

const Button = styled.button`
  cursor: pointer;
  background-color:transparent;
  border:none;
  margin-bottom:1.5rem;
  @media (max-width:992px){
    margin-bottom:0;
    margin-left:auto;
    margin-right:1.5rem;
  }
`
const Img = styled.img`
  
`