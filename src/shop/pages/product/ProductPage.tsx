import { useSearchParams } from "react-router"

export const ProductPage = () => {

    const [searchParams, _] = useSearchParams();

    console.log(searchParams.get('idSlug'))

    return (
        <>
            <h1>Product Detail</h1>
        </>
    )
}
