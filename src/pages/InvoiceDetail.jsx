import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";
import Status from "../components/Status";

function InvoiceDetail({ invoices }) {
  const { invoice_id } = useParams();
  const [invoice, setInvoice] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setInvoice(invoices?.find((invoice) => invoice.id === invoice_id));
    setLoading(false);
  }, [invoices, invoice_id]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <InvoiceDetailWrapper>
        <BackButton onClick={() => navigate(-1)}>
          <Icon src="/images/icon-arrow-left.svg" alt="" />
          <Text>Go Back</Text>
        </BackButton>
        <Header>
          <HeaderStatus>
            <StatusText>Status</StatusText>
            <StyledStatus status={invoice.status}>
              {invoice.status}
            </StyledStatus>
          </HeaderStatus>
          <HeaderButtons>
            <StyledButton tertiary>Edit</StyledButton>
            <StyledButton secondary>Delete</StyledButton>
          </HeaderButtons>
        </Header>
        <Body>
          <InvoiceTitle>
            <InvoiceId>#{invoice.id}</InvoiceId>
            <InvoiceDescription>{invoice.description}</InvoiceDescription>
          </InvoiceTitle>
          <InvoiceSenderAddress>
            <Address>{invoice.senderAddress.street}</Address>
            <Address>{invoice.senderAddress.city}</Address>
            <Address>{invoice.senderAddress.postCode}</Address>
            <Address>{invoice.senderAddress.country}</Address>
          </InvoiceSenderAddress>
          <InvoiceDates>
            <InvoiceDate>
              <InvoiceDateTitle>Invoice Date</InvoiceDateTitle>
              <InvoiceDateContent>{invoice.createdAt}</InvoiceDateContent>
            </InvoiceDate>
            <InvoiceDate>
              <InvoiceDateTitle>Payment Due</InvoiceDateTitle>
              <InvoiceDateContent>{invoice.paymentDue}</InvoiceDateContent>
            </InvoiceDate>
          </InvoiceDates>
          <InoviceBill>
            <InvoiceAddressTitle>Bill To</InvoiceAddressTitle>
            <InvoiceClientName>{invoice.clientName}</InvoiceClientName>
            <InvoiceClientAdress>
              <Address>{invoice.clientAddress.street}</Address>
              <Address>{invoice.clientAddress.city}</Address>
              <Address>{invoice.clientAddress.postCode}</Address>
              <Address>{invoice.clientAddress.country}</Address>
            </InvoiceClientAdress>
          </InoviceBill>
          <InvoiceEmail>
            <InvoiceEmailTitle>Send to</InvoiceEmailTitle>
            <InvoiceEmailContent>{invoice.clientEmail}</InvoiceEmailContent>
          </InvoiceEmail>
        </Body>
      </InvoiceDetailWrapper>
    );
  }
}

export default InvoiceDetail;

const InvoiceDetailWrapper = styled.div``;
const BackButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 2rem;
`;
const Icon = styled.img``;
const Text = styled.span`
  color: ${(props) => props.theme.text.primary.color};
  margin-left: 0.5rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(30, 33, 57)" : "rgb(255, 255, 255)"};
  padding: 1.5rem;
  border-radius: 0.5rem;
  @media (max-width:768px){
    justify-content:unset !important;
  }
`;
const HeaderStatus = styled.div`
  display: flex;
  align-items: center;
  @media (max-width:768px){
    justify-content: space-between;
    width: 100%;
  }
`;
const StatusText = styled.span`
  color: ${(props) =>
    props.theme.type === "dark" ? "rgb(223, 227, 250)" : "rgb(136, 142, 176)"};
  font-weight: 400;
  font-size: 0.9rem;
 
`;
const StyledStatus = styled(Status)`
  margin-left: 1rem;
`;
const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

const HeaderButtons = styled.div`
  margin-left: 1rem;
  @media (max-width:768px){
    display:none;
  }
`;
const Body = styled.div`
  background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(30, 33, 57)" : "rgb(255, 255, 255)"};
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "title title sender"
    "dates client email";
  justify-items: start;
  grid-row-gap: 1.5rem;
  @media (max-width:768px){
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "title title"
    "sender sender"
    "dates client"
    "dates client"
    "email email"
  }
  @media (max-width:576px){
    grid-template-columns:1fr;
    grid-template-areas:unset;
     * {
      grid-area:unset !important;
    };
  }
`;

const InvoiceTitle = styled.div`
  grid-area: title;
`;

const InvoiceId = styled.h4`
  color: ${(props) => props.theme.text.primary.color};
  margin-bottom: 0.5rem;
`;
const InvoiceDescription = styled.span`
  color: ${(props) => props.theme.text.secondary.color};
`;

const Address = styled.span`
  color: ${(props) => props.theme.text.secondary.color};
  display: block;
  margin-bottom: 0.4rem;
  text-align: right;
`;

const InvoiceSenderAddress = styled.address`
  grid-area: sender;
  font-style: normal;
  align-self: end;
  width: 100%;
  @media (max-width:768px){
    align-self:start;
    ${Address}{
      text-align:left;
    }
  }
`;


const InvoiceDates = styled.div`
  grid-area: dates;
`;
const InvoiceDate = styled.div`
  margin-bottom:1.5rem;

`;
const InvoiceDateTitle = styled.span`
  display: block;
  color: ${(props) => props.theme.text.secondary.color};
`;
const InvoiceDateContent = styled.h5`
  display: block;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.text.primary.color};
  font-size:1.25rem;
`;
const InoviceBill = styled.div`
  grid-area: client;
  text-align:left;
  ${Address}{
    text-align:left;
  }
`;
const InvoiceAddressTitle = styled.span`
  display: block;
  color: ${(props) => props.theme.text.secondary.color};
`;
const InvoiceClientName = styled.h5`
  color: ${(props) => props.theme.text.primary.color};
  font-size:1.25rem;
  margin:0.75rem 0;
`;
const InvoiceClientAdress = styled.address`
  font-style: normal;
`;
const InvoiceEmail = styled.div`
  grid-area: email;
`;
const InvoiceEmailTitle = styled.span`
  display: block;
  color: ${(props) => props.theme.text.secondary.color};
`;
const InvoiceEmailContent = styled.h5`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.text.primary.color};
  font-size:1.25rem;
`;
