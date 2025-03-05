import styled from "styled-components";

export const FooterContainer = styled.div`
width:100vw;
height:260px;
background-color:rgba(255, 255, 255, 1);
display:flex;
padding-left:7vw;
padding-right:7vw;
padding-top:20px;
box-sizing:border-box;
`;

export const LinksContainer = styled.div`
width:70%;
display:flex;
justify-content:space-between;
`

export const ButtonContainer = styled.div`
width:30%;
heigth:100%;
display:flex;
justify-content:center;
align-items:center;
`

export const SubFooterContainer = styled.div`
width:100vw;
height:50px;
background-color:rgb(0, 0, 0);
font-family:sans-serif;
font-size:12px;
padding:10px 10px;
box-sizing:border-box;
`;

export const Ul = styled.ul`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
row-gap:10px;
list-style-type:none;
list-style:none;
`;

interface LiProps {
    bold?: boolean;
}
export const Li = styled.li<LiProps>`
font-family:sans-serif;
font-size:12px;
color:${props => props.bold ? "black" : "#393939"};
font-weight:${props => props.bold ? "bold" : "regular"};
`;