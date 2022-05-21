import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { Button } from "./Button";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <HeaderTextHeading>Invoices</HeaderTextHeading>
        <HeaderTextSubheading>There are 6 total invoices.</HeaderTextSubheading>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown />
        <StyledButton primary>
          <StyledButtonIconWrapper>
            <StyledButtonIcon src="images/icon-plus.svg" alt="Plus Icon" />
          </StyledButtonIconWrapper>
          <StyledButtonText>New Invoice</StyledButtonText>
        </StyledButton>
      </HeaderRight>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const HeaderLeft = styled.div`
  display: flex;
  flex-direction:column;
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;
const HeaderTextHeading = styled.h1`
  color: ${(props) => props.theme.text.primary.color};
  margin-bottom: 0.75rem;
`;
const HeaderTextSubheading = styled.span`
  color: ${(props) => props.theme.text.secondary.color};
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;
const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  margin-left: 2.5rem;
  @media (max-width:576px){
        padding:0.5rem;
        justify-content:center;
  }
`;
const StyledButtonIconWrapper = styled.div`
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  @media (max-width:576px){
        margin-right:0;
  }
`;
const StyledButtonIcon = styled.img``;
const StyledButtonText = styled.span`
    @media (max-width:576px){
        display:none;
    }
`;
