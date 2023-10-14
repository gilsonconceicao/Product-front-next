import { getAllProducts } from "@/servers/Products/Products"
import { useQuery } from "react-query"

export const useGetProductList = () => {
  return useQuery({
    queryKey: ['products-list'],
    queryFn: () => getAllProducts()
  })
}