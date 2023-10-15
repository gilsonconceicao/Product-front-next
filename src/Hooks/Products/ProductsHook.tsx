import { ProductType, deleteProduct, getAllProducts } from "@/servers/Products/Products"
import { useMutation, useQuery } from "@tanstack/react-query"

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

export const useDeleteProduct = (onSuccess: any) => {
  return useMutation({
    mutationFn: async (id:string) => await deleteProduct(id), 
    onError: () => {
      console.log("errro ao deletar produto")
    },
    onSuccess
  })
}