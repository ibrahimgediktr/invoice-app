import React from "react";
import styled, { css } from "styled-components";
import { Formik, Field } from "formik";
import { Input } from "./Input";
import InvoiceItem from "./InvoiceItem";

function EditInvoiceForm({ isOpen, setIsOpen, invoice }) {
  function onSubmit(values) {
    console.log(values);
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <EditInvoiceFormModal>
          <Formik
            initialValues={{
              createdAt: new Date(invoice.createdAt),
              paymentTerms: invoice.paymentTerms,
              description: invoice.description,
              clientName: invoice.clientName,
              clientEmail: invoice.clientEmail,
              clientAddress: invoice.clientAddress,
              senderAddress: invoice.senderAddress,
              items: invoice.items,
            }}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form setIsOpen={setIsOpen}>
                <Heading>Edit #{invoice.id}</Heading>
                <Fieldset field="billfrom">
                  <Legend>Bill From</Legend>
                  <FormGroup>
                    <FormLabel>Street Adress</FormLabel>
                    <FormInput
                      type="text"
                      name="senderAddress.street"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.senderAddress.street}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>City</FormLabel>
                    <FormInput
                      type="text"
                      name="senderAddress.city"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.senderAddress.city}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Post Code</FormLabel>
                    <FormInput
                      type="text"
                      name="senderAddress.postCode"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.senderAddress.postCode}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Country</FormLabel>
                    <FormInput
                      type="text"
                      name="senderAddress.country"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.senderAddress.country}
                    />
                  </FormGroup>
                </Fieldset>
                <Fieldset field="billto">
                  <Legend>Bill To</Legend>
                  <FormGroup>
                    <FormLabel>Client's Name</FormLabel>
                    <FormInput
                      type="text"
                      name="senderAddress.clientName"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.clientName}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Client's E-mail</FormLabel>
                    <FormInput
                      type="text"
                      name="senderAddress.city"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.clientEmail}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Street Adress</FormLabel>
                    <FormInput
                      type="text"
                      name="senderAddress.street"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.clientAddress.street}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>City</FormLabel>
                    <FormInput
                      type="text"
                      name="senderAddress.city"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.clientAddress.city}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Post Code</FormLabel>
                    <FormInput
                      type="text"
                      name="senderAddress.postCode"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.clientAddress.postCode}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Country</FormLabel>
                    <FormInput
                      type="text"
                      name="senderAddress.country"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.clientAddress.country}
                    />
                  </FormGroup>
                </Fieldset>
                <Fieldset field="dates">
                  <FormGroup>
                    <FormLabel>Invoice Date</FormLabel>
                    <FormInput
                      type="text"
                      name="createdAt"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.createdAt}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Payment Terms</FormLabel>
                    <StyledField as="select" name="paymentTerms">
                      <option value="1">Next 1 day</option>
                      <option value="7">Next 7 day</option>
                      <option value="14">Next 14 day</option>
                      <option value="28">Next 28 day</option>
                    </StyledField>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Street Adress</FormLabel>
                    <FormInput
                      type="text"
                      name="description"
                      onBlur={formik.handleBlur}
                      defaultValue={formik.initialValues.description}
                    />
                  </FormGroup>
                </Fieldset>
                <Fieldset field="item-list">
                  <Legend field="item-list">Item List</Legend>
                  {formik.initialValues.items?.map((item, index) => (
                    <InvoiceItem key={index} item={item} formik={formik} index={index} />
                  ))}
                </Fieldset>
              </Form>
            )}
          </Formik>
        </EditInvoiceFormModal>
      )}
    </>
  );
}

export default EditInvoiceForm;

const EditInvoiceFormModal = styled.div`
  position: fixed;
  top: 0;
  left: 100px;
  width: 100%;
  max-width: 40rem;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(20, 22, 37)" : "rgb(255, 255, 255)"};
  padding: 2rem 1.5rem;
`;
const Form = styled.form`
  padding-bottom: 1rem;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem;
`;
const Heading = styled.h2`
  color: ${(props) => props.theme.text.primary.color};
  margin-bottom: 1.5rem;
`;
const Fieldset = styled.fieldset`
  border: none;
  margin-bottom: 1.5rem;
  display: grid;
  grid-gap: 1rem;
  ${(props) => {
    if (props.field === "billfrom") {
      return css`
        grid-template-columns: 1fr 1fr 1fr;
        *:nth-child(2) {
          grid-column: 1/4;
        }
        *:nth-child(3) {
          grid-column: 1/1;
        }
        *:nth-child(4) {
          grid-column: 2/2;
        }
        *:nth-child(5) {
          grid-column: 3/4;
        }
      `;
    }
    if (props.field === "billto") {
      return css`
        grid-template-columns: 1fr 1fr 1fr;

        *:nth-child(2) {
          grid-column: 1/4;
        }
        *:nth-child(3) {
          grid-column: 1/4;
        }
        *:nth-child(4) {
          grid-column: 1/4;
        }
        *:nth-child(5) {
          grid-column: 1/1;
        }
      `;
    }
    if (props.field === "dates") {
      return css`
        grid-template-columns: 1fr 1fr;

        *:nth-child(1) {
          grid-column: 1/2;
        }
        *:nth-child(2) {
          grid-column: 2/3;
        }
        *:nth-child(3) {
          grid-column: 1/3;
        }
      `;
    }
    if (props.field === "item-list") {
      return css`
        grid-template-columns: max-content 50px 1fr 1fr min-content;
      `;
    }
  }};
`;

const Legend = styled.legend`
  color: rgb(124, 93, 250);
  margin-bottom: 1.25rem;
`;
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
const FormInput = styled(Input)``;
const StyledField = styled(Field)`
  width: 100%;
  outline: none;
  padding: 1rem 1.25rem;
  background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(30, 33, 57)" : "rgb(255, 255, 255)"};
  color: ${(props) => props.theme.text.primary.color};
  border: ${(props) =>
    props.theme.type === "dark"
      ? "1px solid rgb(37, 41, 69)"
      : "1px solid rgb(223, 227, 250)"};
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.75rem;
`;
