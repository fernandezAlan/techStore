
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PromotionCards from "../components/PromotionCards/PromotionCards";
import Products from "../components/Products/Products";
import NewProductsIMG from "../components/NewProductsIMG/NewProductsIMG";
import LimitedTimeOfferts from "../components/LimitedTimeOfferts/LimitedTimeOfferts";
const Home = () => {
  return (<>
  <main style={{paddingTop:"70px", paddingLeft:"7vw",paddingRight:"7vw",width:"100vw",boxSizing:"border-box"}}>
    <PromotionCards/>
    <Products/>
    <NewProductsIMG/>
    <LimitedTimeOfferts/>
  </main>
  </>);
};

export default Home;
