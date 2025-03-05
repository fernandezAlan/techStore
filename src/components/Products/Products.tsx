import React from "react";
import { Description, ProductCard, ProductName, ProductPrice, ProductsContainer, Rating,ProductsGrid, OffertLabel, HerthIconContainer, PriceRatingContainer } from "../styled/Products";
import { TextAlign, Title } from "../styled/Text";
import { StartIcon,HeartEmptyIcon } from "../icons/Icons";
import { getAllProducts } from "../../utils/Products";
import PaginationButtons from "../PaginationButtons/PaginationButtons";
import Card from "./Card";
const Products:React.FC = () => {
    const [products, setProducts] = React.useState(getAllProducts())
    return  <>
    <ProductsContainer>
    <Title textAlign={TextAlign.left}>Recommended for you</Title>
    <PaginationButtons/>
    <ProductsGrid>
        {products.map((product,index) => {
            return <Card product={product}/>
        })}
    </ProductsGrid>
    </ProductsContainer>
    <ProductsContainer>
    <Title textAlign={TextAlign.left}>Featured Collections</Title>
    <PaginationButtons/>
    <ProductsGrid>
    {products.map((product,index) => {
            return <Card product={product}/>
        })}
        </ProductsGrid>
    </ProductsContainer>
    </>
}

export default Products;