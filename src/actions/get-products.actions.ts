import { tesloApi } from "@/api/tesloApi"
import type { ProductsResponse } from "@/interfaces/products.respose";

export const getProductsActions = async () => {

    const { data } = await tesloApi.get<ProductsResponse>('/products');

    console.log(data);

    return data;

} 