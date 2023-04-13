import { useParams } from "react-router-dom"

export const ProductDetails = () => {

    const { id } = useParams();

    return (
        <div>Product Details Page - {id}</div>
    )
}