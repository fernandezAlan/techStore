import styled from "styled-components";

export enum ProductIMGSize {
  medium = "medium",
  large = "large",
}
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 20px;
  width: 100vw;
  padding-left: 7vw;
  padding-right: 7vw;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 35px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 20px;
  padding-bottom: 10px;
  border-radius: 10px;
  width: 150px;
  height: 235px;
  background-color: rgb(255, 255, 255);
  font-family: sans-serif;
  position: relative;
  color: black;
  box-shadow: -2px 0px 20px 3px rgba(125, 125, 125, 0.34);
  -webkit-box-shadow: -2px 0px 20px 3px rgba(125, 125, 125, 0.35);
  -moz-box-shadow: -2px 0px 20px 3px rgba(125, 125, 125, 0.35);
`;
export enum ProductPriceSize {
  small = "12px",
  medium = "16px",
  large = "17px",
}
export enum ProductPriceColor {
  black = "black",
  green = "rgba(13, 96, 0, 1)",
}
interface ProductPriceProps {
  color?: ProductPriceColor;
  size?: ProductPriceSize;
}
export const ProductPrice = styled.p<ProductPriceProps>`
  font-size: ${(props) => (props.size ? props.size : ProductPriceSize.large)};
  color: ${(props) => (props.color ? props.color : ProductPriceColor.black)};
  font-weight: bold;
  margin-top: 0px;
  margin-right: 10px;
  width: auto;
`;

export const ProductName = styled.p<ProductPriceProps>`
  font-size: ${props=>props.size ? props.size :ProductPriceSize.small};
  margin-top: 10px;
  font-weight: bold;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 5px;
  align-items: center;
  margin-top: 10px;
  background-color: rgba(255, 220, 181, 1);
  color: rgba(212, 141, 59, 1);
  font-weight: bold;
  font-size: 8px;
  width: 50px;
  border-radius: 50px;
  padding: 5px;
  height: 15px;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: lighter;
  text-align: left;
  color: #000000b8;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0px;
`;

export const OffertLabel = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;
  background-color: rgba(28, 106, 0, 1);
  color: white;
  font-size: 8px;
  padding: 5px;
`;
interface imgProps {
  size: ProductIMGSize;
  imgURL: string;
}

export const NewProductIMG = styled.div<imgProps>`
  width: ${(props) => (props.size === "medium" ? "240px" : "370px")};
  height: 330px;
  background-image: url("${(props) => props.imgURL}");
  border-radius: 10px;
  background-size: cover;
  bakground-position: center;
`;

export const NewProductsContainer = styled.div`
  display: flex;
  width: 100vw;
  padding-left: 7vw;
  padding-right: 7vw;
  column-gap: 30px;
  margin-top: 30px;
`;
//LIMITED TIME PRODUCT CARD
export const LTproductCardContainer = styled.div`
  display: flex;
  width: 100vw;
  column-gap: 30px;
  font-family: sans-serif;
`;
export const LTproductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: auto;
  background-color: white;
  border-radius: 10px;
  color: black;
  padding-left: 20px;
  box-shadow: -2px 0px 20px 3px rgba(125, 125, 125, 0.34);
  -webkit-box-shadow: -2px 0px 20px 3px rgba(125, 125, 125, 0.35);
  -moz-box-shadow: -2px 0px 20px 3px rgba(125, 125, 125, 0.35);
`;

export const LTproductSubWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px;
  padding-left: 0px;
  padding-right: 35px;
`;

export const UntilTime = styled.div`
  background-color: rgba(255, 189, 19, 1);
  font-size: 10px;
  width: 35px;
  border-radius: 2px;
  padding-top: 2px;
  padding-bottom: 2px;
  text-align: center;
  font-weight: bold;
`;

export const OldPrice = styled.p`
  font-size: 12px;
  text-decoration: line-through;
  color: rgba(3, 3, 3, 0.72);
  height: 20px;
  margin-top: 0px;
`;
