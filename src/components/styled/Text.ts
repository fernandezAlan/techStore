import styled from "styled-components";
export enum TextAlign {
    center = "center",
    left = "left",
    right = "right",
}
export const Title = styled.h1<{textAlign?:TextAlign}>`
    font-size: 18px;
    color: black;
    text-align: ${props=>props.textAlign ? props.textAlign : TextAlign.center};
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    border-bottom: 1px solid black;
    font-weight: bold;
`;