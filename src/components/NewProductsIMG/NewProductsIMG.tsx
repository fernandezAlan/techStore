import React from "react";
import { NewProductsContainer, ProductIMGSize,NewProductIMG } from "../styled/Products";

const NewProductsIMG: React.FC = () => {
    return (
        <NewProductsContainer>
          <NewProductIMG size={ProductIMGSize.large} imgURL={"./samsung-galaxy.png"}/>
          <NewProductIMG size={ProductIMGSize.medium} imgURL={"./largecard.png"}/>
          <NewProductIMG size={ProductIMGSize.medium} imgURL={"./samsung-galaxy.png"}/>
          <NewProductIMG size={ProductIMGSize.medium} imgURL={"./newProductIMG.png"}/>
        </NewProductsContainer>
    )
}

export default NewProductsIMG;