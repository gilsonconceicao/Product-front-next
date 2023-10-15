import { ProductType, getAllProducts } from "@/servers/Products/Products"
import { useQuery } from "@tanstack/react-query"

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