import React from 'react';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

import { Socialdata } from '../../constants/constants';

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
              {Socialdata.map((item,index)=>(
                  <SocialIcons href={item.link} key={index}>
                      {item.icon}
                  </SocialIcons>
              ))}
          </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
