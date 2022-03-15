import React from 'react';

import{
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./footerstyles"

const Footer = () => {
    
    return (
        
      <Box>
     
        <Container >
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading>Clothing</Heading>
              <FooterLink href="#">Men</FooterLink>
              <FooterLink href="#">Women</FooterLink>
              <FooterLink href="#">Kids</FooterLink>
            </Column>
            <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Nepal</FooterLink>
            <FooterLink href="#">India</FooterLink>
            <FooterLink href="#">Australia</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      
    </Box>
    
   
  );
};
export default Footer;
