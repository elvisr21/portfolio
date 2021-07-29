import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
          <LinkColumn>
              <LinkTitle>Call </LinkTitle>
              <LinkItem href="tel:347-247-3546">347-247-3546</LinkItem>
          </LinkColumn>
          <LinkColumn>
              <LinkTitle>Email </LinkTitle>
              <LinkItem href="mailto:elvisrodriguez0621@gmail.com">elvisrodriguez0621@gmail.com</LinkItem>
          </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Innovating one project at the time</Slogan>
          </CompanyContainer>
          <SocialContainer>
              <SocialIcons href= "https://github.com/elvisr21">
                  <AiFillGithub size="3rem"/>
              </SocialIcons>
              <SocialIcons href= "https://linkedin.com/in/elvisr21">
                  <AiFillLinkedin size="3rem"/>
              </SocialIcons>
          </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
