import React from "react";
import styled from "styled-components";
import Status from "./Status";
import {Link} from 'react-router-dom'

function InvoiceItem({ invoice }) {
  console.log(invoice);
  return (
    <InvoiceItemWrapper to={`/invoice/${invoice.id}`}>
      <Heading>{invoice.id}</Heading>
      <PaymentDue>{invoice.paymentDue}</PaymentDue>
      <ClientName>{invoice.clientName}</ClientName>
      <Total>{invoice.total} $</Total>
      <StyledStatus status={invoice.status}>{invoice.status}</StyledStatus>
      <Icon src="images/icon-arrow-right.svg" alt=""></Icon>
    </InvoiceItemWrapper>
  );
}

export default InvoiceItem;

const InvoiceItemWrapper = styled(Link)`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr min-content;
  align-items: center;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  text-decoration:none;
  border: ${(props) =>
    props.theme.type === "dark"
      ? "1px solid rgb(30, 33, 57)"
      : "1px solid rgb(255, 255, 255)"};
  background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(30, 33, 57)" : "rgb(255, 255, 255)"};
  &:hover {
    border-color: rgb(124, 93, 250);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1.25rem min-content min-content;
    grid-template-areas: 
    "heading client-name"
    ". ."
    "payment-due status"
    "total status"
    ;

    grid-column-gap: 0.5rem;
  }
  @media (max-width:325px){
    padding:1rem 1rem;
  }
`;
const Heading = styled.h4`
  color: ${(props) => props.theme.text.primary.color};
  @media (max-width:768px){
    grid-area:heading;
  }
`;
const PaymentDue = styled.span`
  color: ${(props) => props.theme.text.secondary.color};
  @media (max-width:768px){
    grid-area:payment-due;
    margin-bottom:0.25rem;
  }
`;
const ClientName = styled.span`
  color: ${(props) => props.theme.text.secondary.color};
  @media (max-width:768px){
    grid-area:client-name;
    place-self: end;
  }
`;
const Total = styled.h3`
  color: ${(props) => props.theme.text.primary.color};
  overflow-wrap:break-word;
  @media (max-width:768px){
    grid-area:total;
  }
`;

const StyledStatus = styled(Status)`
  @media (max-width:768px){
    grid-area:status;
    place-self: end;
  }
`;

const Icon = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;
