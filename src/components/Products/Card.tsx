import React from "react";
import { Description, HerthIconContainer, OffertLabel, PriceRatingContainer, ProductCard, ProductName, ProductPrice, Rating } from "../styled/Products";
import { HeartEmptyIcon, StartIcon } from "../icons/Icons";
import { ProductI } from "../../types/ProductstTypes";
interface Props {
    product: ProductI;
}
const Card:React.FC<Props> = ({product}) => {
return <ProductCard>
            <OffertLabel>20% OFF</OffertLabel>
            <HerthIconContainer>
                <HeartEmptyIcon/>
            </HerthIconContainer>
            <img src="./i_phone_12.png" width="70px"/>
            <PriceRatingContainer>
            <ProductPrice>${product.price}</ProductPrice><Rating><StartIcon/>4.8</Rating>
            </PriceRatingContainer>
            <ProductName>{product.name}</ProductName>
            <Description>{product.description}</Description>
        </ProductCard>
};

export default Card;