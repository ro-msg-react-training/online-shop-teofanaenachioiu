import Product from "../domain/Product"

interface ProductListItemProps {
    product: Product,
    handleClickItemList: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, product: Product) => void
}

export default ProductListItemProps