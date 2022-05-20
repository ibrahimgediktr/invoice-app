import React from 'react'
import { Button } from '../components/Button'
import styled from 'styled-components';

function Home() {

  return (
    <HomeWrapper>
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton secondary>Primary Button</StyledButton>
      <StyledButton tertiary>Primary Button</StyledButton>
    </HomeWrapper>
  )
}

export default Home

const StyledButton = styled(Button)`
margin-right:1rem;
margin-bottom:1rem;
`
const HomeWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin-top: 2rem;
`