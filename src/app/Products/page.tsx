'use client'
import { TextFormField } from "@/Components/Forms/TextFormField/TextFormField";
import { FormContextProvider } from "@/Contexts/FormContext/FormContext";
import { useGetProductList } from "@/Hooks/Products/ProductsHook";
import { object } from "yup";
import { defaultValuesPage, validationSchemaPage } from "./PageSchema";
import { Button } from "@mui/material";

export default function Page() {
  return (
    <>
      <FormContextProvider
        defaultValues={defaultValuesPage}
        validationSchema={validationSchemaPage}
        onSubmit={(values) => { debugger }}
      >
        <TextFormField
          label="Nome"
          type="text"
          name="name"
        />
        
        <Button className="mt-2 " type="submit" variant="outlined">Submit</Button>
      </FormContextProvider>
    </>
  )
}
