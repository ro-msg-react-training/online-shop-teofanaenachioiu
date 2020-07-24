import Product from "../domain/Product"

interface ProductListProps {
    products: Product[],
    handleClickItemList: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, product: Product) => void
}

export default ProductListProps