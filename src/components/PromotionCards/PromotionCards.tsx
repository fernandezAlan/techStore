import React from "react";
import { PromotionCard } from "../styled/PromotionCards";
import { BgColor,FontColor,Size } from "../styled/PromotionCards";
import classes from "./PromotionCards.module.css";


const PromotionCards:React.FC = () => {
    return (
        <div className={classes.container}>
             <div className={classes.subcontainer}>
                <PromotionCard 
                bgcolor={BgColor.secondary} 
                fontColor={FontColor.blackTransparent}
                size={Size.small}
                >
                    <h2>IPhone 13 Pro</h2>
                    <p>A dramatically more powerful camera system. A display so responsive,</p>
                        <img src="./IPhone13_box.png" alt="" width={200} className={classes.img_iphone13}/>
                        <img src="./Next_page.png" alt="" width={10} className={classes.next_page_icon}/>
                </PromotionCard>
                <PromotionCard 
                bgcolor={BgColor.tertiary} 
                fontColor={FontColor.blackTransparent}
                size={Size.small}
                >
                    <h2>Galaxy Z Flip 4</h2>
                    <p>More compact. Improved battery. Faster processor. Tougher design. Better</p>
                    <img src="./galaxy-z-flip4.png" alt="" width={200} className={classes.img_galaxy}/>
                    <img src="./Next_page.png" alt="" width={10} className={classes.next_page_icon}/>
                </PromotionCard>
            </div>
           <PromotionCard 
           bgcolor={BgColor.prymary}
           fontColor={FontColor.black}
           size={Size.large}
           className={classes.pixel_card}
            >
                <h2>Google Pixel 8 Pro</h2>
                <h3>The new Google Tensor G3 chip is custom-designed with Google AI for cutting-edge photo and video features and smarter</h3>
                <p>
                    With Google AI and the best Pixel Camera, it's the most powerful, personal Pixel yet. 
                </p>
                <p>6.7" Super Actual display. Pixel's brightest ever.1</p>
                <p>Fully upgraded cameras and never-before-seen editing.</p>
                <p> Polished aluminium frame and matt back glass.</p>
                <button className={classes.button}>Learn More</button>
                <img src="./google-pixel-8.png" alt=""  className={classes.img_pixel}/>
            </PromotionCard>
           
        </div>
    );
}

export default PromotionCards;