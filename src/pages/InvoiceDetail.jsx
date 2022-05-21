import React from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

function InvoiceDetail() {
  const { invoice_id } = useParams();
  const navigate = useNavigate();
  return (
    <InvoiceDetailWrapper>
        <BackButton onClick={() => navigate(-1)}>
            <Icon src="/images/icon-arrow-left.svg" alt="" />
            <Text>Go Back</Text>
        </BackButton>
        <div style={{color:"#fff", marginTop:"2rem"}}>{invoice_id}</div>
    </InvoiceDetailWrapper>
  )
}

export default InvoiceDetail

const InvoiceDetailWrapper = styled.div``
const BackButton = styled.button`
    background:transparent ;
    border:none;
    cursor: pointer;
`
const Icon = styled.img``
const Text = styled.span`
    color: ${(props) => props.theme.text.primary.color};
    margin-left:0.5rem;
`
