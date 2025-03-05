import React from "react";
import { LTproductCardContainer, ProductsGrid } from "../styled/Products";
import  Card  from "./Card";
import ProdCard from "../Products/Card";
import { TextAlign, Title } from "../styled/Text";
import { getAllOfferts,getAllProducts } from "../../utils/Products";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

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
    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"50px",marginBottom:"50px"}}>
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
            return <ProdCard product={product}/>
        })}
        </ProductsGrid>
    </div>
  );
};

export default LimitedTimeOfferts;