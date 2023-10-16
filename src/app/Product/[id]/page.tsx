'use client'
import { TextFormField } from "@/Components/Forms/TextFormField/TextFormField";
import { FormContextProvider } from "@/Contexts/FormContext/FormContext";
import { defaultValuesProductForm, validationSchemaProductForm } from "./Schema/ProductFormSchema";
import { Button } from "@mui/material";
import { ProductForm } from "./ProductForm";

type ParamsType = { params: { productId: string } }

export default function Page({ params }: ParamsType) {
  console.log('params: ', params); 
  return (
    <>
      <FormContextProvider
        defaultValues={defaultValuesProductForm}
        validationSchema={validationSchemaProductForm}
        onSubmit={(values) => { debugger }}
      >
        <ProductForm/>
      </FormContextProvider>
    </>
  )
}
