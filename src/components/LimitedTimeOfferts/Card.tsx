import React from "react";
import {
  LTproductCard,
  LTproductSubWrap,
  ProductName,
  Description,
  ProductPrice,
  ProductPriceColor,
  ProductPriceSize,
  UntilTime,
  OldPrice,
} from "../styled/Products";
import Rating from "./Rating";
interface Props {
  name: string;
  imgURL?: string;
  description: string;
  price: number;
  oldPrice: number;
  untilDays: number;
  untilHours: number;
  untilMinutes: number;
  untilSeconds: number;
}
export const Card: React.FC<Props> = ({
  name,
  description,
  untilDays,
  untilHours,
  untilMinutes,
  untilSeconds,
  oldPrice,
  price,
}) => {
  return (
    <LTproductCard>
      <div>
        <div style={{ display: "flex", columnGap:"10px"}}>
          <img
            src="./iphone-prod.png"
            alt=""
            width={100}
            height={180}
            style={{ objectFit: "cover" }}
          />
          <LTproductSubWrap>
            <ProductName size={ProductPriceSize.large}>{name}</ProductName>
            <Description>{description}</Description>
            <Rating numberOfStars={4} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <ProductPrice
                color={ProductPriceColor.green}
                size={ProductPriceSize.large}
              >
                ${price}
              </ProductPrice>
              <OldPrice>${oldPrice}</OldPrice>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span style={{ fontSize: "12px" ,fontWeight:"bold"}}>{untilDays} Days</span>
              <UntilTime>00:{untilHours}</UntilTime>
              <UntilTime>00:{untilMinutes}</UntilTime>
              <UntilTime>00:{untilSeconds}</UntilTime>
            </div>
            <span style={{fontSize:"12px",color:"green"}}>In Stock</span>
          </LTproductSubWrap>
        </div>
      </div>
      <div>ICONS...</div>
      <div style={{ display: "flex",justifyContent:"center",columnGap:"10px" }}>
        <img src="./iphone-prod.png" alt="" width={100} />
        <img src="./iphone-prod.png" alt="" width={100} />
        <img src="./iphone-prod.png" alt="" width={100} />
      </div>
    </LTproductCard>
  );
};
