import React from "react";
import { Button } from "../components/Button";
import styled from "styled-components";
import Header from "../components/Header";
import InvoiceItem from "../components/InvoiceItem";

function Home({invoices}) {

  return (
    <HomeWrapper>
      <Header />
      <InvoicesList>
        {invoices.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </InvoicesList>
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton secondary>Primary Button</StyledButton>
      <StyledButton tertiary>Primary Button</StyledButton>
    </HomeWrapper>
  );
}

export default Home;

const InvoicesList = styled.div`
  width: 100%;
`;
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
`;

const StyledButton = styled(Button)`
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
