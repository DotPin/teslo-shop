import { getProductsActions } from "@/actions/get-products.actions"
import { useQuery } from "@tanstack/react-query"

export const useProducts = () => {

  //TODO viene logica

  return useQuery({
    queryKey: ['products'],
    queryFn: getProductsActions,
  })
}
