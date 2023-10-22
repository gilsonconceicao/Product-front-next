import { ProductType, createProduct, deleteProduct, getAllProducts } from "@/servers/Products/Products"
import { useMutation, useQuery } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form";

export const useGetProductList = () => {
  return useQuery({
    queryKey: ['products-list'],
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const { data } = await getAllProducts();
      return data as ProductType[];
    }
  })
}

export const useCreateProduct = (onSuccess: any, onError: any) => {
  return useMutation({
    mutationFn: async (payload: FieldValues) => await createProduct(payload as ProductType), 
    onError,
    onSuccess
  })
}

export const useDeleteProduct = (onSuccess: any) => {
  return useMutation({
    mutationFn: async (id:string) => await deleteProduct(id), 
    onError: () => {
      console.log("errro ao deletar produto")
    },
    onSuccess
  })
}