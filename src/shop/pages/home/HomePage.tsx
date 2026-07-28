import { CustomPagination } from '@/components/custom/CustomPagination'
import { products } from '@/mocks/products.mock'
import { CustomJumbotron } from '@/shop/components/CustomJumbotron'
import { ProductGrid } from '@/shop/components/ProductGrid'

export const HomePage = () => {
    return (
        <>
            <CustomJumbotron title='Todos los Productos' />

            <ProductGrid products={products} />

            <CustomPagination totalPages={4} />
        </>

    )
}
