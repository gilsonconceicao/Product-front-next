'use client'
import { FormContextProvider } from "@/Contexts/FormContext/FormContext";
import { defaultValuesProductForm, validationSchemaProductForm } from "./Schema/ProductFormSchema";
import { Button } from "@mui/material";
import { ProductForm } from "./ProductForm";
import { useCreateProduct, useGetProductById, useUpdateProductById } from "@/Hooks/Products/ProductsHook";
import { useRouter } from "next/navigation";
import RefreshProgress from "@/Components/CircularProgress/CircularProgress";

export type ParamsType = { params: { id: string } }

export default function Page({ params }: ParamsType) {
  const id = params.id;
  const isNew = id === 'novo';
   const { data: dataProduct, isFetching, refetch } = useGetProductById(id);
  const onSuccess = () => {
    const message = isNew ? "Sucesso ao cadastrado o produto" : "Producto editado com sucesso"
    if (!isNew) refetch();
    alert(message);
  };
  const onError = (error: any) => {
    const errorMessage = Object.entries(error.response.data.errors).map(item => item[1]);
    alert("Houve um erro : " + errorMessage?.join(', '));
  };
  const { mutate: mutateUpdateProduct } = useUpdateProductById(id, onSuccess, onError)
  const { mutate } = useCreateProduct(onSuccess, onError);

  if (id !== 'novo' && (dataProduct === null || dataProduct === undefined)) {
    return <RefreshProgress />
  }

  return (
    <>
      {isFetching && <RefreshProgress />}
      <FormContextProvider
        defaultValues={dataProduct ?? defaultValuesProductForm}
        validationSchema={validationSchemaProductForm}
        onSubmit={(values) => isNew ? mutate(values) : mutateUpdateProduct(values)}
      >
        <ProductForm
          paramsId={id}
        />
      </FormContextProvider>
    </>
  )
}
