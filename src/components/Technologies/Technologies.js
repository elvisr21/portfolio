import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { Technologiesdata } from '../../constants/constants';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
          I've worked with a range of technologies in the 
          development world. These are some of them.
      </SectionText>
      <List>
          {Technologiesdata.map((tech,id)=>(
            <ListItem key={id}>
              {tech.icon}
              <ListContainer>
                  <ListTitle>{tech.title}</ListTitle>
                  <ListParagraph>{tech.text}</ListParagraph>
              </ListContainer>
            </ListItem>
          ))}
      </List>
  </Section>
);

export default Technologies;
