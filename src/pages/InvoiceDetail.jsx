import React from 'react'
import {useParams} from 'react-router-dom';

function InvoiceDetail() {
  const { invoice_id } = useParams();
  return (
    <div>{invoice_id}</div>
  )
}

export default InvoiceDetail