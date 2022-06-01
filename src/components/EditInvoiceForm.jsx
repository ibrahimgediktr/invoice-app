import React from "react";
import { Formik } from "formik";

function EditInvoiceForm({ isOpen, setIsOpen, invoice }) {
  function onSubmit(values) {
    console.log(values);
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <Formik
          initialValues={{
            createdAt: new Date(invoice.createdAt),
            paymentTerms: invoice.paymentTerms,
            description: invoice.description,
            clientName: invoice.clientName,
            clientEmail: invoice.clientEmail,
            clientAdress: invoice.clientAddress,
            senderAddress: invoice.senderAddress,
            items: invoice.items,
          }}
          onSubmit={onSubmit}
        >
          {(formik) => <form setIsOpen={setIsOpen}>form</form>}
        </Formik>
      )}
    </>
  );
}

export default EditInvoiceForm;
