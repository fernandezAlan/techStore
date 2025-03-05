import React from "react";
import {
  FooterContainer,
  LinksContainer,
  SubFooterContainer,
  Ul,
  Li,
  ButtonContainer,
} from "../styled/Footer";
import { BlackButton } from "../styled/Buttons";

const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <LinksContainer>
          <Ul>
            <Li bold>Quick links</Li>
            <Li>Home</Li>
            <Li>About Us</Li>
            <Li>Contact Us</Li>
            <Li>FAQ</Li>
          </Ul>
          <Ul>
            <Li bold>Important Policies</Li>
            <Li>Privacy Policy</Li>
            <Li>Terms of Service</Li>
            <Li>Returns & Refunds</Li>
            <Li>Shipping Policy</Li>
          </Ul>
          <Ul>
            <Li bold>Let Us Help You</Li>
            <Li>Customer Support</Li>
            <Li>Live Chat</Li>
            <Li>Help Center</Li>
          </Ul>
          <Ul>
          <Li bold>Connect With Us</Li>
            <Li>Facebook</Li>
            <Li>Twitter</Li>
            <Li>Instagram</Li>
          </Ul>
          <Ul>
          <Li bold>Subscribe for updates and exclusive offers.</Li>
            <Li>Enter you email</Li>
          </Ul>
        </LinksContainer>
      <ButtonContainer>
        <BlackButton>Subscribe</BlackButton>
      </ButtonContainer>
      </FooterContainer>
      <SubFooterContainer>
        <p style={{ textAlign: "center" }}>
          © 2023 Bytez. All rights reserved. Bytez is your premier online source
          for the latest in technology products, providing innovation, quality,
          and exceptional customer experiences since our inception.
        </p>
      </SubFooterContainer>
    </>
  );
};

export default Footer;
