import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';
import { Socialdata } from '../../constants/constants';


const Header = () =>  (
  <Container>
        <Div1>
            <Link href="/">
                  <a style={{display:"flex",alignItems:"center",color:"white", marginBottom:"20"}}>
                      <DiCssdeck size="3rem"/> <Span>Porfolio</Span>
                  </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
                <Link href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
                <Link href="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
          {Socialdata.map((item,index)=>(
              <SocialIcons href={item.link} key={index}>
                  {item.icon}
              </SocialIcons>
          ))}
        </Div3>
  </Container>
);

export default Header;
