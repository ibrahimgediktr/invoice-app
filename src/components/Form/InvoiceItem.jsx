import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

function InvoiceItem({ formik, index, item }) {
  return (
    <>
      <FormGroup>
        <FormLabel>Item Name</FormLabel>
        <FormInput
          type="text"
          name="createdAt"
          onBlur={formik.handleBlur}
          defaultValue={item.name}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Qty</FormLabel>
        <FormInput
          type="text"
          name="createdAt"
          onBlur={formik.handleBlur}
          defaultValue={item.quantity}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Price</FormLabel>
        <FormInput
          type="text"
          name="createdAt"
          onBlur={formik.handleBlur}
          defaultValue={item.price}
        />
      </FormGroup>
      <FormGroup >
        <FormLabel>Total</FormLabel>
        <FormInput
          readOnly="true"
          type="text"
          name="createdAt"
          onBlur={formik.handleBlur}
          defaultValue={item.total}
          total
        />
      </FormGroup>
      <DeleteButton>
        <Icon src="/images/icon-delete.svg" />
      </DeleteButton>
    </>
  );
}

export default InvoiceItem;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;
const FormLabel = styled.label`
  display: block;
  color: ${(props) => props.theme.text.secondary.color};
  font-weight: lighter;
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
`;
const FormInput = styled(Input)`
    border-color: ${(props) => props.total && 'transparent'};
    background: ${(props) => props.total && 'transparent'};
`;
const DeleteButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-top: 0.75rem;
`;
const Icon = styled.img``;
