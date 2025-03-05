import React from "react";
import { Description, ProductCard, ProductName, ProductPrice, ProductsContainer, Rating,ProductsGrid, OffertLabel } from "../styled/Products";
import { TextAlign, Title } from "../styled/Text";
import { StartIcon,HeartEmptyIcon } from "../icons/Icons";
import { getAllProducts } from "../../utils/Products";
import PaginationButtons from "../PaginationButtons/PaginationButtons";
const Products:React.FC = () => {
    const [products, setProducts] = React.useState(getAllProducts())
    return  <>
    <ProductsContainer>
    <Title textAlign={TextAlign.left}>Recommended for you</Title>
    <PaginationButtons/>
    <ProductsGrid>
        {products.map((product,index) => {
            return <ProductCard>
            <OffertLabel>20% OFF</OffertLabel>
            <div style={{position:"absolute",top:"10px",right:"10px"}}>
                <HeartEmptyIcon/>
            </div>
            <img src="./i_phone_12.png" width="70px"/>
            <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            <ProductPrice>${product.price}</ProductPrice><Rating><StartIcon/>4.8</Rating>
            </div>
            <ProductName>{product.name}</ProductName>
            <Description>{product.description}</Description>
        </ProductCard>
        })}
            </ProductsGrid>
    </ProductsContainer>
    <ProductsContainer>
    <Title textAlign={TextAlign.left}>Featured Collections</Title>
    <PaginationButtons/>
    <ProductsGrid>
        {products.map((product,index) => {
            return <ProductCard>
            <OffertLabel>20% OFF</OffertLabel>
            <div style={{position:"absolute",top:"10px",right:"10px"}}>
                <HeartEmptyIcon/>
            </div>
            <img src="./i_phone_12.png" width="70px"/>
            <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            <ProductPrice>${product.price}</ProductPrice><Rating><StartIcon/>4.8</Rating>
            </div>
            <ProductName>{product.name}</ProductName>
            <Description>{product.description}</Description>
        </ProductCard>
        })}
        </ProductsGrid>
    </ProductsContainer>
    </>
}

export default Products;