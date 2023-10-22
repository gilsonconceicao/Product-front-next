'use client'
import { FormContextProvider } from "@/Contexts/FormContext/FormContext";
import { defaultValuesProductForm, validationSchemaProductForm } from "./Schema/ProductFormSchema";
import { Button } from "@mui/material";
import { ProductForm } from "./ProductForm";
import { useCreateProduct } from "@/Hooks/Products/ProductsHook";
import { useRouter } from "next/navigation";

type ParamsType = { params: { productId: string } }

export default function Page({ params }: ParamsType) {
  const router = useRouter();
  const onSuccess = () => {
    alert("Sucesso ao cadastrar o produto"); 
    // router.push('/Product/');
  };
  const onError = (error: any) => {
    console.log('error: ',error); 
    const errorMessage = Object.entries(error.response.data.errors).map(item => item[1]); 
    alert("Houve um erro ao cadastrar o produto: " + errorMessage?.join(', ')); 
  };
  const { mutate } = useCreateProduct(onSuccess, onError); 
  
  return (
    <>
      <FormContextProvider
        defaultValues={defaultValuesProductForm}
        validationSchema={validationSchemaProductForm}
        onSubmit={(values) => mutate(values)}
      >
        <ProductForm />
      </FormContextProvider>
    </>
  )
}
