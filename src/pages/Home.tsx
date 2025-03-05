
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PromotionCards from "../components/PromotionCards/PromotionCards";
import Products from "../components/Products/Products";
import NewProductsIMG from "../components/NewProductsIMG/NewProductsIMG";
import LimitedTimeOfferts from "../components/LimitedTimeOfferts/LimitedTimeOfferts";
const Home = () => {
  return (<>
  <Navbar/>
  <PromotionCards/>
  <Products/>
  <NewProductsIMG/>
  <LimitedTimeOfferts/>
  </>);
};

export default Home;
