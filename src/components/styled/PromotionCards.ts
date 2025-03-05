import styled from 'styled-components';
export enum BgColor {
    prymary = "rgba(181, 217, 251, 1)",
    secondary = "rgba(238, 209, 155, 0.4)",
    tertiary = "rgba(174, 132, 248, 0.5)",
}

export enum FontColor {
  black = "black",
  blackTransparent = "rgba(0, 0, 0, 1)",
}

export enum Size {
    small = "small",
    medium = "medium",
    large = "large"
}
interface Props {
    size:Size,
    bgcolor:BgColor,
    fontColor:FontColor,
}

export const PromotionCard = styled.div<Props>`
    background-color:${props => props.bgcolor};
    color:${props => props.fontColor};
    width:${props => props.size === "small" ? "20vw" : props.size === "large" ? "50vw" : "400px"};
    height:${props => props.size === "small" ? "32vh" : props.size === "large" ? "80vh" : "400px"};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:10px;
    justify-content: start;
    padding: 30px;
    padding-bottom: 0px;
    position:relative;
`;