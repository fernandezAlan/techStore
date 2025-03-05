import React from "react";
import { Description, LTproductCardContainer, OffertLabel, ProductCard, ProductName, ProductPrice, ProductsGrid, Rating } from "../styled/Products";
import { Card } from "./Card";
import { TextAlign, Title } from "../styled/Text";
import { getAllOfferts,getAllProducts } from "../../utils/Products";
import PaginationButtons from "../PaginationButtons/PaginationButtons";
import { HeartEmptyIcon, StartIcon } from "../icons/Icons";
const LimitedTimeOfferts = () => {
  const [offerts, setOfferts] = React.useState(getAllOfferts());
  const [products, setProducts] = React.useState(getAllProducts())
    const product = {
        name: "I Phone 15 pro max",
        description: "The best phone in the market",
        price: 1200,
        oldPrice: 1500,
        untilDays: 12,
        untilHours: 12,
        untilMinutes: 30,
        untilSeconds: 50,
    }
  return (
    <div style={{paddingLeft:"7vw",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"50px",marginBottom:"50px",paddingRight:"7vw"}}>
        <Title textAlign={TextAlign.left}>Limited time offers</Title>
          <PaginationButtons/>
        <LTproductCardContainer>
          {offerts.map((offert, index) => {
            return <Card {...offert} />;
          }
          )}
        </LTproductCardContainer>
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
    </div>
  );
};

export default LimitedTimeOfferts;